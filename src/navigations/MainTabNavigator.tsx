import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Dashboard from 'screens/Dashboard';
// import Account from 'screens/Account';
// import MainTabBarIcons from './MainTabBarIcons';
import colours from '@constants/colours';
import useColorTheme from '@helpers/hooks/useColorTheme';
import { headerOptions } from './config';
import { font } from '@constants/palette';
import AuthNavigator from './AuthNavigator';
import Dashboard from '@components/screens/Dashboard/DashboardContainer';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const colourScheme = useColorTheme();
  const DEFAULT_HEADER_OPTIONS = headerOptions(colourScheme);

  const centerHeaderOptions = useCallback(
    (title: string) => ({
      ...DEFAULT_HEADER_OPTIONS,
      title: title,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        ...font(
          colourScheme === 'dark' ? colours.neutral100 : colours.neutral900,
        ).h5,
      },
    }),
    [DEFAULT_HEADER_OPTIONS, colourScheme],
  );

  const HOME_HEADER_OPTIONS = centerHeaderOptions('Home');
  const ACCOUNT_HEADER_OPTIONS = centerHeaderOptions('Accounts & Settings');

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component= {Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Wallet"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
