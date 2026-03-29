import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-green/10 text-green text-sm font-medium rounded-full">
            Software Engineer at Rippling
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-charcoal">
          {portfolioData.name.split(' ')[0]}
          {' '}
          <span className="text-gradient">{portfolioData.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray max-w-2xl mx-auto mb-10 leading-relaxed">
          {portfolioData.tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-white font-medium rounded-xl hover:bg-green-dark transition-colors"
          >
            View Experience
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-green/20 text-green font-medium rounded-xl hover:bg-green/5 transition-colors"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {portfolioData.heroHighlights.map((highlight) => (
            <div key={highlight.label} className="card p-6 text-center card-hover">
              <p className="text-3xl font-bold text-green mb-1">{highlight.value}</p>
              <p className="text-xs text-gray">{highlight.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-gray hover:text-green transition-colors">
            <span className="text-xs">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
