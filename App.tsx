import React, {useCallback, useEffect} from 'react';
import {Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {store, persistor} from '@config/reduxStore';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from 'src/navigations/AppNavigator';
import useColorTheme from '@helpers/hooks/useColorTheme';

export default function App() {
  const colourScheme = useColorTheme();

  const AppContent = useCallback(
    () => (
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <SafeAreaProvider>
              <AppNavigator />
            </SafeAreaProvider>
        </PersistGate>
      </ReduxProvider>
    ),
    [],
  );

  return Platform.OS === 'ios' ? (
    <AppContent />
  ) : (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppContent />
    </GestureHandlerRootView>
  );
}
