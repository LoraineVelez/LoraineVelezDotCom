import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';

interface Props {
  isVisible: boolean;
}

const ShopBooksSection: React.FC<Props> = ({ isVisible }) => {
  const books = PRODUCTS.filter(p => p.type === 'BOOK');
  const featuredBook = books.find(b => b.name.includes('Where Love Goes')) || books[0];
  const otherBooks = books.filter(b => b.id !== featuredBook.id);

  return (
    <div className="w-full min-h-full flex flex-col bg-white overflow-x-hidden">
      <motion.div 
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="max-w-6xl mx-auto w-full px-6 py-10 md:py-16 space-y-12 md:space-y-16"
      >
        {/* --- Minimal Editorial Header --- */}
        <header className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-1 w-10 bg-black"></div>
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-black">Vol. 01 — Editorial</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase border-b-8 border-black pb-6">
            BOOKS.
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <p className="max-w-md text-sm md:text-base font-medium leading-snug opacity-80">
              An ongoing exploration of the printed word. Limited edition releases focusing on psychological depth and tactile production.
            </p>
          </div>
        </header>

        {/* --- Featured Publication (Clean Hero) --- */}
        {featuredBook && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="space-y-2">
                <span className="handwritten text-4xl text-black/40 block">New Release</span>
                <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                  {featuredBook.name}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 pt-1">
                   <div className="flex flex-col">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Author</span>
                      <span className="text-[11px] font-black uppercase tracking-widest">Loraine Velez-Lugo</span>
                   </div>
                   <div className="h-6 w-[1px] bg-black/10 hidden sm:block"></div>
                   <div className="flex flex-col">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Artist</span>
                      <span className="text-[11px] font-black uppercase tracking-widest">Paola Acosta</span>
                   </div>
                </div>
              </div>
              
              <div className="space-y-4 text-lg md:text-xl leading-relaxed">
                <p className="font-bold border-l-4 border-black pl-4">
                  "{featuredBook.description}"
                </p>
                <p className="text-sm md:text-base opacity-70 leading-relaxed italic">
                  Where Love Goes follows Little Willow as she remembers the quiet, loving moments she shared with her guardian, Grand Willow. When Grand Willow is no longer there, Little Willow begins to wonder where that love has gone and slowly discovers that love does not disappear, it finds new ways to stay with us.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black tracking-tighter">{featuredBook.price}</span>
                  </div>
                  {/* Keep this "In Stock" indicator near the buy section */}
                  <div className="flex items-center space-x-2 bg-black text-white px-3 py-1.5 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-glow"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest leading-none">In Stock</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="https://amazon.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-[1.2] py-4 bg-black text-white font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-black border-2 border-black transition-all active:scale-95 shadow-xl flex items-center justify-center cursor-none group"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Buy on Amazon
                  </a>
                  <a 
                    href="https://bigfeelingsbookco.com/#/collections/where-love-goes"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-white text-black font-black uppercase tracking-widest text-[11px] border-2 border-black hover:bg-black hover:text-white transition-all active:scale-95 flex items-center justify-center cursor-none"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-sm:max-w-xs md:max-w-md aspect-[3/4] bg-gray-50 flex items-center justify-center p-6 border border-black/5 shadow-2xl transform rotate-2">
                <img 
                  src={featuredBook.image} 
                  alt={featuredBook.name} 
                  className="w-full h-full object-contain shadow-[20px_20px_40px_rgba(0,0,0,0.1)]" 
                />
                <div className="absolute -top-4 -right-4 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center -rotate-12 border-4 border-white">
                  <span className="font-black text-[10px] uppercase tracking-tighter text-center leading-none">New<br/>Drop</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- Uniform Catalog Grid --- */}
        <section className="space-y-8">
          <div className="flex items-end space-x-4 border-b-2 border-black pb-3">
            <h4 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">The Library</h4>
            <div className="h-0.5 flex-1 bg-black/10"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {otherBooks.map(book => (
              <div key={book.id} className="flex flex-col group">
                <div className="aspect-[4/5] bg-gray-100 mb-4 overflow-hidden border border-black/5 relative shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <img src={book.image} alt={book.name} className="w-full h-full object-cover transition-all duration-700" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h5 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">{book.name}</h5>
                    <span className="font-black text-lg">{book.price}</span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Independent Press</p>
                  <button className="w-full py-3 bg-white border-2 border-black text-black font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all cursor-none">
                    View Release
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Imprint Section (BigFeelings) - Tighter Spacing --- */}
        <section className="bg-[#E30B5D] text-white p-6 md:p-10 flex flex-col items-center overflow-hidden relative">
          <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
             <svg width="200" height="200" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
             </svg>
          </div>
          
          <div className="max-w-4xl w-full flex flex-col items-center space-y-8 md:space-y-10 border-[3px] border-white p-6 md:p-12 relative">
            <div className="flex flex-col items-center space-y-3">
              <span className="handwritten text-4xl md:text-5xl block text-white/90 -rotate-2">The Imprint</span>
              <img 
                src="https://i.ibb.co/0VqPW0W7/Big-Feelings-White-Logo.png" 
                alt="Big Feelings Logo" 
                className="h-32 md:h-64 w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              />
            </div>
            
            <div className="max-w-2xl space-y-6 flex flex-col items-center">
              <div className="space-y-2 w-full">
                <div className="h-0.5 w-12 bg-white/40 mb-3 mx-auto md:mx-0"></div>
                <p className="text-lg md:text-xl font-bold leading-relaxed tracking-tight text-justify">
                  Big Feelings Book Co. is a children’s publishing imprint by Loraine Velez creating books as tools for adults to support the emotional development of children.
                </p>
                <div className="flex justify-end pt-1">
                   <span className="handwritten text-xl opacity-60">est. 2026</span>
                </div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.08, boxShadow: "0px 15px 35px rgba(0,0,0,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-white text-[#E30B5D] font-black uppercase tracking-[0.25em] text-[10px] hover:bg-transparent hover:text-white border-2 border-white transition-all shadow-2xl cursor-none relative overflow-hidden group/btn"
              >
                <span className="relative z-10">learn more</span>
                <motion.div 
                   className="absolute inset-0 bg-white"
                   animate={{ 
                      opacity: [0.15, 0.4, 0.15],
                      scale: [1, 1.3, 1]
                   }}
                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.button>
            </div>
            
            <div className="w-full max-w-md aspect-square bg-black/20 p-2 md:p-4 shadow-2xl relative overflow-hidden">
               <div className="w-full h-full bg-gray-200 overflow-hidden group">
                 <img 
                   src="https://i.ibb.co/whXfx08k/Generated-Image-January-08-2026-5-23-PM.png" 
                   className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]" 
                   alt="Big Feelings Visual" 
                 />
               </div>
            </div>
          </div>
        </section>

        {/* --- Signature Footer - Tighter Spacing --- */}
        <footer className="pt-6 pb-12 flex flex-col items-center space-y-3">
          <div className="flex flex-col items-center space-y-1">
            <span className="handwritten text-4xl md:text-5xl opacity-20 italic">L. Velez</span>
            <div className="w-12 h-1 bg-black opacity-10 rounded-full"></div>
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30">Print // 2026</span>
        </footer>
      </motion.div>
    </div>
  );
};

export default ShopBooksSection;