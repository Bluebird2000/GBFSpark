import { updateProfile } from '@config/userReducer';
import { hashPassword } from '@helpers/hash';
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

  const setStateValue = (
    key: keyof typeof initialState,
    value: string | boolean,
  ) => {
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
    const { email, password, firstName, lastName, isLoading } = state;
    return !email || !password || !firstName || !lastName || isLoading;
  }, [state]);

  const onSignUp = useCallback(() => {
    setState(prev => ({ ...prev, isLoading: true }));

    const passwordHash = hashPassword(state.password);
    const { email, firstName, lastName } = state;
    dispatch(
      updateProfile({
        email: email,
        firstName: firstName,
        lastName: lastName,
        passwordHash,
        isLoggedIn: true,
      }),
    );

    setState(prev => ({ ...prev, isLoading: false }));
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
