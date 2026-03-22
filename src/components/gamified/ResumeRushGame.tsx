import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Trophy, Target } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import type { PortfolioData } from '../../types/portfolio';
import { useGame } from '../../contexts/GameContext';

export interface RushQuestion {
  id: string;
  prompt: string;
  options: string[];
  answer: string;
}

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildResumeRushQuestions(data: PortfolioData): RushQuestion[] {
  const gs = data.experience.find((e) => e.id === 'goldman-sachs-sde')!;
  const intern = data.experience.find((e) => e.id === 'goldman-sachs-intern')!;

  const raw: RushQuestion[] = [
    {
      id: 'employer',
      prompt: 'Where is Saloni currently employed?',
      options: ['Rippling', 'Goldman Sachs', 'Stripe', 'Databricks'],
      answer: 'Rippling',
    },
    {
      id: 'role',
      prompt: 'What is her current role at Rippling?',
      options: [
        'Software Engineer - Benefits',
        'Software Engineer - Payments',
        'Product Manager',
        'Data Engineer',
      ],
      answer: 'Software Engineer - Benefits',
    },
    {
      id: 'degree',
      prompt: 'Which degree did she complete at IIT Dharwad?',
      options: [
        data.education.degree,
        'B.Tech in Electrical Engineering',
        'M.Tech in Computer Science',
        'B.Sc. in Physics',
      ],
      answer: data.education.degree,
    },
    {
      id: 'cpi',
      prompt: 'What CPI is listed for her B.Tech?',
      options: ['9.13', '8.75', '9.50', '8.20'],
      answer: '9.13',
    },
    {
      id: 'gateway',
      prompt: 'Roughly how many clients were migrated to the Supply Gateway?',
      options: ['1,200+', '200+', '50+', '5,000+'],
      answer: '1,200+',
    },
    {
      id: 'load',
      prompt: 'By how much did Insurance dashboard load time improve?',
      options: ['93%', '50%', '30%', '75%'],
      answer: '93%',
    },
    {
      id: 'gs',
      prompt: 'Where did she work as Software Engineer - Payments?',
      options: [gs.company, 'Rippling', 'Amazon', 'Uber'],
      answer: gs.company,
    },
    {
      id: 'intern',
      prompt: 'What was her Goldman Sachs internship title?',
      options: [intern.title, 'Summer Analyst', 'Campus Hire', 'Graduate Trainee'],
      answer: intern.title,
    },
    {
      id: 'slapdash',
      prompt: 'Which framework is central to the SLAPDASH project?',
      options: ['Next.js', 'Angular', 'Vue', 'Svelte'],
      answer: 'Next.js',
    },
    {
      id: 'raksha',
      prompt: 'Which library powers pose detection in RAKSHA?',
      options: ['OpenCV', 'TensorFlow.js', 'MediaPipe', 'Three.js'],
      answer: 'OpenCV',
    },
    {
      id: 'guard',
      prompt: 'Which Python web framework is used in guardAIns?',
      options: ['Django', 'FastAPI', 'Ruby on Rails', 'Express.js'],
      answer: 'Django',
    },
    {
      id: 'hack',
      prompt: 'Which result is listed for Smart India Hackathon 2022?',
      options: [
        'Finalist, Smart India Hackathon 2022',
        'Winner, Smart India Hackathon 2022',
        'Participant, Smart India Hackathon 2022',
        'Judge, Smart India Hackathon 2022',
      ],
      answer: 'Finalist, Smart India Hackathon 2022',
    },
  ];

  return raw.map((q) => ({ ...q, options: shuffle(q.options) }));
}

const XP_PER_CORRECT = 75;

