import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  access_token: '',
  isLoggedIn: false,
  email: '',
  firstName: '',
  lastName: '',
  isSigningUp: false,
  passwordHash: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action) => ({ ...state, ...action.payload }),
    clearProfile: state => {
      const { firstName, lastName, email } = state;
      return {
        ...initialState,
        firstName,
        lastName,
        email: '',
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProfile, clearProfile } = userSlice.actions;

export default userSlice.reducer;
