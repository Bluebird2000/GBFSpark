import React from 'react';
import { Pressable, StyleProp, View, ViewStyle, TextStyle } from 'react-native';

import { hintMessageStyles } from '@constants/styles';
import useColorTheme from '@helpers/hooks/useColorTheme';
import colours from '@constants/colours';
import BodyMedium from '@components/atoms/text/bodyMedium';

interface HintMessageProps {
  hintText?: string;
  hintColour?: string;
  linkColour?: string;
  linkText?: string;
  linkTextContainerStyle?: StyleProp<ViewStyle>;
  hintTextStyle?: StyleProp<TextStyle>;
  linkTextStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const HintMessage: React.FC<HintMessageProps> = ({
  hintText = '',
  hintColour,
  linkColour = '',
  linkText = 'Link Test',
  linkTextContainerStyle = {},
  hintTextStyle = {},
  linkTextStyle = {},
  containerStyle = {},
  onPress,
}) => {
  const colourScheme = useColorTheme();

  const defaultLinkColour =
    colourScheme === 'dark' ? colours.activeBlue200 : colours.activeBlue400;

  return (
    <View style={[hintMessageStyles.parent, containerStyle]}>
      {hintText ? (
        <BodyMedium
          colour={hintColour || colours.darkBase200}
          textStyle={hintTextStyle}
        >
          {hintText}
        </BodyMedium>
      ) : null}
      <Pressable onPress={onPress} style={linkTextContainerStyle}>
        <BodyMedium
          colour={linkColour || defaultLinkColour}
          textStyle={linkTextStyle}
        >
          {linkText}
        </BodyMedium>
      </Pressable>
    </View>
  );
};

export default HintMessage;
