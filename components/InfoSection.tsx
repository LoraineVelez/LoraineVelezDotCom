import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  isVisible: boolean;
}

const InfoSection: React.FC<Props> = ({ isVisible }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center bg-white px-6 py-20 md:py-32">
      <motion.div 
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="max-w-4xl w-full space-y-24 md:space-y-40"
      >
        {/* --- SECTION 01: WEBSITE INFO --- */}
        <section className="space-y-10">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Index 0.1 // The Container</span>
            <div className="h-[1px] flex-1 bg-black/10"></div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-8xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.75] m-0 italic">
              THE BRAIN.
            </h2>
            <div className="max-w-3xl">
              <p className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                This website is my brain. It holds the things I make and the things I build, brought together in one place so they can exist the way they do in my head.
              </p>
              <div className="mt-8 flex items-start space-x-6">
                <div className="w-2 h-20 bg-black mt-2"></div>
                <p className="text-xl md:text-2xl font-medium leading-tight opacity-70 italic">
                  Art, books, websites, and experiments live here side by side, connected by how they’re made.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thick Divider */}
        <div className="w-full h-4 md:h-8 bg-black"></div>

        {/* --- SECTION 02: ABOUT LORAINE --- */}
        <section className="space-y-16 md:space-y-24">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            {/* Bio Column */}
            <div className="flex-1 space-y-10">
              <div className="space-y-2">
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">ABOUT<br/>LORAINE.</h3>
                <span className="handwritten text-3xl md:text-4xl opacity-40 block">a lifelong student of curiosity</span>
              </div>

              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
                <p>
                  Loraine Velez is a Philadelphia based creative born in <span className="marker-underline font-black">Mayagüez, Puerto Rico</span> and raised in New London, Connecticut. Making things has been the most consistent part of her life. Long before she had language for it, she was drawing, building, selling, and experimenting, following curiosity wherever it led.
                </p>
                
                <div className="marker-box p-8 bg-black text-white space-y-4 -rotate-1">
                  <p className="font-bold">
                    She works in acrylic on canvas and makes drawings that are playful, cartoonish, and intentionally light. Humor is a choice. Softness is a choice.
                  </p>
                  <p className="text-sm opacity-80 uppercase tracking-widest font-black">
                    Life is serious and often heavy, and her work pushes back against that without pretending it doesn’t exist.
                  </p>
                </div>

                <p>
                  Alongside her art, Loraine studied Business Administration at Johnson and Wales University and has worked in real estate, marketing, and operations. That work taught her how to execute, manage projects, and follow through, while art has remained the constant.
                </p>

                <div className="space-y-4 border-l-4 border-black pl-6 italic">
                  <p>
                    She created <span className="font-black underline uppercase">Big Feelings Book Co.</span>, a children’s book imprint shaped by lived experience and a deep interest in emotion, safety, and care. 
                  </p>
                  <span className="handwritten text-2xl opacity-50">— tools for the moments that matter most</span>
                </div>

                <p>
                  Her work doesn’t follow a straight line. Interests shift, return, and overlap. This range isn’t accidental, it reflects how she learns, thinks, and builds over time.
                </p>
              </div>
            </div>

            {/* Visual Column */}
            <div className="w-full md:w-80 lg:w-96 space-y-10">
              <div className="relative marker-box p-3 bg-white rotate-2 shadow-2xl">
                <div className="tape tape-top-left"></div>
                <div className="tape tape-top-right"></div>
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" 
                    alt="Lorainé Velez" 
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="handwritten text-3xl">Loraine, 2026.</span>
                </div>
              </div>

              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block border-b border-black/10 pb-2">Status</span>
                <div className="space-y-4">
                  <div className="marker-box p-4 bg-gray-50 text-xs font-bold uppercase tracking-tighter">
                    Philadelphia // Current Base
                  </div>
                  <div className="marker-box p-4 bg-gray-50 text-xs font-bold uppercase tracking-tighter -rotate-1">
                    PR → CT → RI → PA
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block border-b border-black/10 pb-2">Direct</span>
                <div className="flex flex-col space-y-4 items-start">
                  <a href="mailto:hello@lorainevelez.com" className="text-2xl font-black underline decoration-4 hover:bg-black hover:text-white transition-all px-1">
                    Email
                  </a>
                  <a href="#" className="text-2xl font-black underline decoration-4 hover:bg-black hover:text-white transition-all px-1">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Signature */}
        <footer className="pt-24 pb-12 flex flex-col items-center space-y-4 opacity-20">
           <div className="w-24 h-1 bg-black rounded-full"></div>
           <span className="handwritten text-3xl">making it all work.</span>
        </footer>
      </motion.div>
    </div>
  );
};

export default InfoSection;