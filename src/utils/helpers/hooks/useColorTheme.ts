import {useColorScheme} from 'react-native';

type Theme = 'light' | 'dark' | 'default';

/**
 * - If the app theme is set to 'default', it falls back to the device's color scheme.
 * - Otherwise, it uses the app-specific theme.
 *
 * @returns {Theme} The active theme: 'light', 'dark', or 'default'.
 */
export default function useColorTheme(): Theme {
  // TODO: Replace placeholder with Redux store value once state management is integrated.
  const appTheme: Theme = 'default';

  const colorScheme = useColorScheme() || 'light';

  return appTheme === 'default' ? (colorScheme as Theme) : appTheme;
}
