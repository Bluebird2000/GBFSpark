import React from 'react';
import {Text, TextStyle} from 'react-native';
import {font} from '@constants/palette';
import colours from '@constants/colours';
import {BodyTextProps} from '@helpers/common';

export default function SubTitle({
  colour = colours.darkBase400,
  textStyle = {},
  children,
  ...props
}: BodyTextProps): React.JSX.Element {
  return (
    <Text style={[font(colour).subTitle as TextStyle, textStyle]} {...props}>
      {children}
    </Text>
  );
}
