
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

interface Props {
  isVisible: boolean;
}

const WorkSection: React.FC<Props> = ({ isVisible }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="w-full min-h-full flex flex-col items-center bg-white px-4 sm:px-8 md:px-12 lg:px-20 overflow-x-hidden">
      <motion.div 
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl w-full flex flex-col space-y-10 md:space-y-20 pb-20"
      >
        {/* --- REFINED STRETCHED HEADER --- */}
        <header className="relative pt-24 md:pt-40 space-y-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between w-full border-b border-black pb-2">
              <div className="flex items-center space-x-2">
                <div className="bg-black text-white px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.3em]">
                  VOL. 04
                </div>
                <span className="text-[8px] font-bold opacity-30 uppercase tracking-widest hidden sm:inline">Technical Directory</span>
              </div>
              <div className="text-[8px] font-black uppercase tracking-[0.3em] opacity-40">
                PHL // 2026
              </div>
            </div>
            
            <h2 className="w-full text-[clamp(4rem,23.5vw,20rem)] font-black uppercase leading-[0.7] m-0 select-none tracking-[-0.11em] transform -translate-x-[1%]">
              WORK.
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pt-4">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] leading-tight opacity-40 max-w-sm">
              Index of interface systems, digital artifacts, and software builds.
            </p>
            <div className="flex gap-1.5 opacity-20">
              {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="w-1 h-1 bg-black"></div>)}
            </div>
          </div>
        </header>

        {/* --- PROJECT LIST --- */}
        <div className="space-y-12 md:space-y-32">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="group relative flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start">
              
              {/* Image Side */}
              <div className="lg:col-span-8 w-full order-1">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] overflow-hidden bg-white cursor-none shadow-sm transition-all duration-700 border border-black/5"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-110 contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-1000 ease-out"
                  />
                  
                  {/* Hover Visit Prompt - Transparent Background Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/5 backdrop-blur-[2px] z-10">
                     <div className="bg-transparent px-10 py-4 border-[3px] border-black transform scale-90 group-hover:scale-100 transition-all duration-500 hover:bg-black hover:text-white">
                        <span className="text-[12px] font-black uppercase tracking-[0.5em]">VIEW SITE</span>
                     </div>
                  </div>

                  {/* ID Tag */}
                  <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest z-20">
                    ID.{idx + 1}
                  </div>
                </a>
              </div>

              {/* Details Side */}
              <div className="lg:col-span-4 space-y-4 pt-1 order-2">
                <div className="space-y-2">
                   <div className="space-y-1">
                      <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-[9px] font-black opacity-30 tracking-[0.3em] uppercase">{project.year}</span>
                        <div className="flex-1 h-[1px] bg-black/5"></div>
                      </div>
                   </div>
                   <p className="text-[13px] font-medium leading-relaxed opacity-60">
                     {project.description}
                   </p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-black uppercase tracking-widest border border-black/10 px-1.5 py-1 bg-gray-50/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-black/5">
                    <span className="handwritten text-2xl opacity-20 italic leading-none">technical build</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CONTACT FORM --- */}
        <div className="pt-10 md:pt-20 flex flex-col items-center">
           <div className="w-full flex items-center space-x-3 mb-12">
              <div className="h-3 flex-1 bg-black"></div>
              <div className="h-3 w-3 rounded-full border-2 border-black"></div>
              <div className="h-3 w-10 bg-black"></div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 w-full items-start">
              <div className="space-y-8">
                 <div className="space-y-3">
                    <h4 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-2">
                       PROJECT<br/>MEMO.
                    </h4>
                    <p className="text-[11px] font-bold opacity-40 uppercase tracking-widest leading-tight max-w-sm">
                      Accepting strategic inquiries for development and interface builds.
                    </p>
                 </div>
                 
                 <div className="space-y-1 group w-fit">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-20 block">Direct Channel</span>
                    <a href="mailto:hello@lorainevelez.com" className="handwritten text-3xl md:text-6xl block text-black/70 hover:text-black transition-all hover:translate-x-1">
                       hello@lorainevelez.com
                    </a>
                 </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg bg-gray-50/40 p-6 md:p-10 border border-black/5 relative">
                <div className="absolute -top-3 -right-4 w-20 h-6 bg-black/5 border border-black/10 rotate-6 flex items-center justify-center px-2">
                  <span className="text-[7px] font-black uppercase opacity-30">REF. 2026</span>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-30">Identity</label>
                    <input 
                      required
                      type="text" 
                      placeholder="NAME OR ORGANIZATION"
                      className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 text-xs font-bold outline-none transition-all placeholder:text-black/10 uppercase tracking-widest"
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-30">Hub</label>
                    <input 
                      required
                      type="email" 
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 text-xs font-bold outline-none transition-all placeholder:text-black/10 uppercase tracking-widest"
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] opacity-30">Objective</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="PROJECT SCOPE AND DETAILS"
                      className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 text-xs font-bold outline-none transition-all placeholder:text-black/10 resize-none uppercase tracking-widest leading-relaxed"
                    ></textarea>
                  </div>
                </div>

                <button 
                  disabled={formStatus !== 'idle'}
                  className="w-full py-4 bg-black text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-black border-2 border-black transition-all active:scale-[0.98] cursor-none disabled:opacity-50 shadow-xl"
                >
                  {formStatus === 'idle' && 'SUBMIT REQUEST'}
                  {formStatus === 'sending' && 'UPLOADING...'}
                  {formStatus === 'sent' && 'DELIVERED.'}
                </button>
                
                <div className="flex justify-between items-center opacity-20 pt-4 border-t border-black/10">
                   <span className="text-[8px] font-black uppercase tracking-[0.2em]">Available Q1 2026</span>
                   <span className="text-[8px] font-black uppercase tracking-[0.2em]">PHILADELPHIA, PA</span>
                </div>
              </form>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkSection;
