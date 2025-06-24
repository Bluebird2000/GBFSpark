import React, {useCallback, useState} from 'react';
import Login from './Login';
import useLoginLogic from '@hooks/useLoginLogic';
import {useNavigation} from '@react-navigation/native';

export default function LoginContainer() {
  const [isLoginViaPhoneNumberFlow, setLoginFlow] = useState(false);
  const {
    state,
    onLogin,
    onChangeEmail,
    onChangePassword,
    isLoginDisabled,
  } = useLoginLogic(isLoginViaPhoneNumberFlow);

  function onPressSignIn() {
    setLoginFlow(prevState => !prevState);
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
    />
  );
}
