import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  isVisible: boolean;
}

const InfoSection: React.FC<Props> = ({ isVisible }) => {
  const contactEmail = "LORAINEVELEZLUGO@GMAIL.COM";
  const prefilledMessage = "I probably want to meet you.";
  const mailtoLink = `mailto:lorainevelezlugo@gmail.com?body=${encodeURIComponent(prefilledMessage)}`;

  return (
    <div className="w-full min-h-full flex flex-col items-center bg-white px-6 pt-24 pb-20 md:pt-32 md:pb-24">
      <motion.div 
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="max-w-4xl w-full space-y-10 md:space-y-14"
      >
        {/* --- SECTION 01: WEBSITE INFO --- */}
        <section className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Index 0.1 // ABOUT THIS SITE</span>
            <div className="h-[1px] flex-1 bg-black/10"></div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.75] m-0 italic">
              INFO.
            </h2>
            <div className="max-w-3xl">
              <p className="text-2xl md:text-3xl font-bold leading-[1.1] tracking-tight">
                This website is my brain. It holds the things I make and the things I build, brought together in one place so they can exist the way they do in my head.
              </p>
              <div className="mt-4 flex items-start space-x-6">
                <div className="w-1.5 h-12 bg-black mt-2"></div>
                <p className="text-base md:text-lg font-medium leading-tight opacity-60 italic">
                  Art, children's books, websites, and experiments live here side by side, connected by how they’re made.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thinner Divider */}
        <div className="w-full h-1.5 md:h-2 bg-black"></div>

        {/* --- SECTION 02: ABOUT LORAINE --- */}
        <section className="space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-14">
            {/* Bio Column */}
            <div className="flex-1 space-y-6">
              <div className="space-y-1">
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">ABOUT<br/>LORAINE VELEZ</h3>
                <span className="handwritten text-xl md:text-2xl opacity-40 block">I make things, period.</span>
              </div>

              <div className="space-y-4 text-sm md:text-base font-medium leading-relaxed">
                <p>
                  Loraine Velez is a Philadelphia based creative born in <span className="marker-underline font-black">Mayagüez, Puerto Rico</span> and raised in New London, Connecticut. Making things has been the most consistent part of her life.
                </p>
                
                <div className="marker-box p-5 bg-black text-white space-y-3 -rotate-1">
                  <p className="font-bold text-sm">
                    She works in acrylic on canvas and makes drawings that are playful, cartoonish, and intentionally light. Humor is a choice. Softness is a choice.
                  </p>
                </div>

                <p>
                  Alongside her art, Loraine studied Business Administration at Johnson and Wales University and has worked in real estate, marketing, and operations. Art has remained the constant.
                </p>

                <div className="space-y-2 border-l-4 border-black pl-5 italic">
                  <p>
                    She created <span className="font-black underline uppercase">Big Feelings Book Co.</span>, a children’s book imprint shaped by lived experience and care. 
                  </p>
                  <span className="handwritten text-lg opacity-50">— tools for the moments that matter most</span>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="w-full md:w-64 lg:w-72 space-y-6">
              <div className="relative marker-box p-3 bg-white rotate-2 shadow-lg">
                <div className="tape tape-top-left !w-8 !h-3"></div>
                <div className="tape tape-top-right !w-8 !h-3"></div>
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src="https://i.ibb.co/zT6YKGbb/IMG-8444-2.jpg" 
                    alt="Lorainé Velez" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-none"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="handwritten text-2xl italic">Loraine, 2026.</span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[8px] font-black uppercase tracking-widest text-black/40 block border-b border-black/10 pb-1">Status</span>
                <div className="space-y-2">
                  <div className="marker-box p-2.5 bg-gray-50 text-[9px] font-bold uppercase tracking-tighter">
                    Philadelphia // Current Base
                  </div>
                  <div className="marker-box p-2.5 bg-gray-50 text-[9px] font-bold uppercase tracking-tighter -rotate-1">
                    PR → CT → RI → PA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 02.5: CAPABILITIES --- */}
        <section className="space-y-6">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Index 0.2 // Capabilities</span>
            <div className="h-[1px] flex-1 bg-black/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-5">
              <h4 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">CORE SKILLS.</h4>
              <ul className="space-y-2">
                {[
                  "Concept development",
                  "Branding systems",
                  "Visual design and layout",
                  "UX for small business and creators",
                  "Illustration and painting"
                ].map((skill, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-3.5 h-3.5 marker-box flex items-center justify-center font-black text-[7px] bg-black text-white">✓</div>
                    <span className="text-sm md:text-base font-bold uppercase tracking-tight">{skill}</span>
                  </li>
                ))}
              </ul>

              <div className="marker-box p-4 bg-gray-50 space-y-2 rotate-1">
                <h5 className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">The Toolkit</h5>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Figma", "Procreate", "WordPress", "Squarespace", "Webflow", "Netlify", "Meta Suite", "Mailchimp", "AI Workflows"
                  ].map(tool => (
                    <span key={tool} className="px-1.5 py-0.5 bg-black text-white text-[8px] font-black uppercase tracking-widest">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h4 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">ATTRIBUTES.</h4>
              <div className="grid grid-cols-1 gap-1.5">
                {[
                  "Open mind / disruptive thinking",
                  "Organized",
                  "Attention to Detail",
                  "Teamwork"
                ].map((attr, i) => (
                  <div key={i} className="marker-box p-2.5 flex items-center justify-between group hover:bg-black hover:text-white transition-all cursor-none">
                    <span className="text-[10px] font-black uppercase tracking-widest">{attr}</span>
                    <span className="handwritten text-base opacity-20 group-hover:opacity-100">#0{i+1}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-3 border-t border-black/5">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl md:text-3xl font-black italic tracking-tighter">1+ YEAR</span>
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-40">Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 03: CONTACT SECTION --- */}
        <section className="space-y-6 pb-6">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Index 0.3 // Contact</span>
            <div className="h-[1px] flex-1 bg-black/10"></div>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="max-w-xl text-center space-y-3">
               <h4 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8] mb-2">
                  LET'S CHAT.
                </h4>
              <p className="text-sm md:text-base font-bold leading-relaxed italic max-w-lg mx-auto">
                “We love friendly networking. If you want to work together and create a better world by bringing your ideas to life, don’t hesitate to send me a message.”
              </p>
            </div>

            <div className="w-full max-w-md">
              <div className="marker-box p-8 md:p-12 bg-white flex flex-col items-center space-y-6 shadow-sm relative">
                <div className="space-y-1 text-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/40 block">DIRECT CHANNEL</span>
                  <p className="text-base md:text-lg font-black uppercase tracking-tight">
                    {contactEmail}
                  </p>
                </div>

                <a 
                  href={mailtoLink}
                  className="w-full max-w-xs py-4 px-6 bg-white text-black font-black uppercase tracking-widest text-[10px] border-2 border-black transition-all active:scale-[0.98] cursor-none flex items-center justify-center space-x-3 group relative"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">SEND MESSAGE</span>
                  <span className="text-lg relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all">→</span>
                  <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0"></div>
                </a>
                
                <span className="handwritten text-2xl md:text-3xl opacity-30 select-none">Talk soon!</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-Friendly Footer Icons */}
        <footer className="pt-6 pb-12 border-t border-black/5 flex flex-col items-center space-y-6">
           <div className="flex items-center justify-center space-x-6 md:space-x-10">
              <a href="https://www.instagram.com/loraineswwworld" target="_blank" rel="noopener noreferrer" className="p-1 hover:scale-125 transition-transform" aria-label="Instagram">
                <svg className="w-6 h-6 fill-black" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058-1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.62 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.337-2.62-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/lorainevelezlugo/" target="_blank" rel="noopener noreferrer" className="p-1 hover:scale-125 transition-transform" aria-label="LinkedIn">
                <svg className="w-6 h-6 fill-black" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/loraine.velez/" target="_blank" rel="noopener noreferrer" className="p-1 hover:scale-125 transition-transform" aria-label="Facebook">
                <svg className="w-6 h-6 fill-black" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href={mailtoLink} className="p-1 hover:scale-125 transition-transform" aria-label="Email">
                <svg className="w-6 h-6 fill-none stroke-black" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
           </div>
           
           <div className="flex flex-col items-center space-y-1">
              <span className="handwritten text-3xl opacity-20 italic">L. Velez</span>
              <div className="w-10 h-0.5 bg-black opacity-10"></div>
           </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default InfoSection;