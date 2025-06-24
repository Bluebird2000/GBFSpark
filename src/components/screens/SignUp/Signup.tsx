import React from 'react';
import GBFSButton from '@components/molecules/GBFSButton';
import ParentScrollView from '@components/templates/ParentScrollView';
import PasswordInput from '@components/molecules/PasswordInput';
import EmailInput from '@components/molecules/EmailInput';
import HintMessage from '@components/molecules/HintMessage';
import { horizontalScale, verticalScale } from '@constants/scale';
import { authStyles } from '@constants/styles';
import { SignUpProps } from '@helpers/interface';
import GBFSInput from '@components/molecules/GBFSInput';
import colours from '@constants/colours';

const SignUp: React.FC<SignUpProps> = ({
  firstname,
  lastname,
  email,
  onChangeFirstName,
  onChangeLastName,
  onChangeEmail,
  isLoading,
  password,
  onChangePassword,
  onSignUp,
  isSignupDisabled,
  onPressHintMessage,
}) => {
  return (
    <ParentScrollView
      title="Sign Up"
      description="Create a new account"
      containerStyle={{ marginTop: 24 }}
    >
      <GBFSInput
        placeholder="Enter your firstname"
        label="First name"
        value={firstname}
        onChangeText={onChangeFirstName}
        containerStyle={{ marginTop: verticalScale(24) }}
        autoFocus
      />
      <GBFSInput
        placeholder="Enter your lastname"
        label="Last name"
        value={lastname}
        onChangeText={onChangeLastName}
        containerStyle={{ marginTop: verticalScale(24) }}
      />
      <EmailInput
        email={email}
        onChangeEmail={onChangeEmail}
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
        text={isLoading ? 'Signing Up...' : 'Sign Up'}
        onPress={onSignUp}
        disabled={isSignupDisabled}
        containerStyle={{
          width: '100%',
          marginTop: 14,
          backgroundColor: isSignupDisabled
            ? colours.activeBlue200
            : colours.activeBlue400,
        }}
      />
      <HintMessage
        onPress={onPressHintMessage}
        hintText="Already have an account?"
        hintTextStyle={{ marginRight: horizontalScale(4) }}
        linkText="Sign In"
        linkTextStyle={{ textDecorationLine: 'underline' }}
        containerStyle={authStyles.hintContainer}
      />
    </ParentScrollView>
  );
};

export default SignUp;
