import React, { useState } from 'react';
import { QuizHome } from '@/components/QuizHome';
import { QuizGame } from '@/components/QuizGame';
import { QuizResults } from '@/components/QuizResults';

type GameState = 'home' | 'playing' | 'results';

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('home');
  const [finalScore, setFinalScore] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  const handleStartGame = () => {
    setGameState('playing');
  };

  const handleGameEnd = (score: number, total: number) => {
    setFinalScore(score);
    setFinalTotal(total);
    setGameState('results');
  };

  const handlePlayAgain = () => {
    setGameState('playing');
  };

  const handleBackToHome = () => {
    setGameState('home');
  };

  return (
    <div className="min-h-screen">
      {gameState === 'home' && (
        <QuizHome onStartGame={handleStartGame} />
      )}
      
      {gameState === 'playing' && (
        <QuizGame onGameEnd={handleGameEnd} />
      )}
      
      {gameState === 'results' && (
        <QuizResults 
          score={finalScore}
          total={finalTotal}
          onPlayAgain={handlePlayAgain}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
};

export default Index;
