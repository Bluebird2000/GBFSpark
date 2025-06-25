import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import Dashboard from './Dashboard';
import { fetchMultipleGBFS } from '@components/service/gbsf';
import { useGameTimer } from '@helpers/hooks/useGameTimer';
import { useScore } from '@helpers/hooks/useScore';
import { generateQuestions } from '@components/service/quiz';

export default function DashboardContainer({ navigation }: any) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const { score, updateScore } = useScore();
  const { timeLeft, isRunning, start } = useGameTimer(60);

  useEffect(() => {
    async function init() {
      try {
        const stations = await fetchMultipleGBFS();
        const generated = generateQuestions(stations);
        if (!generated.length) throw new Error('No questions generated');
        setQuestions(generated);
      } catch (err) {
        Alert.alert(
          'Failed to load quiz',
          'Check your connection or GBFS source.'
        );
      }
    }
    init();
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && hasGameStarted) {
      endGame();
    }
  }, [timeLeft, hasGameStarted]);

  const handleAnswer = (selected: string) => {
    if (!questions[current]) return;

    const correct = selected === questions[current].answer;
    updateScore(correct);

    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      endGame();
    }
  };

  const handleStartGame = () => {
    setHasGameStarted(true);
    start();
  };

  async function endGame() {
    await saveAttempt();
    navigation.navigate('Result', { score, won: score > 0 });
  }

  async function saveAttempt() {
    const history = JSON.parse(
      (await AsyncStorage.getItem('game_history')) || '[]'
    );
    history.push({ date: new Date().toISOString(), score });
    await AsyncStorage.setItem('game_history', JSON.stringify(history));
  }

  return (
    <Dashboard
      questions={questions}
      current={current}
      score={score}
      timeLeft={timeLeft}
      hasGameStarted={hasGameStarted}
      onStartGame={handleStartGame}
      onAnswer={handleAnswer}
      onEndGame={endGame}
    />
  );
}
