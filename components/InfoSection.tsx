
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  isVisible: boolean;
}

const InfoSection: React.FC<Props> = ({ isVisible }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center bg-white px-6 py-12 md:py-16">
      <motion.div 
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="max-w-4xl w-full space-y-16 md:space-y-20"
      >
        {/* --- SECTION 01: WEBSITE INFO --- */}
        <section className="space-y-8">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Index 0.1 // The Container</span>
            <div className="h-[1px] flex-1 bg-black/10"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-8xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.75] m-0 italic">
              THE BRAIN.
            </h2>
            <div className="max-w-3xl">
              <p className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                This website is my brain. It holds the things I make and the things I build, brought together in one place so they can exist the way they do in my head.
              </p>
              <div className="mt-6 flex items-start space-x-6">
                <div className="w-2 h-20 bg-black mt-2"></div>
                <p className="text-xl md:text-2xl font-medium leading-tight opacity-70 italic">
                  Art, books, websites, and experiments live here side by side, connected by how they’re made.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thick Divider */}
        <div className="w-full h-4 md:h-6 bg-black"></div>

        {/* --- SECTION 02: ABOUT LORAINE --- */}
        <section className="space-y-12 md:space-y-14">
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
                    src="https://i.ibb.co/zT6YKGbb/IMG-8444-2.jpg" 
                    alt="Lorainé Velez" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-none"
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
            </div>
          </div>
        </section>

        {/* Footer Signature & Social Links */}
        <footer className="pt-6 pb-12 flex flex-col items-center space-y-8">
           <div className="flex flex-col items-center space-y-2 opacity-40">
             <div className="w-16 h-1 bg-black rounded-full"></div>
             <span className="handwritten text-3xl">Connect with me!</span>
           </div>

           <div className="flex items-center justify-center space-x-6 md:space-x-10">
              {/* Instagram */}
              <a href="#" className="group relative p-4 marker-box bg-white hover:bg-black transition-all transform hover:-rotate-6">
                <svg className="w-6 h-6 stroke-black group-hover:stroke-white transition-colors" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity handwritten text-xl">instagram</div>
              </a>

              {/* Email */}
              <a href="mailto:hello@lorainevelez.com" className="group relative p-4 marker-box bg-white hover:bg-black transition-all transform hover:rotate-3">
                <svg className="w-6 h-6 stroke-black group-hover:stroke-white transition-colors" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity handwritten text-xl">email</div>
              </a>

              {/* Facebook */}
              <a href="#" className="group relative p-4 marker-box bg-white hover:bg-black transition-all transform hover:-rotate-2">
                <svg className="w-6 h-6 stroke-black group-hover:stroke-white transition-colors" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity handwritten text-xl">facebook</div>
              </a>

              {/* LinkedIn */}
              <a href="#" className="group relative p-4 marker-box bg-white hover:bg-black transition-all transform hover:rotate-6">
                <svg className="w-6 h-6 stroke-black group-hover:stroke-white transition-colors" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity handwritten text-xl">linkedin</div>
              </a>
           </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default InfoSection;
