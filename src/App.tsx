import { MissionControl } from './components/layout/MissionControl';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { ParticleBackground } from './components/ui/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-cream text-charcoal font-body selection:bg-green/20 selection:text-charcoal overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,90,61,0.03),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(45,90,61,0.02),_transparent_50%)]" />
      </div>

      <MissionControl />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <footer className="py-8 border-t border-green/10 relative z-10 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray">
          <div className="flex items-center gap-2">
            <span>© 2026 Saloni Singh</span>
            <span className="text-green/40">•</span>
            <span>Software Engineer</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-green transition-colors">Back to top</a>
            <a href="https://github.com/SaloniSingh1601" target="_blank" rel="noreferrer" className="hover:text-green transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;