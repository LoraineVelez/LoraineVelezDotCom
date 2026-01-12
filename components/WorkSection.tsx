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

  const industries = [
    "Hospitality",
    "Food and beverage",
    "Real estate",
    "Retail and ecommerce",
    "Creative brand",
    "Service based business"
  ];

  const projectTypes = [
    "New brand website",
    "Portfolio site",
    "Ecommerce",
    "Landing page"
  ];

  return (
    <div className="w-full min-h-full flex flex-col items-center bg-white px-4 sm:px-8 md:px-12 lg:px-20 overflow-x-hidden">
      <motion.div 
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl w-full flex flex-col space-y-8 md:space-y-16 pb-12"
      >
        {/* --- REFINED STRETCHED HEADER --- */}
        <header className="relative pt-24 md:pt-32 space-y-3">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between w-full border-b border-black pb-1.5">
              <div className="flex items-center space-x-2">
                <div className="bg-black text-white px-2 py-0.5 text-[7px] font-black uppercase tracking-[0.3em]">
                  VOL. 04
                </div>
                <span className="text-[7px] font-bold opacity-30 uppercase tracking-widest hidden sm:inline">Technical Directory</span>
              </div>
              <div className="text-[7px] font-black uppercase tracking-[0.3em] opacity-40">
                PHL // 2026
              </div>
            </div>
            
            <h2 className="w-full text-[clamp(3.5rem,20vw,16rem)] font-black uppercase leading-[0.7] m-0 select-none tracking-[-0.11em] transform -translate-x-[1%]">
              WORK.
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pt-2">
            <p className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] leading-tight opacity-40 max-w-sm">
              Index of interface systems and software builds.
            </p>
            <div className="flex gap-1 opacity-20">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-1 bg-black"></div>)}
            </div>
          </div>
        </header>

        {/* --- PROJECT LIST --- */}
        <div className="space-y-10 md:space-y-20">
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
                  
                  {/* Hover Visit Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/5 backdrop-blur-[2px] z-10">
                     <div className="bg-transparent px-8 py-3 border-[2px] border-black transform scale-90 group-hover:scale-100 transition-all duration-500 hover:bg-black hover:text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em]">VIEW SITE</span>
                     </div>
                  </div>

                  <div className="absolute top-0 left-0 bg-black text-white px-2 py-0.5 text-[8px] font-black uppercase tracking-widest z-20">
                    ID.{idx + 1}
                  </div>
                </a>
              </div>

              {/* Details Side */}
              <div className="lg:col-span-4 space-y-3 pt-1 order-2">
                <div className="space-y-2">
                   <div className="space-y-1">
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-[8px] font-black opacity-30 tracking-[0.3em] uppercase">{project.year}</span>
                        <div className="flex-1 h-[1px] bg-black/5"></div>
                      </div>
                   </div>
                   <p className="text-[12px] font-medium leading-relaxed opacity-60">
                     {project.description}
                   </p>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[7px] font-black uppercase tracking-widest border border-black/10 px-1.5 py-0.5 bg-gray-50/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-black/5">
                    <span className="handwritten text-xl opacity-20 italic leading-none">technical build</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CONTACT / INQUIRY SECTION --- */}
        <div className="pt-12 md:pt-20 flex flex-col items-center">
           <div className="w-full flex items-center space-x-3 mb-12">
              <div className="h-2 flex-1 bg-black"></div>
              <div className="h-4 w-4 rounded-full border-4 border-black"></div>
              <div className="h-2 w-12 bg-black"></div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 w-full items-start">
              <div className="space-y-8">
                 <div className="space-y-4">
                    <h4 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-2">
                       CONTACT.
                    </h4>
                    <div className="space-y-4 max-w-md">
                      <p className="text-xl md:text-2xl font-bold leading-tight uppercase tracking-tight italic border-l-4 border-black pl-4">
                        Accepting inquiries for new brand websites.
                      </p>
                      <p className="text-sm md:text-base font-medium leading-relaxed opacity-60">
                        I work with brands starting from scratch to build clean, intentional foundations.
                      </p>
                    </div>
                 </div>
                 
                 <div className="space-y-2 group w-fit">
                    <span className="text-[8px] font-black uppercase tracking-widest opacity-30 block">Direct Channel</span>
                    <a href="mailto:lorainevelezlugo@gmail.com" className="handwritten text-2xl md:text-4xl block text-black/70 hover:text-black transition-all hover:translate-x-1">
                       lorainevelezlugo@gmail.com
                    </a>
                 </div>

                 <div className="marker-box p-6 bg-gray-50/50 -rotate-1 hidden lg:block">
                    <span className="text-[9px] font-black uppercase tracking-widest opacity-40 block mb-2">Workflow Note</span>
                    <p className="text-xs font-bold leading-tight italic">
                      "I prefer to build the bones first. Clean code, sharp typography, and space for ideas to grow."
                    </p>
                 </div>
              </div>

              {/* Redesigned Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-8 w-full bg-white p-8 md:p-10 marker-box border-4 border-black relative shadow-2xl">
                <div className="space-y-6">
                  {/* Basic Info Group */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-1">
                      <label className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-transparent border-b-2 border-black/20 focus:border-black py-2 text-sm font-bold outline-none transition-all placeholder:text-black/5 uppercase tracking-widest"
                      />
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                      <label className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-transparent border-b-2 border-black/20 focus:border-black py-2 text-sm font-bold outline-none transition-all placeholder:text-black/5 uppercase tracking-widest"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-1">
                      <label className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Brand Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-transparent border-b-2 border-black/20 focus:border-black py-2 text-sm font-bold outline-none transition-all placeholder:text-black/5 uppercase tracking-widest"
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Industry</label>
                      <div className="relative">
                        <select 
                          required
                          className="w-full appearance-none bg-transparent border-b-2 border-black/20 focus:border-black py-2 text-sm font-bold outline-none transition-all uppercase tracking-widest cursor-none"
                        >
                          <option value="" disabled selected>Select Industry</option>
                          {industries.map(ind => (
                            <option key={ind} value={ind}>{ind}</option>
                          ))}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-xs font-black">↓</div>
                      </div>
                    </div>
                  </div>

                  {/* Project Type Checkboxes */}
                  <div className="space-y-3">
                    <label className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Project Type</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projectTypes.map(type => (
                        <label key={type} className="flex items-center space-x-3 group cursor-none">
                          <div className="relative w-5 h-5 marker-box flex items-center justify-center bg-white border-2 border-black">
                            <input 
                              type="checkbox" 
                              className="absolute inset-0 opacity-0 cursor-none peer"
                              name="projectType"
                              value={type}
                            />
                            <div className="w-2 h-2 bg-black scale-0 peer-checked:scale-100 transition-transform"></div>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest leading-none peer-checked:opacity-100 opacity-60 transition-opacity">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Brief Description (Optional)</label>
                    <textarea 
                      rows={3}
                      className="w-full bg-transparent border-2 border-black/10 focus:border-black p-3 text-sm font-bold outline-none transition-all placeholder:text-black/5 resize-none uppercase tracking-widest marker-box"
                    ></textarea>
                  </div>
                </div>

                <button 
                  disabled={formStatus !== 'idle'}
                  className="w-full py-4 bg-black text-white font-black uppercase tracking-[0.5em] text-xs hover:bg-white hover:text-black border-4 border-black transition-all active:scale-[0.98] cursor-none disabled:opacity-50 shadow-xl flex items-center justify-center space-x-4 group"
                >
                  <span>{formStatus === 'idle' ? 'SUBMIT INQUIRY' : formStatus === 'sending' ? 'SENDING...' : 'INQUIRY SENT'}</span>
                  {formStatus === 'idle' && <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>}
                </button>

                <div className="absolute -bottom-10 -right-2 hidden md:block">
                  <span className="handwritten text-4xl opacity-10 -rotate-6 select-none">build something real.</span>
                </div>
              </form>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkSection;