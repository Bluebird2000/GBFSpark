import React from 'react';
import { Text, TextStyle } from 'react-native';
import { font } from '@constants/palette';
import colours from '@constants/colours';
import { BodyTextProps } from '@helpers/common';

export default function H2({
  colour = colours.darkBase400,
  textStyle = {},
  children,
  ...props
}: BodyTextProps) {
  return (
    <Text style={[font(colour).h2 as TextStyle, textStyle]} {...props}>
      {children}
    </Text>
  );
}
