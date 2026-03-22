import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Code, X } from 'lucide-react';
import { ResumeRushGame } from './ResumeRushGame';
import { CodeChallengeGame } from './CodeChallengeGame';

type GameTab = 'rush' | 'code';

interface PortfolioGameHubProps {
  onClose: () => void;
}

export const PortfolioGameHub: React.FC<PortfolioGameHubProps> = ({ onClose }) => {
  const [tab, setTab] = useState<GameTab>('rush');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/90 backdrop-blur-xl"
    >
      <motion.div
        layout
        className="w-full max-w-6xl h-[min(90vh,820px)] glass rounded-3xl border-gold/20 overflow-hidden flex flex-col shadow-[0_0_60px_rgba(197,168,128,0.12)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 md:p-6 border-b border-gold/10 shrink-0">
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-navy/50 border border-gold/10">
            <button
              type="button"
              onClick={() => setTab('rush')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-colors ${
                tab === 'rush' ? 'bg-gold/20 text-gold border border-gold/30' : 'text-grey hover:text-soft-white'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              Resume Rush
            </button>
            <button
              type="button"
              onClick={() => setTab('code')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-colors ${
                tab === 'code' ? 'bg-gold/20 text-gold border border-gold/30' : 'text-grey hover:text-soft-white'
              }`}
            >
              <Code className="w-4 h-4" />
              Code Arena
            </button>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-navy/60 flex items-center justify-center border border-gold/10 hover:border-gold/40 text-grey hover:text-gold transition-all"
            aria-label="Close games"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          <AnimatePresence mode="wait">
            {tab === 'rush' ? (
              <motion.div
                key="rush"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex-1 min-h-0 flex flex-col overflow-y-auto"
              >
                <ResumeRushGame />
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex-1 min-h-0 flex flex-col overflow-hidden"
              >
                <CodeChallengeGame onClose={onClose} variant="embedded" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};
