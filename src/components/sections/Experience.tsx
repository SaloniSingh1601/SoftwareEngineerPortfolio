import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Calendar, CheckCircle2, TrendingUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 shadow-[0_0_15px_rgba(197,168,128,0.2)]">
            <Shield className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Mission Log: Quests</h2>
            <p className="text-grey font-bold tracking-widest text-xs mt-1 uppercase">Field Operational History</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div className="sticky top-32 h-fit hidden lg:block">
            <div className="glass p-8 rounded-3xl border-l-4 border-l-gold">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-gold" />
                Impact Summary
              </h3>
              <div className="space-y-6">
                {portfolioData.experienceImpactSummary.map((item) => (
                  <div key={item.label} className="p-4 rounded-2xl bg-navy/40 border border-gold/10">
                    <p className="text-[10px] text-grey uppercase tracking-widest mb-1 leading-snug">{item.label}</p>
                    <p className="text-3xl font-black text-gold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden group hover:bg-gold/[0.02] transition-colors"
              >
                {/* Decorative Timeline Line */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold to-transparent opacity-30" />
                
                <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight group-hover:text-gold transition-colors">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-grey">
                      <span className="flex items-center gap-2 text-gold/80"><Shield className="w-4 h-4" /> {exp.company}</span>
                      <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {exp.location}</span>
                      <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {exp.dates}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="glass px-3 py-1.5 rounded-xl border-gold/20 flex flex-col items-center">
                        <span className="text-[10px] text-grey uppercase font-black">{m.label.split(' ').pop()}</span>
                        <span className="text-lg font-black text-gold leading-none">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.impact.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-grey group-hover:text-soft-white/80 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-base leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {exp.techStack && (
                  <p className="text-sm text-grey mb-6">
                    <span className="text-gold font-black text-xs uppercase tracking-widest mr-2">Tech stack</span>
                    {exp.techStack}
                  </p>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gold/10">
                  {exp.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] text-grey uppercase tracking-widest mb-1 truncate">{m.label}</span>
                      <span className="text-xl font-black text-gold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
