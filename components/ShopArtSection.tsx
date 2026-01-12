import { Product } from '../types';
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';

interface Props {
  isVisible: boolean;
}

const ShopArtSection: React.FC<Props> = ({ isVisible }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center bg-white px-6 md:px-12 pt-24 pb-8 md:pt-32 md:pb-14">
      <motion.div 
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="max-w-7xl w-full space-y-12 md:space-y-16 pb-10"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 border-b-4 border-black pb-6">
           <div className="space-y-1">
             <h2 className="text-7xl md:text-[8rem] font-black tracking-tighter leading-none m-0">ART.</h2>
             <span className="handwritten text-2xl md:text-3xl italic text-black/40 block ml-1">Curated Collection</span>
           </div>
           <div className="max-w-xs md:text-right">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] block mb-1">Prints, Original Works & More</span>
              <p className="text-xs md:text-sm font-medium leading-relaxed opacity-70">
               A selection of limited edition prints, original artwork, and occasional objects, produced in limited quantities.
              </p>
           </div>
        </div>

        {/* Categories */}
        <div className="space-y-14">
           {/* Section 1: Prints */}
           <div className="space-y-8">
              <div className="flex items-end justify-between border-b-2 border-black/10 pb-2">
                 <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">01. Prints</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                 {PRODUCTS.filter(p => p.type === 'PRINT').map(product => (
                    <ProductCard key={product.id} product={product} />
                 ))}
              </div>
           </div>

           {/* Section 2: Originals */}
           <div className="space-y-8">
              <div className="flex items-end justify-between border-b-2 border-black/10 pb-2">
                 <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">02. Originals</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                 {PRODUCTS.filter(p => p.type === 'ORIGINAL').map(product => (
                    <ProductCard key={product.id} product={product} />
                 ))}
              </div>
           </div>

           {/* Section 3: Other */}
           <div className="space-y-8">
              <div className="flex items-end justify-between border-b-2 border-black/10 pb-2">
                 <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">03. Other</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                 {PRODUCTS.filter(p => p.type === 'OTHER').map(product => (
                    <ProductCard key={product.id} product={product} />
                 ))}
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const isPrint = product.type === 'PRINT';
  const isOriginal = product.type === 'ORIGINAL';
  const isOther = product.type === 'OTHER';
  
  const status = product.availability || 'IN_STOCK';
  const isPositive = status === 'IN_STOCK' || status === 'AVAILABLE';
  const glowClass = isPositive ? 'bg-green-400 animate-glow' : 'bg-red-500 animate-glow-red';
  
  // Determine labels based on type and status
  let statusText = '';
  if (isPrint || isOther) {
    statusText = status === 'IN_STOCK' ? 'IN STOCK' : 'COMING SOON';
  } else if (isOriginal) {
    statusText = status === 'AVAILABLE' ? 'AVAILABLE' : 'SOLD';
  }

  const typeLabel = product.type;
  const buttonLabel = isPrint || isOther ? (status === 'IN_STOCK' ? 'Buy Now' : 'Notify Me') : (status === 'AVAILABLE' ? 'Inquire' : 'Private Collection');

  return (
    <div className="group flex flex-col h-full bg-white transition-all duration-500">
      <div className="aspect-[4/5] bg-gray-50 overflow-hidden relative mb-4 border-[1px] border-black/5">
         {/* Status Overlays - Now spread to opposite sides */}
         <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
            {/* Type Label (Left) */}
            <div className="bg-black text-white px-2 py-1 text-[8px] font-black uppercase tracking-widest w-fit shadow-sm">
                {typeLabel}
            </div>

            {/* Status Indicator (Right) */}
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-black px-2 py-1 shadow-sm">
                <div className={`w-2 h-2 rounded-full ${glowClass}`}></div>
                <span className="text-[8px] font-black uppercase tracking-widest leading-none">{statusText}</span>
            </div>
         </div>

         <img 
            src={product.image} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            alt={product.name}
         />
      </div>
      
      <div className="flex-1 space-y-3 flex flex-col">
        <div className="flex justify-between items-start">
          <div className="space-y-0.5">
            <h4 className="text-xl font-black tracking-tighter uppercase leading-none">{product.name}</h4>
            <span className="text-[9px] font-bold text-black/40 uppercase tracking-widest">
              {product.description || (isPrint ? '12 x 12 archival print, frame ready' : 'Hand-crafted original piece')}
            </span>
          </div>
          <span className="text-lg font-black tracking-tight">{product.price}</span>
        </div>

        <button 
          className={`w-full py-3 font-black uppercase tracking-widest text-[10px] border-2 border-black transition-all active:scale-[0.97] cursor-none ${
            isPositive 
              ? 'bg-black text-white hover:bg-white hover:text-black' 
              : 'bg-white text-black hover:bg-black hover:text-white'
          }`}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ShopArtSection;