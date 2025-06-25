import React from 'react';
import { View, FlatList } from 'react-native';
import BodyMedium from '@components/atoms/text/bodyMedium';
import { verticalScale } from '@constants/scale';
import BodyLarge from '@components/atoms/text/bodyLarge';
import H6 from '@components/atoms/text/h6';
import ParentView from '@components/templates/ParentView';
import { historyStyles } from '@constants/styles';

type HistoryItem = {
  date: string;
  score: number;
};

type HistoryProps = {
  history: HistoryItem[];
};

export default function History({ history }: HistoryProps) {
  return (
    <ParentView
      title="Game History"
      description="Your previous quiz attempts"
      containerStyle={{ marginTop: verticalScale(24) }}
    >
      <FlatList
        data={history}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={historyStyles.container}>
            <View style={historyStyles.circleDot}></View>
            <View style={historyStyles.content}>
              <BodyMedium>
                Date: {new Date(item.date).toLocaleString()}
              </BodyMedium>
              <H6>Score: {item.score}</H6>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View
            style={historyStyles.emptyContainer}
          >
            <BodyLarge>No game history available</BodyLarge>
          </View>
        }
      />
    </ParentView>
  );
}
