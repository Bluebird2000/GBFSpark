import React, { useState } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { verticalScale } from '@constants/scale';
import GBFSInput from './GBFSInput';
import { passwordStyles } from '@constants/styles';

type PasswordInputProps = {
  label?: string;
  placeholder?: string;
  password: string;
  onChangePassword: (text: string) => void;
  textContentType?: string;
  containerStyle?: React.CSSProperties;
  passwordValidation?: boolean;
  setIsValid?: (isValid: boolean) => void;
  passwordValidationText?: string;
  message?: string;
  [key: string]: any; // <-- Add this line
};

export default function PasswordInput({
  label = 'password',
  placeholder = 'Enter your password',
  password,
  onChangePassword,
  textContentType = 'password',
  containerStyle = {},
  passwordValidation = false,
  setIsValid = () => {},
  passwordValidationText,
  message,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <>
      <GBFSInput
        placeholder={placeholder}
        label={label}
        value={password}
        onChangeText={onChangePassword}
        secureTextEntry={!showPassword}
        textContentType={textContentType}
        containerStyle={{
          marginTop: verticalScale(14),
          marginBottom: verticalScale(24),
          ...containerStyle,
        }}
        message={message}
        {...props}
      />
      <Pressable
        onPress={toggleShowPassword}
        style={[
          passwordStyles.showpassword,
          message && { top: verticalScale(-52) },
        ]}
      ></Pressable>
    </>
  );
}
