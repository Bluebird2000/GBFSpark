import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabNavigator';
import { headerOptions } from './config';
import useColorTheme from '@helpers/hooks/useColorTheme';

const MainStack = createNativeStackNavigator();

export default function MainNavigator() {
  const colourScheme = useColorTheme();

  const DEFAULT_HEADER_OPTIONS = headerOptions(colourScheme, { enabled: true });
  return (
    <MainStack.Navigator initialRouteName="MainTab">
      <MainStack.Screen
        name="MainTab"
        component={MainTabNavigator}
        options={{ ...DEFAULT_HEADER_OPTIONS, headerShown: false }}
      />
    </MainStack.Navigator>
  );
}
