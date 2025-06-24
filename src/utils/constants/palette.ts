import colours from '@constants/colours';

import { horizontalScale } from '@constants/scale';

const fontStyle = (colour = colours.neutral900) => ({
  regular: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    color: colour,
  },
  medium: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    color: colour,
  },
  semiBold: {
    fontFamily: 'Poppins-Semibold',
    fontStyle: 'normal',
    color: colour,
  },
  bold: {
    fontFamily: 'Poppins-Bold',
    fontStyle: 'normal',
    color: colour,
  },
  extraBold: {
    fontFamily: 'Poppins-ExtraBold',
    fontStyle: 'normal',
    color: colour,
  },
});

export const font = (colour = colours.neutral900) => ({
  h1: {
    ...fontStyle(colour).extraBold,
    fontSize: horizontalScale(40),
    lineHeight: horizontalScale(108),
  },
  h2: {
    ...fontStyle(colour).bold,
    fontSize: horizontalScale(32),
    lineHeight: horizontalScale(84),
  },
  h3: {
    ...fontStyle(colour).bold,
    fontSize: horizontalScale(24),
    lineHeight: horizontalScale(60),
  },
  h4: {
    ...fontStyle(colour).bold,
    fontSize: horizontalScale(24),
    lineHeight: horizontalScale(48),
  },
  h5: {
    ...fontStyle(colour).bold,
    fontSize: horizontalScale(20),
    lineHeight: horizontalScale(36),
  },
  subTitle: {
    ...fontStyle(colour).regular,
    fontSize: horizontalScale(20),
    lineHeight: horizontalScale(24),
  },
  bodyLarge: {
    ...fontStyle(colour).regular,
    fontSize: horizontalScale(16),
    lineHeight: horizontalScale(19),
  },
  bodyMedium: {
    ...fontStyle(colour).regular,
    fontSize: horizontalScale(14),
    lineHeight: horizontalScale(20),
  },
  bodySmall: {
    ...fontStyle(colour).regular,
    fontSize: horizontalScale(12),
    lineHeight: horizontalScale(16),
  },
});
