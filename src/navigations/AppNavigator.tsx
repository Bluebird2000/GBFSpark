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
  // const { isLoggedIn } = useSelector(reduxState => reduxState.user);

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Main" options={{ headerShown: false }}>
          {props => <LoggedInComponent {...props} />}
        </AppStack.Screen>
        {/* {isLoggedIn ? (
          <AppStack.Screen name="Main" options={{ headerShown: false }}>
            {props => <LoggedInComponent {...props} />}
          </AppStack.Screen>
        ) : (
          <AppStack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
        )} */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
