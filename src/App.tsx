import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MissionControl } from './components/layout/MissionControl';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { PortfolioGameHub } from './components/gamified/PortfolioGameHub';

function App() {
  const [gameOpen, setGameOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-navy text-soft-white font-body selection:bg-gold/30 selection:text-soft-white overflow-x-hidden">
      {/* Fixed Background with gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light via-navy to-navy" />
      
      {/* Animated glow effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,168,128,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,168,128,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Noise texture overlay for depth */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
      </div>

      <MissionControl onOpenGame={() => setGameOpen(true)} />

      <main className="relative z-10">
        <Hero onOpenGame={() => setGameOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <footer className="py-12 border-t border-gold/10 relative z-10 bg-navy/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-black uppercase tracking-widest text-grey">
          <div className="flex items-center gap-4">
            <span className="text-gold">© 2026 Saloni Singh</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            <span>Mission Control v2.4</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#hero" className="hover:text-gold transition-colors">Return to Base</a>
            <a href="https://github.com/SaloniSingh1601" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Repository</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {gameOpen && <PortfolioGameHub onClose={() => setGameOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
