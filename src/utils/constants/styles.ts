import {
  Dimensions,
  Platform,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { horizontalScale, verticalScale } from '@constants/scale';
import { font } from './palette';
import colours from './colours';

export const container = (
  backgroundColor: string = '',
  colourScheme: 'light' | 'dark' = 'light',
): StyleSheet.NamedStyles<{ [key: string]: StyleProp<unknown> }> => ({
  parent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:
      backgroundColor ||
      (colourScheme === 'dark' ? colours.darkBase400 : colours.neutral100),
  },
  parentWithPadding: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:
      backgroundColor ||
      (colourScheme === 'dark' ? colours.darkBase400 : colours.neutral100),
    paddingHorizontal: horizontalScale(14),
  },
});

export const screenTitleStyles = (
  colourScheme = 'light',
): StyleSheet.NamedStyles<{ [key: string]: StyleProp<unknown> }> =>
  StyleSheet.create({
    title: {
      textTransform: 'none',
      marginBottom: verticalScale(4),
      color:
        colourScheme === 'dark' ? colours.activeBlue400 : colours.darkBase400,
    },
    description: {
      color:
        colourScheme === 'dark' ? colours.activeBlue400 : colours.darkBase200,
    },
    horizontalLineStyles: {
      marginTop: verticalScale(16),
    },
  });
