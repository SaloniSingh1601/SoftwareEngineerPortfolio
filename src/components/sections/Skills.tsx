import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-cream-dark overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-green/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Code2 className="w-6 h-6 text-green" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Skills</h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-green rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(45, 90, 61, 0.1)",
                  transition: { duration: 0.3 }
                }}
                className="card p-6 card-hover h-full group"
              >
                <motion.h3 
                  className="text-sm font-semibold text-charcoal mb-4 uppercase tracking-wide group-hover:text-green transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {skillGroup.category}
                </motion.h3>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 + i * 0.03 }}
                      whileHover={{ 
                        scale: 1.08,
                        backgroundColor: "rgba(45, 90, 61, 0.1)",
                        borderColor: "rgba(45, 90, 61, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                      className="text-sm px-3 py-1.5 bg-cream border border-green/10 rounded-lg text-charcoal cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
