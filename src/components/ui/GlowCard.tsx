import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green/20 to-green/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-green/10 shadow-sm group-hover:border-green/30 transition-colors p-8">
        {children}
      </div>
    </motion.div>
  );
};
