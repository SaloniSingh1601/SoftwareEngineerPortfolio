import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Layout, Database, Cloud, Wrench, Cpu } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const skillIconMap: Record<string, LucideIcon> = {
  'Programming Languages': Cpu,
  'Frameworks & Libraries': Layout,
  'Cloud & Infrastructure': Cloud,
  'Tools & Methodologies': Wrench,
  'Databases': Database,
};

const skillLevelMap: Record<string, string> = {
  'Programming Languages': 'Mastery',
  'Frameworks & Libraries': 'Expert',
  'Cloud & Infrastructure': 'Advanced',
  'Tools & Methodologies': 'Advanced',
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 shadow-[0_0_15px_rgba(197,168,128,0.2)]">
            <Layout className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Tech Tree: Skills</h2>
            <p className="text-grey font-bold tracking-widest text-xs mt-1 uppercase">Field Capability Assessment</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.skills.map((skillGroup, index) => {
            const Icon = skillIconMap[skillGroup.category] || Cpu;
            const level = skillLevelMap[skillGroup.category] || 'Advanced';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-[2rem] flex flex-col h-full relative group transition-all duration-300 hover:shadow-[0_15px_30px_rgba(197,168,128,0.1)]"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-navy/60 flex items-center justify-center border border-gold/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gold font-black uppercase tracking-widest block opacity-60 group-hover:opacity-100 transition-opacity">Level</span>
                    <span className="text-sm font-black text-gold uppercase tracking-tighter leading-none">{level}</span>
                  </div>
                </div>

                <h3 className="text-xl font-black mb-6 tracking-tight group-hover:text-gold transition-colors">{skillGroup.category}</h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skillGroup.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-navy/80 border border-gold/10 text-soft-white group-hover:border-gold/40 group-hover:text-gold transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
