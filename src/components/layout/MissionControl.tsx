import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code2, Award, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: User },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'achievements', label: 'Achievements', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const MissionControl: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('hero');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveTab(NAV_ITEMS[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-green/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-lg font-semibold text-green">SS</span>
          </motion.div>

          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeTab === item.id
                    ? 'text-green bg-green/10'
                    : 'text-gray hover:text-green hover:bg-green/5'
                }`}
              >
                <span className="hidden sm:inline">{item.label}</span>
                <item.icon className="w-4 h-4 sm:hidden" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
