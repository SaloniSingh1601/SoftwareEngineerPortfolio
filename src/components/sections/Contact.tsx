import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-cream-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Get in Touch</h2>
          <div className="w-16 h-1 bg-green rounded-full mx-auto" />
          <p className="text-gray mt-6 max-w-lg mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="card p-6 flex flex-col items-center gap-3 card-hover"
          >
            <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-green" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray mb-1">Email</p>
              <p className="font-medium text-charcoal text-sm">{portfolioData.contact.email}</p>
            </div>
          </a>

          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card p-6 flex flex-col items-center gap-3 card-hover"
          >
            <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-green" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray mb-1">LinkedIn</p>
              <p className="font-medium text-charcoal text-sm">Connect</p>
            </div>
          </a>

          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="card p-6 flex flex-col items-center gap-3 card-hover"
          >
            <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center">
              <Github className="w-5 h-5 text-green" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray mb-1">GitHub</p>
              <p className="font-medium text-charcoal text-sm">View Projects</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
