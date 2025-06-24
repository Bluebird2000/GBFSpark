import React, { JSX, useState } from 'react';
import { View } from 'react-native';
import If from '@components/atoms/If';
import colours from '@constants/colours';
import useColorTheme from '@helpers/hooks/useColorTheme';
import BodySmall from '@components/atoms/text/bodySmall';
import { GBFSInputProps } from '@helpers/interface';
import InputField from '@components/atoms/inputField';
import { textInputStyles } from '@constants/styles';
import { horizontalScale } from '@constants/scale';

export default function GBFSInput({
  placeholder = 'Placeholder',
  label = '',
  rightComponentHeading = '',
  containerStyle = {},
  rightComponent,
  leftComponent,
  inputTextStyle = {},
  ...props
}: GBFSInputProps): JSX.Element {
  const colourScheme = useColorTheme();
  const [isFocused, setIsFocused] = useState(false);
  const styles = textInputStyles(colourScheme);

  return (
    <View style={{ paddingLeft: horizontalScale(8), ...containerStyle }}>
      <View style={styles.labelContainer}>
        <View style={styles.labelHeading}>
          <If condition={label}>
            <BodySmall textStyle={{ color: colours.neutral400 }}>
              {label}
            </BodySmall>
          </If>
        </View>
        <If condition={rightComponentHeading}>
          <BodySmall textStyle={{ color: colours.neutral400 }}>
            {rightComponentHeading}
          </BodySmall>
        </If>
      </View>
      <InputField
        placeholder={placeholder}
        onFocus={() => props.onFocus ?? setIsFocused(!isFocused)}
        onBlur={() => props.onBlur ?? setIsFocused(false)}
        isFocused={isFocused}
        leftComponent={leftComponent}
        rightComponent={rightComponent}
        textInputStyle={{
          ...inputTextStyle,
        }}
        {...props}
      />
      {props.children}
    </View>
  );
}
