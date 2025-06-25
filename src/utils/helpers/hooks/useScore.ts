// hooks/useScore.ts
import { useState } from 'react';
import { CORRECT_SCORE, WRONG_SCORE } from '@constants/constant';

export function useScore() {
  const [score, setScore] = useState(0);

  const updateScore = (isCorrect: boolean) => {
    setScore(prev => prev + (isCorrect ? CORRECT_SCORE : WRONG_SCORE));
  };

  return { score, updateScore };
}
