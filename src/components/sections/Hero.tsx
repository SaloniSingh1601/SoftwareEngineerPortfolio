import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Rocket, Sparkles, ChevronDown, Gamepad2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useGame } from '../../contexts/GameContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

interface HeroProps {
  onOpenGame: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGame }) => {
  const { xp } = useGame();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,168,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,168,128,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 text-center z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full mb-8 border-gold/20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/60 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
          </span>
          <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase">System Online: Operational</span>
          <Sparkles className="w-4 h-4 text-gold" />
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.85]">
          <span className="bg-gradient-to-b from-soft-white to-grey bg-clip-text text-transparent">{portfolioData.name.split(' ')[0]}</span>
          <br />
          <span className="gold-gradient text-glow">{portfolioData.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-xl md:text-3xl lg:text-4xl font-bold gold-gradient tracking-tight mb-6 flex items-center justify-center gap-3">
          <Shield className="w-6 h-6 text-gold" />
          {portfolioData.title}
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-grey max-w-3xl mx-auto mb-12 leading-relaxed">
          {portfolioData.tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(197,168,128,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 gold-gradient-bg text-navy font-black text-sm tracking-wider rounded-2xl flex items-center gap-3 shadow-[0_0_30px_rgba(197,168,128,0.4)] hover:shadow-[0_0_50px_rgba(197,168,128,0.6)] transition-all"
          >
            <Rocket className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            LAUNCH MISSION
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 glass text-gold font-black text-sm tracking-wider rounded-2xl flex items-center gap-3 border-gold/30 hover:bg-gold/10 transition-all"
          >
            <Target className="w-5 h-5" />
            VIEW MISSIONS
          </motion.a>

          <motion.button
            type="button"
            onClick={onOpenGame}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(197,168,128,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 glass text-gold font-black text-sm tracking-wider rounded-2xl flex items-center gap-3 border-gold/30 hover:bg-gold/10 transition-all relative overflow-hidden"
          >
            <Gamepad2 className="w-5 h-5" />
            Play: Resume Rush
            {xp > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[1.5rem] h-6 px-1 bg-gold text-navy text-[10px] font-black rounded-full flex items-center justify-center">
                {xp >= 1000 ? '1k+' : xp}
              </span>
            )}
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-8 text-sm font-bold">
          {portfolioData.heroHighlights.map((h) => (
            <div key={h.label} className="glass px-6 py-4 rounded-2xl border-gold/20 flex items-center gap-3 max-w-[220px]">
              <Shield className="w-5 h-5 text-gold shrink-0" />
              <div className="text-left min-w-0">
                <span className="text-2xl font-black text-gold block leading-tight">{h.value}</span>
                <span className="text-[10px] text-grey uppercase tracking-widest leading-snug">{h.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-grey/60"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
