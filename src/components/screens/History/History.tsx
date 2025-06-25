import React from 'react';
import { View, FlatList } from 'react-native';
import ParentScrollView from '@components/templates/ParentScrollView';
import BodyMedium from '@components/atoms/text/bodyMedium';
import colours from '@constants/colours';

type HistoryItem = {
  date: string;
  score: number;
};

type HistoryProps = {
  history: HistoryItem[];
};

export default function History({ history }: HistoryProps) {
  return (
    <ParentScrollView
      title="Game History"
      description="Your previous quiz attempts"
      containerStyle={{ marginTop: 24 }}
    >
      <FlatList
        data={history}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderColor: colours.neutral200,
            }}
          >
            <BodyMedium>Date: {new Date(item.date).toLocaleString()}</BodyMedium>
            <BodyMedium>Score: {item.score}</BodyMedium>
          </View>
        )}
        ListEmptyComponent={
          <BodyMedium>No quiz attempts found yet.</BodyMedium>
        }
      />
    </ParentScrollView>
  );
}
