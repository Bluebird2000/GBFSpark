import React from 'react';
import {TextInput, Pressable, View, TextStyle, Dimensions} from 'react-native';
import If from '@components/atoms/If';
import {font} from '@constants/palette';
import colours from '@constants/colours';
import {InputFieldProps} from '@helpers/common';
import {horizontalScale, verticalScale} from '@constants/scale';
import useColorTheme from '@helpers/hooks/useColorTheme';
import { textInputStyles } from '@constants/styles';

const screenWidth = Dimensions.get('window').width;

function InputField({
  borderColor,
  textInputStyle,
  value,
  isFocused,
  forwardRef,
  onPress,
  rightComponent,
  leftComponent,
  isError,
  leftContainerStyle,
  width = screenWidth / 1.1,
  height = verticalScale(48),
  ...props
}: InputFieldProps): React.JSX.Element {
  const colourScheme = useColorTheme();
  const COLOUR_SCHEME_VALUE_COLOUR =
    colourScheme === 'dark' ? colours.neutral900 : colours.darkBase400;
  const COLOUR_SCHEME_PLACEHOLDER_COLOUR =
    colourScheme === 'dark' ? colours.neutral900 : colours.darkBase200;
  const TEXT_STYLE = font(COLOUR_SCHEME_VALUE_COLOUR).bodyLarge;
  const FOCUSED_STYLE = {
    borderWidth: 1,
    borderColor: colours.neutral200,
  };

  const TEXT_PADDINGLEFT = {
    paddingLeft: leftComponent ? horizontalScale(30) : horizontalScale(13),
  };

  const styles = textInputStyles(colourScheme);

  return (
    <Pressable onPress={onPress}>
      <If condition={leftComponent}>
        <View
          style={{
            ...styles.leftIconContainer,
            ...leftContainerStyle,
          }}>
          {leftComponent}
        </View>
      </If>
      <TextInput
        ref={forwardRef}
        onPressIn={onPress}
        value={value}
        style={
          {
            height,
            width,
            borderColor,
            ...TEXT_STYLE,
            ...(isFocused && FOCUSED_STYLE),
            ...styles.textField,
            ...TEXT_PADDINGLEFT,
            ...textInputStyle,
          } as TextStyle
        }
        placeholderTextColor={COLOUR_SCHEME_PLACEHOLDER_COLOUR}
        underlineColorAndroid="transparent"
        {...props}
      />
      <If condition={rightComponent}>
        <View style={styles.rightIconContainer}>{rightComponent}</View>
      </If>
    </Pressable>
  );
}

export default InputField;
