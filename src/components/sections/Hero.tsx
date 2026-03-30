import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useCountUp } from '../../hooks/useCountUp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as const
    } 
  },
};

// Counter component with animation
const AnimatedCounter = ({ value, suffix = '', prefix = '' }: { value: string; suffix?: string; prefix?: string }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const { ref, formattedCount } = useCountUp({
    end: numericValue,
    duration: 2500,
    suffix,
    prefix,
  });

  return <span ref={ref}>{formattedCount}</span>;
};

// Animated gradient text
const GradientName = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="relative inline-block"
    >
      <span className="bg-gradient-to-r from-green via-green-light to-green bg-clip-text text-transparent">
        {children}
      </span>
      <motion.span
        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green to-green-light rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: delay + 0.5 }}
      />
    </motion.span>
  );
};

// Floating animation wrapper
const FloatingElement = ({ children, delay = 0, duration = 4 }: { children: React.ReactNode; delay?: number; duration?: number }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

// Rotating badge
const RotatingBadge = () => {
  return (
    <motion.div
      className="absolute -right-4 -top-4 w-20 h-20"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="text-[8px] fill-green font-medium">
          <textPath href="#circlePath">
            • OPEN TO WORK • AVAILABLE NOW • 
          </textPath>
        </text>
      </svg>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-lg">✦</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Glowing profile placeholder
const ProfilePlaceholder = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
      className="relative mx-auto mb-8"
    >
      {/* Outer glow rings */}
      <motion.div
        className="absolute -inset-4 rounded-full bg-gradient-to-r from-green/20 to-green-light/20 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -inset-8 rounded-full bg-gradient-to-r from-green/10 to-green-light/10 blur-2xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Main avatar circle */}
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto"
        whileHover={{ scale: 1.05, rotate: 3 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient background as placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-green via-green-light to-green-dark flex items-center justify-center">
          <motion.span
            className="text-5xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            SS
          </motion.span>
        </div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
          animate={{
            x: [-200, 200],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Rotating badge */}
      <RotatingBadge />
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const { displayText, isTyping } = useTypewriter({
    text: portfolioData.tagline,
    speed: 40,
    delay: 800,
  });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-green/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-green/20 rounded-full blur-[100px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        {/* Profile Picture with animated frame */}
        <ProfilePlaceholder />

        <motion.div variants={itemVariants} className="mb-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block px-4 py-2 bg-green/10 text-green text-sm font-medium rounded-full"
          >
            Software Engineer at Rippling
          </motion.span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-charcoal">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {portfolioData.name.split(' ')[0]}
          </motion.span>
          {' '}
          <GradientName delay={0.6}>
            {portfolioData.name.split(' ')[1]}
          </GradientName>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray max-w-2xl mx-auto mb-10 leading-relaxed min-h-[4rem]">
          {displayText}
          {isTyping && (
            <span className="inline-block w-0.5 h-6 bg-green ml-1 animate-pulse" />
          )}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <FloatingElement delay={0} duration={3}>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(45, 90, 61, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-green text-white font-medium rounded-xl transition-all"
            >
              View Experience
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </FloatingElement>
          <FloatingElement delay={0.5} duration={3.5}>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-green/20 text-green font-medium rounded-xl hover:bg-green/5 transition-colors"
            >
              View Projects
            </motion.a>
          </FloatingElement>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {portfolioData.heroHighlights.map((highlight, index) => (
            <motion.div 
              key={highlight.label} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="card p-6 text-center card-hover group relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-green/0 to-green/0 group-hover:from-green/10 group-hover:to-green/5 transition-all duration-500" />
              
              <p className="text-3xl font-bold text-green mb-1 group-hover:scale-110 transition-transform relative z-10">
                {highlight.value.includes('%') ? (
                  <>
                    <AnimatedCounter value={highlight.value} suffix="%" />
                  </>
                ) : highlight.value.includes('+') ? (
                  <>
                    <AnimatedCounter value={highlight.value} suffix="+" />
                  </>
                ) : (
                  highlight.value
                )}
              </p>
              <p className="text-xs text-gray relative z-10">{highlight.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Scroll to explore - positioned relative to section, not content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a 
          href="#about" 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray hover:text-green transition-colors bg-cream/80 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};
