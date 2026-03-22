import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle, XCircle, RefreshCw, Trophy, Zap, Clock, X } from 'lucide-react';
import { useGame } from '../../contexts/GameContext';

interface Challenge {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  starterCode: string;
  testCases: { input: string; expected: string }[];
  solution: string;
  xpReward: number;
  timeLimit: number;
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers and a target sum, return indices of the two numbers that add up to the target.',
    starterCode: `function twoSum(nums, target) {
  // Write your code here
  
}`,
    testCases: [
      { input: 'twoSum([2,7,11,15], 9)', expected: '[0,1]' },
      { input: 'twoSum([3,2,4], 6)', expected: '[1,2]' },
    ],
    solution: 'function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}',
    xpReward: 100,
    timeLimit: 300,
  },
  {
    id: 2,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    description: 'Given a string containing parentheses, determine if the string is valid. A string is valid if all parentheses are properly closed and nested.',
    starterCode: `function isValid(s) {
  // Write your code here
  
}`,
    testCases: [
      { input: 'isValid("()")', expected: 'true' },
      { input: 'isValid("()[]{}")', expected: 'true' },
      { input: 'isValid("(]")', expected: 'false' },
    ],
    solution: 'function isValid(s) {\n  const stack = [];\n  const map = { ")": "(", "}": "{", "]": "[" };\n  for (const char of s) {\n    if (map[char]) {\n      if (stack.pop() !== map[char]) return false;\n    } else {\n      stack.push(char);\n    }\n  }\n  return stack.length === 0;\n}',
    xpReward: 100,
    timeLimit: 300,
  },
  {
    id: 3,
    title: 'Merge Sorted Arrays',
    difficulty: 'Medium',
    description: 'Merge two sorted arrays into one sorted array without using built-in sort functions.',
    starterCode: `function mergeSorted(arr1, arr2) {
  // Write your code here
  
}`,
    testCases: [
      { input: 'mergeSorted([1,3,5], [2,4,6])', expected: '[1,2,3,4,5,6]' },
      { input: 'mergeSorted([], [1,2])', expected: '[1,2]' },
    ],
    solution: 'function mergeSorted(arr1, arr2) {\n  const result = [];\n  let i = 0, j = 0;\n  while (i < arr1.length && j < arr2.length) {\n    if (arr1[i] <= arr2[j]) {\n      result.push(arr1[i++]);\n    } else {\n      result.push(arr2[j++]);\n    }\n  }\n  return [...result, ...arr1.slice(i), ...arr2.slice(j)];\n}',
    xpReward: 200,
    timeLimit: 400,
  },
  {
    id: 4,
    title: 'Find Maximum Subarray',
    difficulty: 'Medium',
    description: 'Find the contiguous subarray with the largest sum and return that sum.',
    starterCode: `function maxSubArray(nums) {
  // Write your code here
  
}`,
    testCases: [
      { input: 'maxSubArray([-2,1,-3,4,-1,2,1,-5,4])', expected: '6' },
      { input: 'maxSubArray([1])', expected: '1' },
    ],
    solution: 'function maxSubArray(nums) {\n  let max = nums[0];\n  let current = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    current = Math.max(nums[i], current + nums[i]);\n    max = Math.max(max, current);\n  }\n  return max;\n}',
    xpReward: 200,
    timeLimit: 400,
  },
  {
    id: 5,
    title: 'LRU Cache',
    difficulty: 'Hard',
    description: 'Design and implement an LRU (Least Recently Used) cache with O(1) get and put operations.',
    starterCode: `class LRUCache {
  constructor(capacity) {
    // Initialize here
  }
  
  get(key) {
    // Write your code here
  }
  
  put(key, value) {
    // Write your code here
  }
}`,
    testCases: [
      { input: 'LRU Cache Test', expected: 'O(1) operations' },
    ],
    solution: 'class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.cache = new Map();\n  }\n  get(key) {\n    if (!this.cache.has(key)) return -1;\n    const value = this.cache.get(key);\n    this.cache.delete(key);\n    this.cache.set(key, value);\n    return value;\n  }\n  put(key, value) {\n    if (this.cache.has(key)) this.cache.delete(key);\n    this.cache.set(key, value);\n    if (this.cache.size > this.capacity) {\n      this.cache.delete(this.cache.keys().next().value);\n    }\n  }\n}',
    xpReward: 500,
    timeLimit: 600,
  },
];

