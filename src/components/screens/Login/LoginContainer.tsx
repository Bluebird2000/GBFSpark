import React, {useCallback, useState} from 'react';
import Login from './Login';
import useLoginLogic from 'src/hooks/useLoginLogic';
import {useNavigation} from '@react-navigation/native';

export default function LoginContainer() {
  const userProfile = useSelector(reduxState => reduxState.user);
  const [isLoginViaPhoneNumberFlow, setLoginFlow] = useState(false);
  const {
    state,
    onLogin,
    onChangeEmail,
    onChangePassword,
    isLoginDisabled,
    onFocus,
    onBlur,
    onChangePhoneNumber,
    onSelectCountry,
  } = useLoginLogic(isLoginViaPhoneNumberFlow);

  const navigation = useNavigation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goToSignUp = useCallback(() => navigation.navigate('SignUpStart'), []);

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
      onFocus={onFocus}
      onBlur={onBlur}
      onSelectCountry={onSelectCountry}
      onPressHintMessage={goToSignUp}
    />
  );
}
