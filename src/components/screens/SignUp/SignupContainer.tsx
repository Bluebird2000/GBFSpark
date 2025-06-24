import React, {useCallback, useState} from 'react';
import Login from './Signup';
import useLoginLogic from 'src/hooks/useLoginLogic';
import {useNavigation} from '@react-navigation/native';

export default function SignUpContainer() {
  const [isLoginViaPhoneNumberFlow, setLoginFlow] = useState(false);
  const {
    state,
    onSignUp,
    onChangeEmail,
    onChangePassword,
    isSignupDisabled,
    onFocus,
    onBlur,
    onChangePhoneNumber,
    onSelectCountry,
  } = useLoginLogic(isLoginViaPhoneNumberFlow);

  const navigation = useNavigation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goToSignUp = useCallback(() => navigation.navigate('SignUpStart'), []);

  function onPressSignUp() {
    setLoginFlow(prevState => !prevState);
  }

  return (
    <SignUp
      email={state.email}
      onChangeEmail={onChangeEmail}
      password={state.password}
      onChangePassword={onChangePassword}
      onSignUp={onSignUp}
      isLoading={state.isLoading}
      isSignupDisabled={isSignupDisabled}
      onFocus={onFocus}
      onBlur={onBlur}
      onSelectCountry={onSelectCountry}
      onPressHintMessage={goToSignUp}
    />
  );
}
