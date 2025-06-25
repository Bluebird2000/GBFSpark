import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../utils/config/reduxStore';
import { isEmailValid } from '@helpers/helpers';
import { updateProfile } from '../utils/config/userReducer';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { hashPassword } from '@helpers/hash';


type LoginState = {
  email: string;
  password: string;
  isLoading: boolean;
  messageType: 'error' | 'success' | string;
  countryBottomSheetSnap?: string;
};

export default function useLoginLogic() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const initialState: LoginState = {
    email: user.email || '',
    password: '',
    isLoading: false,
    messageType: '',
  };

  const [state, setState] = useState<LoginState>(initialState);
  const isMounted = useRef<boolean>(false);

  const isLoginDisabled = useMemo(
    () => state.isLoading || !isEmailValid(state.email) || !state.password,
    [state],
  );

  const setStateIfMounted = (obj: Partial<LoginState>) => {
    if (isMounted.current) {
      setState(prev => ({ ...prev, ...obj }));
    }
  };

  const onChangeEmail = useCallback(
    (newEmail: string) => setStateIfMounted({ email: newEmail }),
    [],
  );

  const onChangePassword = useCallback(
    (newPassword: string) => setStateIfMounted({ password: newPassword }),
    [],
  );

  const onLogin = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true }));

    const inputHash = await hashPassword(state.password);
    const emailMatch = user.email.toLowerCase() === state.email.toLowerCase();
    const passwordMatch = inputHash === user.passwordHash;

    if (emailMatch && passwordMatch) {
      dispatch(updateProfile({ isLoggedIn: true }));
    } else {
      setState(prev => ({
        ...prev,
        messageType: 'error',
        isLoading: false,
      }));
      return;
    }

    setState(prev => ({ ...prev, isLoading: false }));
  }, [state, user, dispatch]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    state,
    onLogin,
    onChangeEmail,
    onChangePassword,
    isLoginDisabled,
  };
}
