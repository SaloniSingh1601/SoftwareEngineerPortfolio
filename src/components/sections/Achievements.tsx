import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Award, Trophy, GraduationCap, Star } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const achievementIconMap: Record<string, LucideIcon> = {
  'hackathon-winner': Trophy,
  'deans-list': GraduationCap,
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 shadow-[0_0_15px_rgba(197,168,128,0.2)]">
            <Award className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Mission Trophies</h2>
            <p className="text-grey font-bold tracking-widest text-xs mt-1 uppercase">Field Recognition Log</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.achievements.map((achievement, index) => {
            const Icon = achievementIconMap[achievement.id] || Award;
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-8 md:p-12 rounded-[2.5rem] flex items-center gap-8 relative group transition-all duration-300 hover:shadow-[0_15px_30px_rgba(197,168,128,0.1)]"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-gold/10 flex items-center justify-center border border-gold/20 shrink-0 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  <Icon className="w-10 h-10 text-gold group-hover:scale-110 transition-transform" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                    <span className="text-[10px] text-gold font-black uppercase tracking-widest">{achievement.date}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-gold transition-colors">{achievement.title}</h3>
                  <p className="text-grey font-bold text-xs uppercase tracking-widest mb-4">{achievement.organization}</p>
                  <p className="text-sm text-grey leading-relaxed group-hover:text-soft-white/80 transition-colors">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