export const ResumeRushGame: React.FC = () => {
  const { addXP, incrementChallenges } = useGame();
  const questions = useMemo(() => buildResumeRushQuestions(portfolioData), []);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [lastRunScore, setLastRunScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [phase, setPhase] = useState<'play' | 'done'>('play');

  const current = questions[index];
  const progress = ((index + (picked ? 1 : 0)) / questions.length) * 100;

  const finishGame = (finalCorrect: number) => {
    const bonus = finalCorrect === questions.length ? 200 : 0;
    const xp = finalCorrect * XP_PER_CORRECT + bonus;
    addXP(xp);
    incrementChallenges();
    setLastRunScore(finalCorrect);
    setPhase('done');
  };

  const onPick = (opt: string) => {
    if (picked || phase !== 'play' || !current) return;
    setPicked(opt);
    const isRight = opt === current.answer;
    const nextCorrect = correct + (isRight ? 1 : 0);

    window.setTimeout(() => {
      if (index >= questions.length - 1) {
        finishGame(nextCorrect);
        return;
      }
      setCorrect(nextCorrect);
      setIndex((i) => i + 1);
      setPicked(null);
    }, 650);
  };

  if (phase === 'done') {
    const totalXp = lastRunScore * XP_PER_CORRECT + (lastRunScore === questions.length ? 200 : 0);
    return (
      <div className="flex flex-col items-center justify-center flex-1 min-h-0 p-8 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-6">
          <Trophy className="w-20 h-20 text-gold mx-auto mb-4" />
          <h3 className="text-3xl font-black text-soft-white mb-2">Run complete</h3>
          <p className="text-grey text-sm max-w-md mx-auto">
            You scored <span className="text-gold font-black">{lastRunScore}</span> / {questions.length} from the resume.
          </p>
        </motion.div>
        <div className="glass px-8 py-4 rounded-2xl border border-gold/20 mb-8">
          <span className="text-[10px] text-grey uppercase tracking-widest block mb-1">XP earned</span>
          <span className="text-4xl font-black gold-gradient">+{totalXp}</span>
        </div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setPhase('play');
            setIndex(0);
            setCorrect(0);
            setPicked(null);
          }}
          className="px-8 py-3 gold-gradient-bg text-navy font-black rounded-xl"
        >
          Play again
        </motion.button>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 p-6 md:p-8 overflow-hidden">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
            <Target className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="text-lg font-black text-soft-white leading-tight">Resume Rush</h3>
            <p className="text-[10px] text-grey uppercase tracking-widest">Tap the right answer — starts instantly</p>
          </div>
        </div>
        <div className="flex items-center gap-2 glass px-3 py-2 rounded-xl border border-gold/10">
          <Zap className="w-4 h-4 text-gold" />
          <span className="text-sm font-black text-gold">
            {index + 1}/{questions.length}
          </span>
        </div>
      </div>

      <div className="h-1.5 bg-gold/10 rounded-full overflow-hidden mb-8">
        <motion.div className="h-full bg-gold" initial={false} animate={{ width: `${Math.min(100, progress)}%` }} transition={{ duration: 0.35 }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
          className="flex-1 flex flex-col min-h-0"
        >
          <p className="text-xl md:text-2xl font-bold text-soft-white leading-snug mb-8">{current.prompt}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 auto-rows-fr">
            {current.options.map((opt) => {
              const show = picked !== null;
              const isAnswer = opt === current.answer;
              const isPicked = opt === picked;
              let ring = 'border-gold/15 hover:border-gold/35 bg-navy/40';
              if (show) {
                if (isAnswer) ring = 'border-green-400/50 bg-green-400/10';
                else if (isPicked && !isAnswer) ring = 'border-red-400/40 bg-red-400/10';
                else ring = 'border-gold/10 opacity-50';
              }
              return (
                <motion.button
                  key={opt}
                  type="button"
                  disabled={picked !== null}
                  onClick={() => onPick(opt)}
                  whileHover={picked ? {} : { scale: 1.02 }}
                  whileTap={picked ? {} : { scale: 0.98 }}
                  className={`text-left p-4 rounded-2xl border font-bold text-sm text-soft-white transition-colors ${ring}`}
                >
                  {opt}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
