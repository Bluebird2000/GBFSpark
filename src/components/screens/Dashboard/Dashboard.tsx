import React from 'react';
import { View, Button } from 'react-native';
import ParentScrollView from '@components/templates/ParentScrollView';
import BodyMedium from '@components/atoms/text/bodyMedium';
import BodyLarge from '@components/atoms/text/bodyLarge';
import { verticalScale } from '@constants/scale';
import Card from './Component/Card';

type DashboardProps = {
  questions: any[];
  current: number;
  score: number;
  timeLeft: number;
  onAnswer: (selected: string) => void;
  onEndGame: () => void;
};

export default function Dashboard({
  questions,
  current,
  score,
  timeLeft,
  onAnswer,
  onEndGame,
}: DashboardProps) {
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
        onAnswer={onAnswer}
      />

      {current === questions.length - 1 && (
        <Button title="End Game Now" onPress={onEndGame} />
      )}
    </ParentScrollView>
  );
}
