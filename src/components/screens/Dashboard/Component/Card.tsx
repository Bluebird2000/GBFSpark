import React from 'react';
import {TouchableOpacity } from 'react-native';
import BodyMedium from '@components/atoms/text/bodyMedium';
import ParentView from '@components/templates/ParentView';
import colours from '@constants/colours';
import { horizontalScale, verticalScale } from '@constants/scale';

export default function Card({ question, options, onAnswer }: any) {
  return (
    <ParentView containerStyle={{ paddingVertical: horizontalScale(14) }}>
      <BodyMedium>{question}</BodyMedium>
      {options.map((option: string, idx: number) => (
        <TouchableOpacity
          key={idx}
          style={{
            paddingVertical: verticalScale(14),
            paddingHorizontal: horizontalScale(12),
            marginVertical: verticalScale(8),
            backgroundColor: colours.neutral300,
            borderRadius: 5,
          }}
          onPress={() => onAnswer(option)}
        >
          <BodyMedium>{option}</BodyMedium>
        </TouchableOpacity>
      ))}
    </ParentView>
  );
}
