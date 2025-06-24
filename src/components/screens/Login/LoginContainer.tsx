import React, { useState } from 'react';
import Login from './Login';
import useLoginLogic from '@hooks/useLoginLogic';

export default function LoginContainer({ navigation }: any) {
  const { state, onLogin, onChangeEmail, onChangePassword, isLoginDisabled } =
    useLoginLogic();

  function onPressSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <Login
      email={state.email}
      onChangeEmail={onChangeEmail}
      password={state.password}
      onChangePassword={onChangePassword}
      onLogin={onLogin}
      isLoading={state.isLoading}
      isLoginDisabled={isLoginDisabled}
      onPressHintMessage={onPressSignUp}
    />
  );
}
