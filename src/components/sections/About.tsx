import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ExternalLink, User } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green/5 rounded-full blur-[80px] pointer-events-none"
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
              <User className="w-6 h-6 text-green" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">About</h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-green rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <motion.p 
              className="text-lg text-gray leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {portfolioData.about}
            </motion.p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <motion.div 
                className="flex items-center gap-2 text-sm text-gray group cursor-default"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-4 h-4 text-green" />
                </motion.span>
                {portfolioData.location}
              </motion.div>
              <motion.a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center gap-2 text-sm text-gray hover:text-green transition-colors group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  whileHover={{ rotate: -15, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.span>
                {portfolioData.contact.email}
              </motion.a>
            </div>

            <motion.a
              href={portfolioData.resumeHtmlPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-green hover:underline group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              View Resume
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(45, 90, 61, 0.1)" }}
              transition={{ duration: 0.3 }}
              className="card p-6 card-hover"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-sm font-semibold text-charcoal mb-4">Education</h3>
              </motion.div>
              <div className="space-y-2">
                <motion.p 
                  className="font-medium text-charcoal"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  {portfolioData.education.school}
                </motion.p>
                <motion.p 
                  className="text-sm text-gray"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  {portfolioData.education.degree}
                </motion.p>
                <motion.p 
                  className="text-sm text-green font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  {portfolioData.education.honors}
                </motion.p>
                <motion.p 
                  className="text-xs text-gray-light"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  {portfolioData.education.dates}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
