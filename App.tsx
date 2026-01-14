
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewState } from './types';
import InfoSection from './components/InfoSection';
import ShopArtSection from './components/ShopArtSection';
import ShopBooksSection from './components/ShopBooksSection';
import WorkSection from './components/WorkSection';
import PaintCursor from './components/PaintCursor';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [showNote, setShowNote] = useState(false);

  // Show the note on every load after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setShowNote(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const dismissNote = () => {
    setShowNote(false);
  };

  const zoomTo = useCallback((newView: ViewState) => {
    setView(newView);
  }, []);

  const goBack = useCallback(() => {
    setView('HOME');
  }, []);

  const zoomConfig = useMemo(() => {
    switch (view) {
      case 'HOME':
        return { scale: 1, x: 0, y: 0 };
      case 'INFO':
        return { scale: 1, x: 100, y: 100 };
      case 'SHOP_ART':
        return { scale: 1, x: -100, y: 100 };
      case 'SHOP_BOOKS':
        return { scale: 1, x: 100, y: -100 };
      case 'WORK':
        return { scale: 1, x: -100, y: -100 };
      default:
        return { scale: 1, x: 0, y: 0 };
    }
  }, [view]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white text-black font-sans cursor-none select-none">
      <PaintCursor />
      
      {/* Post-it Note Pop-up */}
      <AnimatePresence>
        {showNote && view === 'HOME' && (
          <motion.div
            initial={{ y: -50, opacity: 0, rotate: -10, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, rotate: -3, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ type: 'spring', damping: 12, stiffness: 90 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-[200] px-6"
          >
            <div 
              onClick={dismissNote}
              className="relative w-full max-w-[280px] aspect-square bg-[#fff98a] p-8 shadow-[15px_15px_35px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center text-center border-b-2 border-r-2 border-black/10 pointer-events-auto transform transition-transform hover:scale-105 active:scale-95 group"
            >
              {/* Tape visual - semi-transparent "scotch tape" */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-10 bg-white/50 backdrop-blur-[1px] rotate-[-2deg] z-10 border border-white/20"></div>
              
              <p className="handwritten text-4xl md:text-5xl font-bold leading-[1.1] text-black/90">
                You’re early — explore anyway.
              </p>
              
              {/* Corner Fold visual */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[30px] border-t-transparent border-r-[30px] border-r-black/5"></div>
              
              <div className="absolute bottom-4 left-0 right-0 opacity-40">
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">[ Click to close ]</span>
              </div>
              
              {/* X Close icon */}
              <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                 <span className="text-2xl font-black">×</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {view !== 'HOME' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-4 md:top-8 md:left-8 z-50 cursor-none"
            onClick={goBack}
          >
            <div className="marker-box px-4 py-2 md:px-6 md:py-3 bg-white hover:bg-black hover:text-white transition-all transform active:scale-95 shadow-lg flex items-center space-x-2">
              <span className="text-lg md:text-xl font-black">←</span>
              <span className="text-xs md:text-sm font-bold tracking-tighter uppercase">BACK</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="w-full h-full flex items-center justify-center origin-center"
        animate={{
          scale: zoomConfig.scale,
          x: `${zoomConfig.x}vw`,
          y: `${zoomConfig.y}vh`,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 85,
          mass: 1.1
        }}
      >
        <div className="relative w-[100vw] h-[100vh]">
          
          <div className="absolute inset-0 flex flex-col items-center justify-start md:justify-center p-4 md:p-8 space-y-6 md:space-y-10 h-full pt-16 md:pt-0">
            <div className="relative flex flex-col items-center w-full max-w-4xl lg:max-w-6xl max-h-[45vh] md:max-h-[60vh]">
              <img 
                src="https://i.ibb.co/21TwmQ3C/image-8.png" 
                alt="Lorainé Velez Logo" 
                className="w-full h-auto max-h-[35vh] md:max-h-[50vh] object-contain pointer-events-none drop-shadow-sm filter contrast-125 scale-110 md:scale-100"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-4 w-full max-w-md md:max-w-xl">
              {[
                { label: 'ABOUT', v: 'INFO' as ViewState, note: 'bio' },
                { label: 'ART', v: 'SHOP_ART' as ViewState, note: 'shop' },
                { label: 'BOOKS', v: 'SHOP_BOOKS' as ViewState, note: 'shop' },
                { label: 'WORK', v: 'WORK' as ViewState, note: 'folio' },
              ].map((b) => (
                <button 
                  key={b.label}
                  onClick={() => zoomTo(b.v)}
                  className="relative group marker-box w-full h-20 sm:h-16 md:h-20 bg-white hover:bg-black hover:text-white transition-all transform hover:-rotate-1 hover:z-20 flex items-center justify-center text-3xl sm:text-2xl md:text-3xl font-black italic tracking-tighter cursor-none"
                >
                  {b.label}
                  <div className="absolute -bottom-8 -right-4 md:-bottom-8 md:-right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 handwritten text-3xl md:text-3xl text-black bg-white marker-box px-4 py-1 md:px-5 md:py-1 pointer-events-none z-10 shadow-2xl rotate-6 group-hover:scale-110">
                    {b.note}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="absolute top-[-100vh] left-[-100vw] w-[100vw] h-[100vh] bg-white border-r-4 border-b-4 border-black/5 overflow-y-auto custom-scroll">
            <InfoSection isVisible={view === 'INFO'} />
          </div>

          <div className="absolute top-[-100vh] left-[100vw] w-[100vw] h-[100vh] bg-white border-l-4 border-b-4 border-black/5 overflow-y-auto custom-scroll">
            <ShopArtSection isVisible={view === 'SHOP_ART'} />
          </div>

          <div className="absolute top-[100vh] left-[-100vw] w-[100vw] h-[100vh] bg-white border-r-4 border-t-4 border-black/5 overflow-y-auto custom-scroll">
            <ShopBooksSection isVisible={view === 'SHOP_BOOKS'} />
          </div>

          <div className="absolute top-[100vh] left-[100vw] w-[100vw] h-[100vh] bg-white border-l-4 border-t-4 border-black/5 overflow-y-auto custom-scroll">
            <WorkSection isVisible={view === 'WORK'} />
          </div>

        </div>
      </motion.div>

      <AnimatePresence>
        {view === 'HOME' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-12 right-4 md:bottom-12 md:right-8 pointer-events-none text-right z-50"
          >
            <span className="handwritten text-2xl md:text-4xl font-bold opacity-30 select-none">L. Velez</span>
            <div className="w-16 md:w-24 h-1 bg-black rounded-full mt-1 opacity-10 ml-auto"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 left-0 w-full py-2 px-4 flex justify-center items-center pointer-events-none z-[60] bg-black">
        <span className="text-[6.5px] min-[370px]:text-[8px] md:text-[10px] font-bold tracking-[0.05em] min-[370px]:tracking-[0.15em] uppercase text-center text-white whitespace-nowrap">
          Made with ♥ by Loraine Velez © 2026. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default App;
