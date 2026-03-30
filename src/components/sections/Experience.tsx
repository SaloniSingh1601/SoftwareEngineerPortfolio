import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight, Briefcase } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useCountUp } from '../../hooks/useCountUp';

const AnimatedMetric = ({ value, label }: { value: string; label: string }) => {
  const hasNumber = /\d/.test(value);
  
  if (!hasNumber) {
    // For non-numeric values like "Spring Analyst", just display text
    return (
      <div className="text-center">
        <span className="text-lg font-bold text-green block">{value}</span>
        <span className="text-xs text-gray block">{label}</span>
      </div>
    );
  }

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.includes('%') ? '%' : value.includes('+') ? '+' : '';
  const { ref, formattedCount } = useCountUp({
    end: numericValue,
    duration: 2000,
    suffix,
  });

  return (
    <div className="text-center">
      <span ref={ref as React.RefObject<HTMLSpanElement>} className="text-2xl font-bold text-green block">{formattedCount}</span>
      <span className="text-xs text-gray block">{label}</span>
    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-cream-dark overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-green/5 rounded-full blur-[100px] pointer-events-none"
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
              <Briefcase className="w-6 h-6 text-green" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Experience</h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-green rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line - positioned to align with dots */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-green/20 hidden md:block"
          />

          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Timeline dot - centered on the line at left-[15px] + half of dot width */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="absolute left-[15px] top-10 w-3 h-3 bg-green rounded-full border-4 border-cream-dark hidden md:block z-10"
                />

                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(45, 90, 61, 0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="card p-8 ml-0 md:ml-12 card-hover"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-1">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray">
                        <motion.span 
                          className="font-medium text-green"
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.company}
                        </motion.span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.dates}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.impact.map((point, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-3 text-gray group"
                      >
                        <motion.span
                          whileHover={{ scale: 1.2, rotate: 45 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight className="w-4 h-4 text-green shrink-0 mt-0.5 group-hover:text-green-dark transition-colors" />
                        </motion.span>
                        <span className="leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {exp.techStack && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="pt-4 border-t border-green/10"
                    >
                      <p className="text-xs text-gray mb-2">Tech Stack</p>
                      <p className="text-sm text-charcoal">{exp.techStack}</p>
                    </motion.div>
                  )}

                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-green/10">
                      {exp.metrics.map((metric, idx) => (
                        <AnimatedMetric key={idx} value={metric.value} label={metric.label} />
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
