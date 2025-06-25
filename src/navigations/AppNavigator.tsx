import React, { useCallback, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import AuthNavigator, { AUTH_SCREEN_CONFIG } from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppStack = createNativeStackNavigator();

function LoggedInComponent({ ...navigatorProps }) {
  return <MainNavigator {...navigatorProps} />;
}

export default function AppNavigator() {
  // const { isLoggedIn } = useSelector((state: RootState) => state.user);
  let isLoggedIn = true;
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <AppStack.Screen name="Main" component={MainNavigator} />
        ) : (
          <AppStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
