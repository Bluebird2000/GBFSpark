import React from 'react';
import Welcome from './Welcome';

export default function WelcomeContainer({ navigation }: any) {
  function goToSignUp() {
    navigation.navigate('SignUpStart', { isSignupViaPhoneNumberFlow: false });
  }
  return <Welcome onPressPrimaryButton={goToSignUp} />;
}
