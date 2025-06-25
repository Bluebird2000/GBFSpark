import React from 'react';
import { useRoute } from '@react-navigation/native';
import GameResult from './Result';

export default function GameResultContainer({ navigation }: any) {
  const route = useRoute();
  const { score = 0 } = (route.params || {}) as { score?: number };

  function handlePlayAgain() {
    navigation.replace('Main');
  }

  function handleViewHistory() {
    navigation.navigate('History');
  }

  return (
    <GameResult
      score={score}
      onPressPlayAgain={handlePlayAgain}
      onPressViewHistory={handleViewHistory}
    />
  );
}
