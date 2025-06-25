import React from 'react';
import { View } from 'react-native';
import ParentScrollView from '@components/templates/ParentScrollView';
import BodyMedium from '@components/atoms/text/bodyMedium';
import BodyLarge from '@components/atoms/text/bodyLarge';
import { verticalScale } from '@constants/scale';
import Card from './Component/Card';

type Question = {
  question: string;
  options: string[];
};

type DashboardProps = {
  loading: boolean;
  question: Question | null;
  timeLeft: number;
  score: number;
  onAnswer: (option: string) => void;
};

export default function Dashboard({
  loading,
  question,
  timeLeft,
  score,
  onAnswer,
}: DashboardProps) {
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <BodyLarge>Loading quiz...</BodyLarge>
      </View>
    );
  }

  return (
    <ParentScrollView
      title="GBFS Quiz"
      description="Answer the questions before time runs out!"
      containerStyle={{ marginTop: 24 }}
    >
      <View style={{ paddingVertical: verticalScale(14) }}>
        <BodyMedium>⏱ Time Left: {timeLeft}s</BodyMedium>
        <BodyMedium>🏆 Score: {score}</BodyMedium>
      </View>

      {question && (
        <Card
          question={question.question}
          options={question.options}
          onAnswer={onAnswer}
        />
      )}
    </ParentScrollView>
  );
}
