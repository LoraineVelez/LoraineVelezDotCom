import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';

interface Props {
  isVisible: boolean;
}

const ShopArtSection: React.FC<Props> = ({ isVisible }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center bg-white px-6 md:px-12 py-12 md:py-20">
      <motion.div 
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="max-w-7xl w-full space-y-16 md:space-y-24 pb-12 md:pb-20 pt-12 md:pt-0"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 border-b-4 border-black pb-8">
           <div className="space-y-2">
             <h2 className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none m-0">ART.</h2>
             <span className="handwritten text-3xl md:text-5xl italic text-black/40 block ml-2">physical artifacts</span>
           </div>
           <div className="max-w-xs md:text-right">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] block mb-2">Curated Collection</span>
              <p className="text-sm font-medium leading-relaxed opacity-70">
                A selection of limited edition prints and one-of-a-kind original paintings explored through light and form.
              </p>
           </div>
        </div>

        {/* Categories */}
        <div className="space-y-20">
           {/* Section 1: Prints */}
           <div className="space-y-10">
              <div className="flex items-end justify-between border-b-2 border-black/10 pb-3">
                 <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">01. Prints</h3>
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Giclée on Archival Paper</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                 {PRODUCTS.filter(p => p.type === 'PRINT').map(product => (
                    <ProductCard key={product.id} product={product} />
                 ))}
              </div>
           </div>

           {/* Section 2: Originals */}
           <div className="space-y-10">
              <div className="flex items-end justify-between border-b-2 border-black/10 pb-3">
                 <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">02. Originals</h3>
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Unique works on canvas/wood</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                 {PRODUCTS.filter(p => p.type === 'ORIGINAL').map(product => (
                    <ProductCard key={product.id} product={product} />
                 ))}
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const isPrint = product.type === 'PRINT';
  const buttonLabel = isPrint ? 'Buy Print' : 'Inquire & Purchase';

  return (
    <div className="group flex flex-col h-full bg-white transition-all duration-500">
      <div className="aspect-[4/5] bg-gray-50 overflow-hidden relative mb-6 border-[1px] border-black/5">
         <img 
            src={product.image} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            alt={product.name}
         />
         
         {/* Top Labels Container */}
         <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
           {isPrint && (
             <div className="bg-white px-3 py-1 text-[9px] font-black uppercase tracking-widest border border-black shadow-sm pointer-events-auto">
               Open Edition
             </div>
           )}
           
           {isPrint && (
             <div className="bg-white px-3 py-1 flex items-center space-x-2 text-[9px] font-black uppercase tracking-widest border border-black shadow-sm pointer-events-auto">
               <span className="relative flex h-2 w-2">
                 <span className="animate-glow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span>In Stock</span>
             </div>
           )}
         </div>
      </div>
      
      <div className="flex-1 space-y-4 flex flex-col">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h4 className="text-2xl font-black tracking-tighter uppercase leading-none">{product.name}</h4>
            <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Ships worldwide</span>
          </div>
          <span className="text-xl font-black tracking-tight">{product.price}</span>
        </div>

        <div className="h-px w-full bg-black/10"></div>
        
        <button className="w-full py-4 bg-black text-white font-black uppercase tracking-widest text-[11px] border-2 border-black hover:bg-white hover:text-black transition-all duration-300 active:scale-[0.97] cursor-none">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default ShopArtSection;