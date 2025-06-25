import React from 'react';
import SignUp from './Signup';
import useSignUpLogic from '@hooks/useSignUpLogic';

export default function SignUpContainer({ navigation }: any) {
  const {
    state,
    onChangeEmail,
    onChangePassword,
    onChangeFirstName,
    onChangeLastName,
    onSignUp,
    isSignupDisabled,
  } = useSignUpLogic();

  function onPressSignIn() {
    navigation.navigate('Login');
  }

  return (
    <SignUp
      firstname={state.firstName}
      lastname={state.lastName}
      email={state.email}
      password={state.password}
      isLoading={state.isLoading}
      isSignupDisabled={isSignupDisabled}
      onChangeFirstName={onChangeFirstName}
      onChangeLastName={onChangeLastName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onSignUp={onSignUp}
      onPressHintMessage={onPressSignIn}
    />
  );
}
