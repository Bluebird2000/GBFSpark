jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native').View;
  return {
    // Export components as View to avoid native dependency issues
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    PanGestureHandler: View,
    TapGestureHandler: View,
    LongPressGestureHandler: View,
    NativeViewGestureHandler: View,
    GestureHandlerRootView: View,
    Directions: {},
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
  };
});

jest.mock('react-native-safe-area-context', () => {
  const SafeAreaContext = jest.requireActual('react-native-safe-area-context');
  return {
    ...SafeAreaContext,
    useSafeAreaInsets: () => ({
      top: 0, bottom: 0, left: 0, right: 0,
    }),
  };
});


jest.mock('react-native-encrypted-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
}));


jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  // silences the “callImmediately” warning and stops a live timer
  Reanimated.default.callImmediately = (cb: (...args: unknown[]) => void) => cb();
  return Reanimated;
});

jest.useFakeTimers({ legacyFakeTimers: false });
