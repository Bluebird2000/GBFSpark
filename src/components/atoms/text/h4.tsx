import React from 'react';
import { Text, TextStyle } from 'react-native';
import colours from '@constants/colours';
import { BodyTextProps } from '@helpers/common';
import { font } from '@constants/palette';

export default function H4({
  colour = colours.darkBase400,
  textStyle = {},
  children,
  ...props
}: BodyTextProps) {
  return (
    <Text style={[font(colour).h4 as TextStyle, textStyle]} {...props}>
      {children}
    </Text>
  );
}
