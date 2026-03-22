import React from 'react';
import { motion } from 'framer-motion';
import { Target, Github, Globe, Code2, Zap } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const projectVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 shadow-[0_0_15px_rgba(197,168,128,0.2)]">
            <Target className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Active Missions</h2>
            <p className="text-grey font-bold tracking-widest text-xs mt-1 uppercase">Field Project Deployments</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] flex flex-col h-full relative group transition-all duration-500 hover:shadow-[0_20px_40px_rgba(197,168,128,0.15)]"
            >
              <div className="absolute top-0 right-0 p-6 flex flex-col items-end gap-2">
                <span className="text-[10px] font-black tracking-widest text-gold/40 uppercase group-hover:text-gold transition-colors">{project.missionType}</span>
                <div className="flex items-center gap-2 mt-1">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-navy/60 flex items-center justify-center border border-gold/10 hover:border-gold/60 text-grey hover:text-gold transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-navy/60 flex items-center justify-center border border-gold/10 hover:border-gold/60 text-grey hover:text-gold transition-all">
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="w-16 h-16 rounded-[1.5rem] bg-gold/10 flex items-center justify-center border border-gold/20 mb-8 group-hover:bg-gold/20 transition-all duration-500 shadow-[0_0_15px_rgba(197,168,128,0.1)] group-hover:shadow-[0_0_25px_rgba(197,168,128,0.3)]">
                <Code2 className="w-8 h-8 text-gold" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-gold transition-colors">{project.title}</h3>
                <p className="text-[10px] text-grey font-black tracking-widest uppercase mb-4 flex items-center gap-2">
                  <Zap className="w-3 h-3 text-gold" /> {project.duration}
                </p>
                
                <ul className="space-y-3 mb-10">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-sm text-grey leading-relaxed group-hover:text-soft-white/80 transition-colors">
                      • {desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-navy/80 border border-gold/10 text-gold/80 group-hover:border-gold/40 group-hover:text-gold transition-all">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-navy/80 border border-gold/10 text-grey">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <motion.div
                className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
