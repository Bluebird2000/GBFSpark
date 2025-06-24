import { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function useSignUpLogic() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isLoading: false,
    messageType: 'error',
    isPolicyChecked: false,
  };

  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const setStateValue = (key: keyof typeof initialState, value: string | boolean) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const onChangeEmail = useCallback((email: string) => {
    setStateValue('email', email);
  }, []);

  const onChangePassword = useCallback((password: string) => {
    setStateValue('password', password);
  }, []);

  const onChangeFirstName = useCallback((firstName: string) => {
    setStateValue('firstName', firstName);
  }, []);

  const onChangeLastName = useCallback((lastName: string) => {
    setStateValue('lastName', lastName);
  }, []);

  const isSignupDisabled = useMemo(() => {
    return (
      !state.email ||
      !state.password ||
      !state.firstName ||
      !state.lastName ||
      state.isLoading
    );
  }, [state]);

  const onSignUp = useCallback(() => {
    // Simulated async signup logic
    setState(prev => ({ ...prev, isLoading: true }));

    setTimeout(() => {
      console.log('User signed up:', {
        email: state.email,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
      });

      // You would normally dispatch an action here
      // dispatch(signUpAction(...))

      setState(prev => ({ ...prev, isLoading: false }));
    }, 2000);
  }, [state]);

  return {
    state,
    onChangeEmail,
    onChangePassword,
    onChangeFirstName,
    onChangeLastName,
    onSignUp,
    isSignupDisabled,
  };
}
