import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';

interface Props {
  isVisible: boolean;
}

const ShopBooksSection: React.FC<Props> = ({ isVisible }) => {
  const books = PRODUCTS.filter(p => p.type === 'BOOK');
  const featuredBook = books[0];
  const otherBooks = books.slice(1);

  return (
    <div className="w-full min-h-full flex flex-col bg-white overflow-x-hidden">
      <motion.div 
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="max-w-6xl mx-auto w-full px-6 py-12 md:py-20 space-y-16 md:space-y-24"
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
            <span className="handwritten text-3xl md:text-4xl -rotate-2 opacity-40">words for the weary</span>
          </div>
        </header>

        {/* --- Featured Publication (Clean Hero) --- */}
        {featuredBook && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="space-y-2">
                <span className="handwritten text-4xl text-black/40 block">Latest Release</span>
                <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                  {featuredBook.name}
                </h3>
              </div>
              
              <div className="space-y-4 text-lg md:text-xl leading-relaxed">
                <p className="font-bold">
                  Exploring the architectural silence of the mind through typography.
                </p>
                <div className="p-5 border-2 border-black border-dashed flex flex-col space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Technical Specs</span>
                  <p className="text-sm">Hardcover, Linen Wrap, 140gsm Uncoated Paper. Printed in Berlin.</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-4xl font-black tracking-tighter">{featuredBook.price}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-black text-white">First Edition</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 py-4 bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black border-2 border-black transition-all active:scale-95 shadow-xl">
                    Buy on Amazon
                  </button>
                  <button className="flex-1 py-4 bg-white text-black font-black uppercase tracking-widest text-xs border-2 border-black hover:bg-black hover:text-white transition-all active:scale-95">
                    More Details
                  </button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4] bg-gray-50 flex items-center justify-center p-6 border border-black/5 shadow-2xl transform rotate-2">
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
                  <img src={book.image} alt={book.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h5 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">{book.name}</h5>
                    <span className="font-black text-lg">{book.price}</span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Independent Press</p>
                  <button className="w-full py-3 bg-white border-2 border-black text-black font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all">
                    View Release
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Imprint Section (BigFeelings) - Styled, Large Logo, Justified, Standard Border --- */}
        <section className="bg-[#E30B5D] text-white p-8 md:p-16 flex flex-col items-center overflow-hidden relative">
          {/* Subtle background decoration */}
          <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
             <svg width="200" height="200" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
             </svg>
          </div>
          
          <div className="max-w-4xl w-full flex flex-col items-center space-y-12 md:space-y-16 border-[3px] border-white p-8 md:p-20 relative">
            <div className="flex flex-col items-center space-y-4">
              <span className="handwritten text-4xl md:text-5xl block text-white/90 -rotate-2">The Imprint</span>
              <img 
                src="https://i.ibb.co/0VqPW0W7/Big-Feelings-White-Logo.png" 
                alt="Big Feelings Logo" 
                className="h-32 md:h-80 w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              />
            </div>
            
            <div className="max-w-2xl space-y-10 flex flex-col items-center">
              <div className="space-y-2 w-full">
                <div className="h-0.5 w-12 bg-white/40 mb-4 mx-auto md:mx-0"></div>
                <p className="text-xl md:text-2xl font-bold leading-relaxed tracking-tight text-justify">
                  Big Feelings Book Co. is a children’s publishing imprint by Loraine Velez creating books as tools for adults to support the emotional development of children.
                </p>
                <div className="flex justify-end pt-2">
                   <span className="handwritten text-2xl opacity-60">est. 2024</span>
                </div>
              </div>
              
              <button className="px-16 py-5 bg-white text-[#E30B5D] font-black uppercase tracking-[0.2em] text-xs hover:bg-transparent hover:text-white border-2 border-white transition-all active:scale-95 shadow-2xl">
                learn more
              </button>
            </div>
            
            <div className="w-full max-w-md aspect-square bg-black/20 p-2 md:p-4 rotate-1 shadow-2xl">
               <div className="w-full h-full bg-gray-200 overflow-hidden grayscale group">
                 <img 
                   src={books[0].image} 
                   className="w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]" 
                   alt="Big Feelings Visual" 
                 />
               </div>
               <div className="absolute -bottom-4 -left-4 handwritten text-3xl bg-[#E30B5D] px-4 py-1 border-2 border-white shadow-xl rotate-3">
                  featured visual
               </div>
            </div>
          </div>
        </section>

        {/* --- Footer Signature --- */}
        <footer className="pt-12 flex flex-col items-center space-y-6 text-center pb-12">
          <div className="w-20 h-1 bg-black rounded-full opacity-10"></div>
          <p className="handwritten text-2xl md:text-3xl opacity-30 max-w-xs leading-tight">
            "Every page is a place to land."
          </p>
          <div className="flex space-x-3 opacity-10">
            <span className="text-xs font-black uppercase">Established 2024</span>
            <span>/</span>
            <span className="text-xs font-black uppercase">Printed Matter</span>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default ShopBooksSection;