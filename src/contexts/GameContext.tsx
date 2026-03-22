import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface GameContextType {
  xp: number;
  level: number;
  addXP: (amount: number) => void;
  challengesCompleted: number;
  incrementChallenges: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [xp, setXp] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const addXP = (amount: number) => {
    setXp((prev) => prev + amount);
  };

  const incrementChallenges = () => {
    setChallengesCompleted((prev) => prev + 1);
  };

  const level = Math.floor(xp / 1000) + 1;

  return (
    <GameContext.Provider value={{ xp, level, addXP, challengesCompleted, incrementChallenges }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
