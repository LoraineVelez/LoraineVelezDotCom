
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';

interface Props {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal: React.FC<Props> = ({ product, onClose }) => {
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!product) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((touch.clientX - left) / width) * 100;
    const y = ((touch.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-white flex flex-col md:flex-row items-stretch overflow-hidden cursor-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-[10001] marker-box px-6 py-3 bg-white hover:bg-black hover:text-white transition-all transform active:scale-95 shadow-xl flex items-center space-x-2 cursor-none"
        >
          <span className="text-xs font-black uppercase tracking-widest">CLOSE [×]</span>
        </button>

        {/* Image Display Area */}
        <div 
          className="flex-1 relative overflow-hidden bg-gray-50 flex items-center justify-center p-4 md:p-12 lg:p-20"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseEnter={() => setIsZooming(true)}
          onMouseLeave={() => setIsZooming(false)}
          onTouchStart={() => setIsZooming(true)}
          onTouchEnd={() => setIsZooming(false)}
        >
          <motion.div 
            className="w-full h-full relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-contain transition-transform duration-150 ease-out select-none pointer-events-none ${isZooming ? 'opacity-0' : 'opacity-100'}`}
            />
            {/* Zoomed View */}
            <div 
              className={`absolute inset-0 bg-no-repeat transition-opacity duration-300 pointer-events-none ${isZooming ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                backgroundSize: '250%',
              }}
            />
          </motion.div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
             <span className="handwritten text-xl opacity-40">Move to pan & zoom</span>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="w-full md:w-[400px] lg:w-[480px] bg-white border-l-4 border-black p-8 md:p-12 flex flex-col justify-between">
           <div className="space-y-8">
              <div className="space-y-2">
                <div className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest w-fit">
                   {product.type}
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                  {product.name}
                </h2>
                <div className="flex items-center space-x-2 pt-2">
                   <span className="text-3xl font-black">{product.price}</span>
                   <div className="h-[2px] flex-1 bg-black/10"></div>
                </div>
              </div>

              <div className="space-y-4">
                 <p className="text-lg font-bold italic opacity-70 border-l-4 border-black pl-4">
                    {product.description || "Archival quality presentation, frame ready."}
                 </p>
                 <div className="space-y-2 pt-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Specs</span>
                    <ul className="space-y-1 text-xs font-bold uppercase tracking-tight">
                       <li>• Printed on acid-free paper</li>
                       <li>• Signed by the artist</li>
                       <li>• Carefully packed and shipped flat</li>
                    </ul>
                 </div>
              </div>
           </div>

           <div className="pt-12 space-y-4">
              <button className="w-full py-5 bg-black text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-black border-4 border-black transition-all active:scale-[0.98] cursor-none shadow-xl flex items-center justify-center space-x-4">
                 ADD TO CART
              </button>
              <div className="text-center">
                 <span className="handwritten text-2xl opacity-20 italic select-none">L. Velez Edition</span>
              </div>
           </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuickViewModal;
