import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get dimensions of device

// Guideline dimensions are based on the dimensions for iPhone X
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 768;

type ScaledSize = number & { readonly __brand: unique symbol };

/**
 * Scales a given size proportionally based on the device's screen width.
 * 
 * @param size - The original size to scale
 * @returns The scaled size based on screen width
 */
function horizontalScale(size: number): ScaledSize {
  return ((width / guidelineBaseWidth) * size) as ScaledSize;
}

/**
 * Scales a given size proportionally based on the device's screen height.
 * 
 * @param size - The original size to scale
 * @returns The scaled size based on screen height
 */
function verticalScale(size: number): ScaledSize {
  return ((height / guidelineBaseHeight) * size) as ScaledSize;
}

export { horizontalScale, verticalScale };
