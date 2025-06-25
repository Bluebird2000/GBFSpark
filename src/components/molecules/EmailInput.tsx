import React from 'react';
import { TextInputProps } from 'react-native';
import { verticalScale } from '@constants/scale';
import GBFSInput from './GBFSInput';

interface EmailInputProps extends TextInputProps {
  email: string;
  label?: string;
  textContentType?: 'emailAddress';
  onChangeEmail: (text: string) => void;
}

export default function EmailInput({
  email,
  label = 'Email address',
  textContentType = 'emailAddress',
  onChangeEmail,
  ...props
}: EmailInputProps) {
  return (
    <GBFSInput
      placeholder='Enter your email address'
      label={label}
      value={email}
      onChangeText={onChangeEmail}
      message=""
      textContentType={textContentType}
      keyboardType="email-address"
      containerStyle={{ marginTop: verticalScale(24) }}
      autoCapitalize="none"
      {...props}
    />
  );
}
