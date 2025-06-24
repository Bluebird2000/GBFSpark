import React from 'react';
import { View } from 'react-native';
import GBFSButton from '@components/molecules/GBFSButton';
import ParentScrollView from '@components/templates/ParentScrollView';
import PasswordInput from '@components/molecules/PasswordInput';
import EmailInput from '@components/molecules/EmailInput';

interface SignUpProps {
  email: string;
  onChangeEmail: (email: string) => void;
  isLoading: boolean;
  password: string;
  onChangePassword: (password: string) => void;
  onSignUp: () => void;
  isSignupDisabled: boolean;
}

const SignUp: React.FC<SignUpProps> = ({
  email,
  onChangeEmail,
  isLoading,
  password,
  onChangePassword,
  onSignUp,
  isSignupDisabled,
}) => {
  return (
    <ParentScrollView title="Sign Up" description="Create a new account" containerStyle={{ marginTop: 24 }}>
      <EmailInput
        email={email}
        onChangeEmail={onChangeEmail}
        autoFocus
        returnKeyType="next"
        editable={!isLoading}
      />
      <PasswordInput
        password={password}
        onChangePassword={onChangePassword}
        maxLength={11}
        textContentType="password"
        returnKeyType="done"
        editable={!isLoading}
        onSubmitEditing={onSignUp}
      />
      <GBFSButton
        text={isLoading ? 'Signing In...' : 'Sign In'}
        onPress={onSignUp}
        disabled={isSignupDisabled}
        containerStyle={{ width: '100%', marginTop: 24, marginBottom: 24 }}
      />
    </ParentScrollView>
  );
};

export default SignUp;
