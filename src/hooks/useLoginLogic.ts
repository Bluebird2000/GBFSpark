import { useCallback, useEffect, useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { login as signIn } from 'api/authentication';

import { RootState } from '../utils/config/reduxStore';
import { Dispatch } from 'redux';
import { handleError, isEmailValid } from '@helpers/helpers';

type LoginState = {
  email: string;
  firstName: string;
  password: string;
  isLoading: boolean;
  messageType: 'error' | 'success' | string;
  countryBottomSheetSnap?: string;
};

export default function useLoginLogic(isLoginViaPhoneNumberFlow: boolean) {
  const dispatch: Dispatch = useDispatch();
  const { email: reduxEmail, firstName: reduxFirstName } = useSelector(
    (reduxState: RootState) => reduxState.user,
  );

  const initialState: LoginState = {
    email: reduxEmail || '',
    firstName: reduxFirstName || '',
    password: '',
    isLoading: false,
    messageType: 'error',
  };

  const isMounted = useRef<boolean>(false);
  const [state, setState] = useState<LoginState>(initialState);

  const isLoginDisabled = useMemo(() => {
    if (isLoginViaPhoneNumberFlow) {
      return state.isLoading || !state.password;
    } else {
      return state.isLoading || !isEmailValid(state.email) || !state.password;
    }
  }, [isLoginViaPhoneNumberFlow, state.isLoading, state.password, state.email]);

  function setStateIfMounted(obj: Partial<LoginState>) {
    if (isMounted.current) {
      setState(prevState => ({ ...prevState, ...obj }));
    }
  }

  const onChangeEmail = useCallback((newEmail: string) => {
    setStateIfMounted({ email: newEmail });
  }, []);

  const onChangePassword = useCallback((newPassword: string) => {
    setStateIfMounted({ password: newPassword });
  }, []);

  const handleLoginSuccess = useCallback(
    async ({ data }: any) => {
      const { access_token, email, firstName, lastName } = data;

      let loginData: any = {
        access_token,
        isLoggedIn: true,
        email,
        firstName,
        lastName,
        password: state.password,
      };

      // dispatch(updateProfile(loginData));
      // dispatch(updateProfile({ isFirstLogin: false }));
    },
    [state.password, isLoginViaPhoneNumberFlow, reduxEmail, dispatch],
  );

  const onLogin = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isLoading: !prevState.isLoading,
    }));
  }, []);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // useEffect(() => {
  //   if (state.isLoading) {
  //     signIn({
  //       username: state.email,
  //       password: state.password,
  //     })
  //       .then(handleLoginSuccess)
  //       .catch((e: unknown) => {
  //         handleError(e as Error);
  //       })
  //       .finally(onLogin);
  //   }
  // }, [state.email, state.isLoading, state.password]);

  return {
    state,
    setStateIfMounted,
    handleLoginSuccess,
    onLogin,
    onChangeEmail,
    onChangePassword,
    isLoginDisabled,
  };
}
