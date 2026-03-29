import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-cream-dark">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Experience</h2>
          <div className="w-16 h-1 bg-green rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-8 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-1">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray">
                    <span className="font-medium text-green">{exp.company}</span>
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
                  <li key={i} className="flex items-start gap-3 text-gray">
                    <ArrowUpRight className="w-4 h-4 text-green shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {exp.techStack && (
                <div className="pt-4 border-t border-green/10">
                  <p className="text-xs text-gray mb-2">Tech Stack</p>
                  <p className="text-sm text-charcoal">{exp.techStack}</p>
                </div>
              )}

              {exp.metrics && exp.metrics.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-green/10">
                  {exp.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <p className="text-2xl font-bold text-green">{metric.value}</p>
                      <p className="text-xs text-gray">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
