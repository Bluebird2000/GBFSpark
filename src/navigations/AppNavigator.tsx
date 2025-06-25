import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { useAppSelector } from "../utils/config/reduxStore";

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  // The selector will immediately reflect the value once redux‑persist
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <AppStack.Screen name="Main" component={MainNavigator} />
        ) : (
          <AppStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}