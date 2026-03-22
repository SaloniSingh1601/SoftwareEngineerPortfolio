import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Target, Award, User, Gamepad2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useGame } from '../../contexts/GameContext';

const MISSION_ITEMS = [
  { id: 'hero', label: 'Command Center', icon: Terminal },
  { id: 'about', label: 'Intel', icon: User },
  { id: 'experience', label: 'Quests', icon: Shield },
  { id: 'projects', label: 'Missions', icon: Target },
  { id: 'achievements', label: 'Trophies', icon: Award },
];

interface MissionControlProps {
  onOpenGame?: () => void;
}

export const MissionControl: React.FC<MissionControlProps> = ({ onOpenGame }) => {
  const [activeTab, setActiveTab] = React.useState('hero');
  const { xp, level } = useGame();
  const xpProgress = ((xp % 1000) / 1000) * 100;

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/40"
          >
            <Shield className="w-5 h-5 text-gold" />
          </motion.div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold tracking-tighter gold-gradient uppercase">Saloni Singh</h1>
            <p className="text-[10px] text-grey uppercase tracking-[0.2em]">Level {level}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {MISSION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300",
                activeTab === item.id ? "text-soft-white" : "text-grey hover:text-soft-white"
              )}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gold/10 border border-gold/20 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon className={cn("w-4 h-4", activeTab === item.id ? "text-gold" : "text-grey")} />
              <span className="hidden md:inline uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl border-gold/20">
            <div className="flex flex-col">
              <span className="text-[8px] text-grey uppercase tracking-widest">Level {level}</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-gold/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${xpProgress}%` }}
                    className="h-full bg-gold shadow-[0_0_10px_rgba(197,168,128,0.5)]"
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="text-[10px] text-gold font-bold">{xp} XP</span>
              </div>
            </div>
          </div>
          
          {onOpenGame && (
            <motion.button
              onClick={onOpenGame}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold/20 transition-all"
            >
              <Gamepad2 className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </div>
    </nav>
  );
};
