import React from 'react';
import { View } from 'react-native';
import ParentScrollView from '@components/templates/ParentScrollView';
import BodyMedium from '@components/atoms/text/bodyMedium';
import GBFSButton from '@components/molecules/GBFSButton';
import colours from '@constants/colours';
import { verticalScale } from '@constants/scale';

type GameResultProps = {
  score: number;
  onPressPlayAgain: () => void;
  onPressViewHistory: () => void;
};

export default function GameResult({
  score,
  onPressPlayAgain,
  onPressViewHistory,
}: GameResultProps) {
  return (
    <ParentScrollView
      title="Game Over"
      description="Here's how you did!"
      containerStyle={{ marginTop: 24 }}
    >
      <View style={{ alignItems: 'center', marginTop: verticalScale(30) }}>
        <BodyMedium>🎉 Your Score: {score}</BodyMedium>
        <GBFSButton
          text='🔁 Play Again'
          onPress={onPressPlayAgain}
          textStyle={{ color: colours.neutral100 }}
          containerStyle={{
            paddingVertical: verticalScale(10),
            marginVertical: verticalScale(16),
          }}
        />
        <GBFSButton
          text='📜 View Game History'
          onPress={onPressViewHistory}
          textStyle={{ color: colours.darkBase600 }}
          containerStyle={{
            paddingVertical: verticalScale(10),
            backgroundColor: colours.neutral100,
            borderColor: colours.activeBlue400,
          }}
        />
      </View>
    </ParentScrollView>
  );
}
