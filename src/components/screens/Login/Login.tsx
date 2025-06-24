import React from 'react';
import { View } from 'react-native';
import GBFSButton from '@components/molecules/GBFSButton';
import ParentScrollView from '@components/templates/ParentScrollView';
import PasswordInput from '@components/molecules/PasswordInput';
import EmailInput from '@components/molecules/EmailInput';
import HintMessage from '@components/molecules/HintMessage';
import { horizontalScale } from '@constants/scale';
import { authStyles } from '@constants/styles';
import { LoginProps } from '@helpers/interface';
import colours from '@constants/colours';

const Login: React.FC<LoginProps> = ({
  email,
  onChangeEmail,
  isLoading,
  password,
  onChangePassword,
  onLogin,
  isLoginDisabled,
  onPressHintMessage
}) => {
  return (
    <ParentScrollView
      title="Sign In"
      description="Sign in to your account"
      containerStyle={{ marginTop: 24 }}
    >
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
           containerStyle={{
          width: '100%',
          marginTop: 14,
          backgroundColor: isLoginDisabled
            ? colours.activeBlue200
            : colours.activeBlue400,
        }}
        />
      </View>

      <HintMessage
        onPress={onPressHintMessage}
        hintText="New to Umob?"
        hintTextStyle={{ marginRight: horizontalScale(4) }}
        linkText="Sign Up"
        linkTextStyle={{ textDecorationLine: 'underline' }}
        containerStyle={authStyles.hintContainer}
      />
    </ParentScrollView>
  );
};

export default Login;
