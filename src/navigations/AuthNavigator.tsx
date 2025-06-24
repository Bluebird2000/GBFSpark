import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeContainer from '../components/screens/Welcome/WelcomeContainer';
import LoginContainer from '../components/screens/Login/LoginContainer';
import SignUpContainer from '../components/screens/SignUp/SignupContainer';

export const AUTH_SCREEN_CONFIG = {
  Login: 'login',
  SignUp: 'register',
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator(): React.JSX.Element {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeContainer}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name="Login" component={LoginContainer} options={{ headerShown: false }}/>
      <AuthStack.Screen name="SignUp" component={SignUpContainer} options={{ headerShown: false }}/>
    </AuthStack.Navigator>
  );
}
