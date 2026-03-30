import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-cream-dark overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green/5 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
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
            className="flex items-center justify-center gap-3 mb-4"
          >
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MessageCircle className="w-6 h-6 text-green" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Get in Touch</h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-green rounded-full mx-auto"
          />
          <motion.p 
            className="text-gray mt-6 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { 
              icon: Mail, 
              label: 'Email', 
              value: portfolioData.contact.email, 
              href: `mailto:${portfolioData.contact.email}` 
            },
            { 
              icon: Linkedin, 
              label: 'LinkedIn', 
              value: 'Connect', 
              href: portfolioData.contact.linkedin 
            },
            { 
              icon: Github, 
              label: 'GitHub', 
              value: 'View Projects', 
              href: portfolioData.contact.github 
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <motion.a
                href={item.href}
                target={item.label !== 'Email' ? '_blank' : undefined}
                rel={item.label !== 'Email' ? 'noreferrer' : undefined}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(45, 90, 61, 0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="card p-6 flex flex-col items-center gap-3 card-hover group h-full"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center group-hover:bg-green/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-6 h-6 text-green" />
                </motion.div>
                <div className="text-center">
                  <p className="text-xs text-gray mb-1">{item.label}</p>
                  <p className="font-medium text-charcoal text-sm">{item.value}</p>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
