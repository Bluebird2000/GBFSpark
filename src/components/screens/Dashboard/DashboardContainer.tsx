import React, { useEffect, useState } from 'react';
import { View, Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from './Component/Card';
import BodyMedium from '@components/atoms/text/bodyMedium';
import ParentScrollView from '@components/templates/ParentScrollView';
import { verticalScale } from '@constants/scale';
import BodyLarge from '@components/atoms/text/bodyLarge';
import { fetchMultipleGBFS } from '@components/service/gbsf';
import { useGameTimer } from '@helpers/hooks/useGameTimer';
import { useScore } from '@helpers/hooks/useScore';
import { generateQuestions } from '@components/service/quiz';

export default function Dashboard({ navigation }: any) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const { score, updateScore } = useScore();
  const { timeLeft, isRunning, start } = useGameTimer(60);

  useEffect(() => {
    async function init() {
      try {
        const stations = await fetchMultipleGBFS();
        const generated = generateQuestions(stations);
        console.log('Generated Questions:', generated);
        if (!generated.length) throw new Error('No questions generated');
        setQuestions(generated);
        start();
      } catch (err) {
        Alert.alert(
          'Failed to load quiz',
          'Check your connection or GBFS source.',
        );
      }
    }
    init();
  }, []);

  const handleAnswer = (selected: string) => {
    if (!questions[current]) return;
    const correct = selected === questions[current].answer;
    updateScore(correct);

    if (current < questions.length - 1) {
      setCurrent(prev => prev + 1);
    } else {
      endGame();
    }
  };

  useEffect(() => {
    if (timeLeft === 0) endGame();
  }, [timeLeft]);

  async function endGame() {
    await saveAttempt();
    navigation.navigate('Result', { score, won: score > 0 });
  }

  async function saveAttempt() {
    const history = JSON.parse(
      (await AsyncStorage.getItem('game_history')) || '[]',
    );
    history.push({ date: new Date().toISOString(), score });
    await AsyncStorage.setItem('game_history', JSON.stringify(history));
  }

  if (!questions.length) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <BodyLarge>Loading quiz...</BodyLarge>
      </View>
    );
  }

  return (
    <ParentScrollView
      title="GBFS Quiz"
      description="Answer as many as you can in 60 seconds!"
      containerStyle={{ marginTop: 24 }}
    >
      <View style={{ paddingVertical: verticalScale(14) }}>
        <BodyMedium>⏱ Time Left: {timeLeft}s</BodyMedium>
        <BodyMedium>🏆 Score: {score}</BodyMedium>
      </View>
      <Card
        question={questions[current]?.question}
        options={questions[current]?.options || []}
        onAnswer={handleAnswer}
      />
      {current === questions.length - 1 && (
        <Button title="End Game Now" onPress={endGame} />
      )}
    </ParentScrollView>
  );
}
