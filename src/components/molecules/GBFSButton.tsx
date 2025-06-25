import React from 'react';
import { TouchableOpacity } from 'react-native';
import colours from '../../utils/constants/colours';
import { buttonStyles } from '../../utils/constants/styles';
import useColorTheme from '@helpers/hooks/useColorTheme';
import H6 from '@components/atoms/text/h6';

export default function GBFSButton({
  onPress = () => {},
  text = '',
  width = 0,
  containerStyle = {},
  textStyle = {},
  disabled = false,
}) {
  const colourScheme = useColorTheme();
  const { container } = buttonStyles(width, colourScheme);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[container, containerStyle]}
      disabled={disabled}
    >
      <H6 colour={colours.neutral200} textStyle={textStyle}>
        {text}
      </H6>
    </TouchableOpacity>
  );
}
