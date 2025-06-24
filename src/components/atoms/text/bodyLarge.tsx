import React, {JSX} from 'react';
import {Text, TextStyle} from 'react-native';
import colours from '@constants/colours';
import {BodyTextProps} from '@helpers/common';
import { font } from '@constants/palette';

export default function BodyLarge({
  colour = colours.darkBase400,
  textStyle = {},
  children,
  ...props
}: BodyTextProps): JSX.Element {
  return (
    <Text style={[font(colour).bodyLarge as TextStyle, textStyle]} {...props}>
      {children}
    </Text>
  );
}
