import React from 'react';
import { View } from 'react-native';
import GBFSButton from '@components/molecules/GBFSButton';
import ParentScrollView from '@components/templates/ParentScrollView';
import PasswordInput from '@components/molecules/PasswordInput';
import EmailInput from '@components/molecules/EmailInput';

interface LoginProps {
  email: string;
  onChangeEmail: (email: string) => void;
  isLoading: boolean;
  password: string;
  onChangePassword: (password: string) => void;
  onLogin: () => void;
  isLoginDisabled: boolean;
}

const Login: React.FC<LoginProps> = ({
  email,
  onChangeEmail,
  isLoading,
  password,
  onChangePassword,
  onLogin,
  isLoginDisabled,
}) => {
  return (
    <ParentScrollView title="Sign In" description="Sign in to your account">
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
        onSubmitEditing={onLogin}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <GBFSButton
          text={isLoading ? 'Signing In...' : 'Sign In'}
          onPress={onLogin}
          disabled={isLoginDisabled}
          containerStyle={{ width: '100%' }}
        />
      </View>
    </ParentScrollView>
  );
};

export default Login;
