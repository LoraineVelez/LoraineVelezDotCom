import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface Props {
  project: Project | null;
  isVisible: boolean;
}

const ProjectDetails: React.FC<Props> = ({ project, isVisible }) => {
  if (!project) return null;

  return (
    <div className="w-full min-h-full flex flex-col items-center bg-white">
      <motion.div 
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="max-w-5xl w-full p-6 md:p-12 flex flex-col space-y-8 md:space-y-12 pb-16 md:pb-32 pt-16 md:pt-20"
      >
        {/* Project Header */}
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="marker-box px-4 py-1 md:px-5 md:py-1.5 bg-black text-white -rotate-1">
              <span className="font-black text-[10px] md:text-sm uppercase tracking-widest">{project.year}</span>
            </div>
            <div className="h-0.5 md:h-1 flex-1 bg-black rounded-full"></div>
            <span className="handwritten text-xl md:text-3xl">Deep Dive</span>
          </div>
          <h2 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-6 md:mb-10">{project.title}</h2>
        </div>

        {/* Main Visual */}
        <div className="relative marker-box p-2 md:p-3 bg-white rotate-1">
           <div className="tape tape-top-left -left-4 top-4 md:-left-6 md:top-8 scale-75 md:scale-100"></div>
           <div className="tape tape-top-right -right-4 bottom-12 md:-right-6 md:bottom-16 scale-75 md:scale-100"></div>
           <div className="aspect-video bg-gray-100 overflow-hidden">
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover grayscale contrast-125"
             />
           </div>
        </div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-1 md:col-span-7 space-y-6 md:space-y-6">
            <h4 className="handwritten text-3xl md:text-4xl underline decoration-black/20">The Core Problem:</h4>
            <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              {project.description}
            </p>
            <div className="pt-4 md:pt-6 space-y-3">
              <h4 className="handwritten text-3xl md:text-4xl">Execution Logic:</h4>
              <div className="space-y-2 marker-box p-5 md:p-6 bg-gray-50 border-dashed italic text-sm md:text-base">
                <p>1. Identify the friction points in the user journey.</p>
                <p>2. Strip away the decorative elements.</p>
                <p>3. Build back with high-contrast interactions.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-5 space-y-6 md:space-y-10">
             <div className="marker-box p-6 md:p-7 bg-black text-white rotate-2 shadow-[8px_8px_0px_0px_rgba(229,231,235,1)] md:shadow-[10px_10px_0px_0px_rgba(229,231,235,1)]">
                <h5 className="font-black uppercase tracking-widest mb-4 md:mb-5 border-b border-white/20 pb-3 text-xs md:text-sm">Specs.</h5>
                <ul className="space-y-2 md:space-y-3">
                  {project.tags.map(tag => (
                    <li key={tag} className="flex items-center space-x-3">
                       <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span>
                       <span className="font-bold text-base md:text-lg">{tag}</span>
                    </li>
                  ))}
                </ul>
             </div>

             <div className="text-center group cursor-pointer">
                <div className="marker-box p-4 md:p-5 hover:bg-black hover:text-white transition-colors">
                   <span className="font-black text-lg md:text-xl uppercase tracking-tighter">Launch Site ↗</span>
                </div>
                <span className="handwritten text-lg md:text-xl opacity-40 mt-1 block">opens in new tab</span>
             </div>
          </div>
        </div>

        {/* Scribbled Sketches Mockup Area */}
        <div className="pt-8 md:pt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
           <div className="aspect-square marker-box p-8 md:p-10 flex flex-col items-center justify-center space-y-4 bg-gray-50/50">
              <svg width="60" height="60" md:width="80" md:height="80" viewBox="0 0 100 100" className="opacity-40">
                 <path d="M10 50 Q 50 10 90 50 T 10 90" fill="none" stroke="black" strokeWidth="2" />
              </svg>
              <span className="handwritten text-lg md:text-xl">rough layout sketching</span>
           </div>
           <div className="aspect-square marker-box p-8 md:p-10 flex flex-col items-center justify-center space-y-4 bg-gray-50/50 -rotate-1">
              <div className="grid grid-cols-3 gap-1 md:gap-2 w-full h-full opacity-20">
                 {[...Array(9)].map((_, i) => <div key={i} className="border-2 border-black border-dashed"></div>)}
              </div>
              <span className="handwritten text-lg md:text-xl">grid system breakdown</span>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;