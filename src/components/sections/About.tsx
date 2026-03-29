import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">About</h2>
          <div className="w-16 h-1 bg-green rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-lg text-gray leading-relaxed">
              {portfolioData.about}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray">
                <MapPin className="w-4 h-4 text-green" />
                {portfolioData.location}
              </div>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center gap-2 text-sm text-gray hover:text-green transition-colors"
              >
                <Mail className="w-4 h-4" />
                {portfolioData.contact.email}
              </a>
            </div>

            <a
              href={portfolioData.resumeHtmlPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-green hover:underline"
            >
              View Resume
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card p-6">
              <h3 className="text-sm font-semibold text-charcoal mb-4">Education</h3>
              <div className="space-y-2">
                <p className="font-medium text-charcoal">{portfolioData.education.school}</p>
                <p className="text-sm text-gray">{portfolioData.education.degree}</p>
                <p className="text-sm text-green font-medium">{portfolioData.education.honors}</p>
                <p className="text-xs text-gray-light">{portfolioData.education.dates}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
