import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Achievements</h2>
          <div className="w-16 h-1 bg-green rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 flex items-start gap-4 card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-green" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold text-charcoal">{achievement.title}</h3>
                  <span className="text-xs text-gray">• {achievement.date}</span>
                </div>
                <p className="text-sm text-gray">{achievement.organization}</p>
                <p className="text-sm text-gray mt-2">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
