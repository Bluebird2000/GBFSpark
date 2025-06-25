import {useEffect} from 'react';
import {BackHandler} from 'react-native';

/**
 * Custom hook to handle Android hardware back button press.
 *
 * @param onBackButtonPress - Callback that returns true to prevent default behavior, or false to let default behavior occur.
 */
export default function useBackButton(onBackButtonPress: () => boolean): void {
  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackButtonPress,
    );

    return () => {
      subscription.remove();
    };
  }, [onBackButtonPress]);
}
