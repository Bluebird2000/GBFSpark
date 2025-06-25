import React from 'react';
import { View, Button } from 'react-native';
import ParentScrollView from '@components/templates/ParentScrollView';
import BodyMedium from '@components/atoms/text/bodyMedium';
import BodyLarge from '@components/atoms/text/bodyLarge';
import { verticalScale } from '@constants/scale';
import Card from './Component/Card';
import GBFSButton from '@components/molecules/GBFSButton';
import colours from '@constants/colours';
import { useAppSelector } from '@config/reduxStore';

type DashboardProps = {
  questions: any[];
  current: number;
  score: number;
  timeLeft: number;
  hasGameStarted: boolean;
  onStartGame: () => void;
  onAnswer: (selected: string) => void;
  onEndGame: () => void;
};

export default function Dashboard({
  questions,
  current,
  score,
  timeLeft,
  hasGameStarted,
  onStartGame,
  onAnswer,
  onEndGame,
}: DashboardProps) {
  const firstName = useAppSelector(state => state.user.firstName);

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
      description={` Hi ${firstName}, Answer as many as you can in 60 seconds!`}
      containerStyle={{ marginTop: verticalScale(24) }}
    >
      {!hasGameStarted ? (
        <View style={{ marginTop: verticalScale(32) }}>
          <BodyLarge
            style={{ textAlign: 'center', marginBottom: verticalScale(24) }}
          >
            Ready to test your knowledge?
          </BodyLarge>
          <GBFSButton
            text="Start Game"
            onPress={onStartGame}
            textStyle={{ color: colours.darkBase400 }}
            containerStyle={{
              backgroundColor: 'transparent',
              borderColor: colours.activeBlue400,
            }}
          />
        </View>
      ) : (
        <>
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
        </>
      )}
    </ParentScrollView>
  );
}
