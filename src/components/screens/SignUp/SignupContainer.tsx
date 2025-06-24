import React, {useState} from 'react';
import SignUp from './Signup';
import useLoginLogic from '@hooks/useLoginLogic';

export default function SignUpContainer() {
  const [isLoginViaPhoneNumberFlow, setLoginFlow] = useState(false);
  const {
    state,
    onSignUp,
    onChangeEmail,
    onChangePassword,
    isSignupDisabled,
  } = useLoginLogic(isLoginViaPhoneNumberFlow);

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
    />
  );
}
