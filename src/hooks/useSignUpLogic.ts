import { useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useSignUpLogic() {
  const initialState = {
    email: '',
    isLoading: false,
    messageType: 'error',
    signUpData: {},
    signUpHeaders: {},
    isPolicyChecked: false,
  };
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();
  const onChangeEmail = (value: string) => {
    setState(prevState => ({
      ...prevState,
      email: value,
    }));
  };

  return {
    state,
    onChangeEmail,
  };
}
