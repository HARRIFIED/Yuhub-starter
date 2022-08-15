import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export * from './consts';
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export function RF(size: number, scale: number = 2) {
  return RFValue(size + scale, SCREEN_HEIGHT);
}

export function HDP(size: number) {
  return PixelRatio.roundToNearestPixel(size);
}

export function WP(size: number) {
  return widthPercentageToDP(size);
}

export function HP(size: number) {
  return heightPercentageToDP(size);
}
