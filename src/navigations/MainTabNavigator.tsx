import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '@components/screens/Dashboard/DashboardContainer';
import GameResult from '@components/screens/Result/ResultContainer';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component= {Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Result"
        component={GameResult}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="History"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
