import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface Props {
  isVisible: boolean;
  isZoomedOut: boolean;
  onProjectClick: (p: Project) => void;
}

const WorkSection: React.FC<Props> = ({ isVisible, isZoomedOut, onProjectClick }) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center bg-white p-6 md:p-12">
      <motion.div 
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isZoomedOut ? 0.8 : 1,
        }}
        className="max-w-6xl w-full flex flex-col space-y-8 md:space-y-12 pb-16 md:pb-24 pt-12 md:pt-0"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">WORK.</h2>
            <p className="handwritten text-3xl md:text-4xl opacity-50">building digital spaces</p>
          </div>
          <div className="marker-box p-4 md:p-5 bg-black text-white -rotate-3 self-end md:self-auto">
            <span className="font-bold tracking-widest text-[10px] md:text-xs uppercase">Selected Folio // 2023-25</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="marker-box p-8 md:p-10 bg-white flex flex-col justify-between hover:bg-black hover:text-white transition-all cursor-pointer group shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transform hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <span className="text-4xl md:text-6xl font-black italic">0{idx + 1}</span>
                <div className="w-12 h-12 md:w-14 md:h-14 border-4 border-current rounded-full flex items-center justify-center">
                   <span className="text-2xl md:text-2xl font-black group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none group-hover:italic">{project.title}</h3>
                  <p className="handwritten text-xl md:text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                    Visual Strategy & Frontend Dev.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 md:pt-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] md:text-[9px] border-2 border-current px-2 md:px-2.5 py-0.5 font-black uppercase tracking-widest bg-white text-black">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkSection;