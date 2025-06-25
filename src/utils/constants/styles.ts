import { Platform, StyleProp, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '@constants/scale';
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
      color: colours.darkBase400,
    },
    description: {
      color: colours.darkBase200,
    },
    horizontalLineStyles: {
      marginTop: verticalScale(16),
    },
  });

export const buttonStyles = (
  width = 0,
  colourScheme = 'light',
): StyleSheet.NamedStyles<{ [key: string]: StyleProp<unknown> }> =>
  StyleSheet.create({
    container: {
      backgroundColor: colours.activeBlue400,
      width: horizontalScale(width) || '100%',
      height: verticalScale(48),
      borderRadius: 8,
      borderColor: 'transparent',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export const textInputStyles = (
  colourScheme = 'light',
): StyleSheet.NamedStyles<{ [key: string]: StyleProp<unknown> }> =>
  StyleSheet.create({
    textField: {
      backgroundColor: colours.neutral1000,
      paddingHorizontal: horizontalScale(13),
      borderRadius: 4,
    },
    rightIconContainer: {
      width: horizontalScale(48),
      height: verticalScale(48),
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      right: horizontalScale(0),
    },
    leftIconContainer: {
      width: horizontalScale(30),
      height: verticalScale(48),
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: horizontalScale(0),
      top: verticalScale(1),
      zIndex: 999,
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    labelHeading: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: verticalScale(4),
    },
  });

export const welcomeStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  innerContainer: {
    backgroundColor: colours.neutral100,
    borderRadius: verticalScale(24),
    marginHorizontal: horizontalScale(8),
    marginVertical: verticalScale(16),
    alignItems: 'center',
    paddingVertical: verticalScale(24),
  },
  topContainer: {
    flex: 1,
    marginTop: verticalScale(26),
    marginBottom: verticalScale(32),
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(26),
  },
});

export const passwordStyles = StyleSheet.create({
  showpassword: {
    width: horizontalScale(24),
    left: horizontalScale(290),
    top: verticalScale(-32),
  },
});

export const hintMessageStyles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export const authStyles = StyleSheet.create({
  hintMessage: {
    marginBottom: verticalScale(24),
  },
  hintContainer: {
    marginTop: verticalScale(24),
    justifyContent: 'center',
  },
  mb0: { marginBottom: 0 },
});

export const historyStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colours.neutral200,
    paddingHorizontal: 16,
    marginVertical: 4,
  },
  circleDot: {
    height: 8,
    width: 8,
    borderRadius: 5,
    marginRight: 18,
    backgroundColor: colours.activeBlue200,
  },
  content: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: colours.neutral200,
  },
  emptyContainer: {
    flex: 1,
    height: verticalScale(400),
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
  },
});
