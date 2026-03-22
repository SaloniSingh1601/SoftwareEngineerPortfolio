import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-16 h-16 rounded-[1.5rem] bg-gold/10 flex items-center justify-center border border-gold/20 shadow-[0_0_15px_rgba(197,168,128,0.2)] mx-auto mb-8">
            <Send className="w-8 h-8 text-gold" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">Initialize Comms</h2>
          <p className="text-xl md:text-2xl text-grey font-bold tracking-tight mb-12">Mission Command Center is Ready for Briefing</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.a
              href={`mailto:${portfolioData.contact.email}`}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center gap-4 group transition-all duration-300 hover:shadow-[0_15px_30px_rgba(197,168,128,0.1)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy/60 flex items-center justify-center border border-gold/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                <Mail className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[10px] text-grey font-black uppercase tracking-widest block mb-1">Direct Signal</span>
                <span className="text-lg font-black tracking-tight group-hover:text-gold transition-colors">{portfolioData.contact.email}</span>
              </div>
            </motion.a>

            <motion.a
              href={
                portfolioData.contact.linkedin.startsWith('http')
                  ? portfolioData.contact.linkedin
                  : `https://${portfolioData.contact.linkedin}`
              }
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center gap-4 group transition-all duration-300 hover:shadow-[0_15px_30px_rgba(197,168,128,0.1)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy/60 flex items-center justify-center border border-gold/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[10px] text-grey font-black uppercase tracking-widest block mb-1">Intel Hub</span>
                <span className="text-lg font-black tracking-tight group-hover:text-gold transition-colors">LinkedIn</span>
              </div>
            </motion.a>

            <motion.a
              href={
                portfolioData.contact.github.startsWith('http')
                  ? portfolioData.contact.github
                  : `https://${portfolioData.contact.github}`
              }
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center gap-4 group transition-all duration-300 hover:shadow-[0_15px_30px_rgba(197,168,128,0.1)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy/60 flex items-center justify-center border border-gold/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                <Github className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[10px] text-grey font-black uppercase tracking-widest block mb-1">Source Repository</span>
                <span className="text-lg font-black tracking-tight group-hover:text-gold transition-colors">GitHub</span>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 text-xs font-black text-grey uppercase tracking-widest"
          >
            <MessageSquare className="w-4 h-4 text-gold" />
            Operational Capacity: Ready
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
