import React, { JSX } from 'react';
import { Text, TextStyle } from 'react-native';
import colours from '@constants/colours';
import { BodyTextProps } from '@helpers/common';
import { font } from '@constants/palette';

export default function H6({
  colour = colours.darkBase400,
  textStyle = {},
  children,
  ...props
}: BodyTextProps): JSX.Element {
  return (
    <Text style={[font(colour).h6 as TextStyle, textStyle]} {...props}>
      {children}
    </Text>
  );
}
