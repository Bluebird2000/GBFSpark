import {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { RootState } from '../utils/config/reduxStore';
import { handleError, isEmailValid } from '@helpers/helpers';

type LoginState = {
  email: string;
  password: string;
  isLoading: boolean;
  messageType: 'error' | 'success' | string;
  countryBottomSheetSnap?: string;
};

export default function useLoginLogic() {
  const dispatch: Dispatch = useDispatch();
  const { email: reduxEmail, firstName: reduxFirstName } = useSelector(
    (reduxState: RootState) => reduxState.user,
  );

  const initialState: LoginState = {
    email: reduxEmail || '',
    password: '',
    isLoading: false,
    messageType: 'error',
  };

  const isMounted = useRef<boolean>(false);
  const [state, setState] = useState<LoginState>(initialState);

  /** Disable the button if:  
    • a request is in flight  
    • e-mail is invalid  
    • password is empty */
  const isLoginDisabled = useMemo(
    () =>
      state.isLoading ||
      !isEmailValid(state.email) ||
      !state.password,
    [state.isLoading, state.email, state.password],
  );

  /** Safe state-setter that ignores calls after unmount */
  function setStateIfMounted(obj: Partial<LoginState>) {
    if (isMounted.current) {
      setState(prev => ({ ...prev, ...obj }));
    }
  }

  const onChangeEmail = useCallback(
    (newEmail: string) => setStateIfMounted({ email: newEmail }),
    [],
  );

  const onChangePassword = useCallback(
    (newPassword: string) => setStateIfMounted({ password: newPassword }),
    [],
  );

  /** Handle a successful login response */
  const handleLoginSuccess = useCallback(
    async ({ data }: any) => {
      const { access_token, email, firstName, lastName } = data;

      const loginData = {
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
    [state.password, dispatch],
  );

  /** Toggle loading flag (used as a simple mock for now) */
  const onLogin = useCallback(() => {
    setState(prev => ({ ...prev, isLoading: !prev.isLoading }));
  }, []);

  /* Mark mounted / unmounted */
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (state.isLoading) {
      // signIn({ username: state.email, password: state.password })
      //   .then(handleLoginSuccess)
      //   .catch((e) => handleError(e as Error))
      //   .finally(onLogin);
    }
  }, [state.email, state.password, state.isLoading]);

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