interface CodeChallengeGameProps {
  onClose: () => void;
  /** Nested inside PortfolioGameHub — no full-screen backdrop */
  variant?: 'fullscreen' | 'embedded';
}

export const CodeChallengeGame: React.FC<CodeChallengeGameProps> = ({ onClose, variant = 'fullscreen' }) => {
  const { addXP, incrementChallenges } = useGame();
  const embedded = variant === 'embedded';
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isPlaying && timeRemaining > 0 && !isCorrect) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isPlaying && !isCorrect) {
      setOutput('⏱️ Time\'s up!');
      setIsCorrect(false);
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeRemaining, isCorrect]);

  const startChallenge = (challenge: Challenge) => {
    setCurrentChallenge(challenge);
    setCode(challenge.starterCode);
    setOutput(null);
    setIsCorrect(null);
    setTimeRemaining(challenge.timeLimit);
    setIsPlaying(true);
  };

  const runCode = () => {
    if (!currentChallenge) return;

    try {
      // Create a safe evaluation context
      const userFunction = code.includes('function') 
        ? code.match(/function\s+\w+/)?.[0]?.split(' ')[1] 
        : code.match(/class\s+\w+/)?.[0]?.split(' ')[1];

      if (!userFunction) {
        setOutput('❌ Error: No function found in code');
        setIsCorrect(false);
        return;
      }

      // Evaluate the code
      // eslint-disable-next-line no-eval
      eval(code);

      // Run test cases
      let allPassed = true;
      const results: string[] = [];

      for (const testCase of currentChallenge.testCases) {
        try {
          // eslint-disable-next-line no-eval
          const result = eval(`${testCase.input}`);
          const resultStr = JSON.stringify(result);
          const passed = resultStr === testCase.expected;
          
          if (!passed) allPassed = false;
          results.push(`${testCase.input} => ${resultStr} ${passed ? '✓' : '✗ (expected: ' + testCase.expected + ')'}`);
        } catch (e) {
          allPassed = false;
          results.push(`${testCase.input} => Error: ${(e as Error).message}`);
        }
      }

      setOutput(results.join('\n'));
      setIsCorrect(allPassed);

      if (allPassed && isPlaying) {
        const xpEarned = currentChallenge.xpReward;
        setScore((prev) => prev + xpEarned);
        addXP(xpEarned);
        incrementChallenges();
        setCompletedChallenges((prev) => [...prev, currentChallenge.id]);
        setIsPlaying(false);
        setOutput(`🎉 All tests passed! +${xpEarned} XP\n\n${results.join('\n')}`);
      }
    } catch (e) {
      setOutput(`❌ Error: ${(e as Error).message}`);
      setIsCorrect(false);
    }
  };

  const resetChallenge = () => {
    if (currentChallenge) {
      setCode(currentChallenge.starterCode);
      setOutput(null);
      setIsCorrect(null);
      setTimeRemaining(currentChallenge.timeLimit);
      setIsPlaying(true);
    }
  };

  const showSolutionCode = () => {
    if (currentChallenge) {
      setCode(currentChallenge.solution);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'Medium': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      case 'Hard': return 'text-red-400 border-red-400/30 bg-red-400/10';
      default: return 'text-grey';
    }
  };

  return (
    <motion.div
      initial={{ opacity: embedded ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={
        embedded
          ? 'flex flex-1 flex-col min-h-0 h-full overflow-hidden'
          : 'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/90 backdrop-blur-xl'
      }
    >
      <div
        className={`w-full glass border-gold/20 overflow-hidden flex flex-col ${
          embedded ? 'h-full max-h-full rounded-none border-0 border-t border-gold/10' : 'max-w-6xl h-[90vh] rounded-3xl'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gold/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20">
              <Code className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gold">Code Challenge Arena</h2>
              <p className="text-xs text-grey uppercase tracking-widest">Test Your Skills • Earn XP</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 glass px-4 py-2 rounded-xl">
              <Trophy className="w-5 h-5 text-gold" />
              <span className="text-xl font-black text-gold">{score} XP</span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-navy/60 flex items-center justify-center border border-gold/10 hover:border-gold/40 text-grey hover:text-gold transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Challenge List */}
          <div className="w-80 border-r border-gold/10 overflow-y-auto p-4">
            <h3 className="text-sm font-black text-grey uppercase tracking-widest mb-4">Available Challenges</h3>
            <div className="space-y-3">
              {challenges.map((challenge) => (
                <motion.button
                  key={challenge.id}
                  onClick={() => startChallenge(challenge)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-2xl border text-left transition-all ${
                    completedChallenges.includes(challenge.id)
                      ? 'bg-gold/10 border-gold/40'
                      : 'bg-navy/40 border-gold/10 hover:border-gold/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-black px-2 py-0.5 rounded-lg border ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                    {completedChallenges.includes(challenge.id) && (
                      <CheckCircle className="w-4 h-4 text-gold" />
                    )}
                  </div>
                  <h4 className="font-bold text-soft-white mb-1">{challenge.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-grey">
                    <Zap className="w-3 h-3 text-gold" />
                    <span>{challenge.xpReward} XP</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Code Editor Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {currentChallenge ? (
              <>
                {/* Challenge Info */}
                <div className="p-6 border-b border-gold/10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-black text-soft-white mb-2">{currentChallenge.title}</h3>
                      <p className="text-grey text-sm leading-relaxed">{currentChallenge.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                        timeRemaining < 60 ? 'border-red-400/30 bg-red-400/10' : 'border-gold/20 bg-gold/10'
                      }`}>
                        <Clock className={`w-4 h-4 ${timeRemaining < 60 ? 'text-red-400' : 'text-gold'}`} />
                        <span className={`font-mono font-bold ${timeRemaining < 60 ? 'text-red-400' : 'text-gold'}`}>
                          {formatTime(timeRemaining)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Test Cases */}
                  <div className="glass p-4 rounded-xl">
                    <h4 className="text-xs font-black text-grey uppercase tracking-widest mb-3">Test Cases</h4>
                    <div className="space-y-2">
                      {currentChallenge.testCases.map((tc, idx) => (
                        <div key={idx} className="text-sm font-mono text-grey">
                          <span className="text-gold">{tc.input}</span>
                          <span className="mx-2">→</span>
                          <span className="text-soft-white">{tc.expected}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Code Editor */}
                <div className="flex-1 flex flex-col p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-grey uppercase tracking-widest">Code Editor</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={showSolutionCode}
                        className="px-3 py-1.5 text-xs font-bold text-grey hover:text-gold transition-colors"
                      >
                        Show Solution
                      </button>
                      <button
                        onClick={resetChallenge}
                        className="px-3 py-1.5 text-xs font-bold text-grey hover:text-gold transition-colors flex items-center gap-1"
                      >
                        <RefreshCw className="w-3 h-3" />
                        Reset
                      </button>
                    </div>
                  </div>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="flex-1 w-full p-4 font-mono text-sm bg-navy/60 border border-gold/10 rounded-xl text-soft-white resize-none focus:outline-none focus:border-gold/30"
                    spellCheck={false}
                  />
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-4">
                    <motion.button
                      onClick={runCode}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-3 gold-gradient-bg text-navy font-black rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(197,168,128,0.4)]"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Run Code
                    </motion.button>
                    {isCorrect === true && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-green-400 font-bold flex items-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Correct! +{currentChallenge.xpReward} XP
                      </motion.span>
                    )}
                    {isCorrect === false && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-red-400 font-bold flex items-center gap-2"
                      >
                        <XCircle className="w-5 h-5" />
                        Keep Trying!
                      </motion.span>
                    )}
                  </div>

                  {/* Output */}
                  {output && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-4 rounded-xl font-mono text-sm whitespace-pre-wrap ${
                        isCorrect ? 'bg-green-400/10 border border-green-400/30' : 'bg-navy/60 border border-gold/10'
                      }`}
                    >
                      <span className={isCorrect ? 'text-green-400' : 'text-grey'}>{output}</span>
                    </motion.div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-20 h-20 text-gold/20 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-grey mb-2">Select a Challenge</h3>
                  <p className="text-sm text-grey/60">Choose a coding challenge from the list to begin</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
