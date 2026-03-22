import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 shadow-[0_0_15px_rgba(197,168,128,0.2)]">
            <User className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Intel Brief</h2>
            <p className="text-grey font-bold tracking-widest text-xs mt-1 uppercase">Operational Profile</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass p-10 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-5 h-5 text-gold" />
                <span className="text-xs font-black text-gold uppercase tracking-widest">About Me</span>
              </div>

              <p className="text-lg text-grey leading-relaxed group-hover:text-soft-white/90 transition-colors">
                {portfolioData.about}
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gold/10">
                {portfolioData.heroHighlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <p className="text-3xl font-black text-gold mb-1">{h.value}</p>
                    <p className="text-[10px] text-grey uppercase tracking-widest leading-snug">{h.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 glass p-6 rounded-2xl border border-gold/10">
                <p className="text-[10px] text-grey font-black uppercase tracking-widest mb-2">Education</p>
                <p className="font-black text-soft-white">{portfolioData.education.school}</p>
                <p className="text-sm text-grey mt-1">{portfolioData.education.schoolLocation}</p>
                <p className="text-sm text-grey mt-2">{portfolioData.education.degree}</p>
                <p className="text-xs text-gold font-bold mt-2">
                  {portfolioData.education.dates} · {portfolioData.education.honors}
                </p>
                <a
                  href={portfolioData.resumeHtmlPath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-xs font-black text-gold hover:underline uppercase tracking-widest"
                >
                  View resume (HTML export)
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-[2rem] flex items-center gap-4 group hover:bg-gold/[0.02] transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-navy/60 flex items-center justify-center border border-gold/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                <MapPin className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] text-grey uppercase tracking-widest mb-1">Location</p>
                <p className="text-sm font-bold text-soft-white">{portfolioData.location}</p>
              </div>
            </div>

            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="glass p-8 rounded-[2rem] flex items-center gap-4 group hover:bg-gold/[0.02] transition-colors block"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy/60 flex items-center justify-center border border-gold/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                <Mail className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] text-grey uppercase tracking-widest mb-1">Email</p>
                <p className="text-sm font-bold text-soft-white truncate max-w-[180px]">{portfolioData.contact.email}</p>
              </div>
            </a>

            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="glass p-8 rounded-[2rem] flex items-center gap-4 group hover:bg-gold/[0.02] transition-colors block"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy/60 flex items-center justify-center border border-gold/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                <Phone className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-[10px] text-grey uppercase tracking-widest mb-1">Phone</p>
                <p className="text-sm font-bold text-soft-white">{portfolioData.contact.phone}</p>
              </div>
            </a>

            <div className="glass p-8 rounded-[2rem] border-l-4 border-l-gold">
              <p className="text-[10px] text-grey uppercase tracking-widest mb-2">Clearance Level</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gold/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gold w-[90%] shadow-[0_0_10px_rgba(197,168,128,0.5)]" />
                </div>
                <span className="text-xs font-black text-gold">SDE II</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
