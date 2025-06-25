// jest.setup.ts
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
