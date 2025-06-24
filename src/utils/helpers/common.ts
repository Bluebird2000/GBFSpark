import {ReactNode} from 'react';
import {
  StyleProp,
  TextStyle,
  TextProps,
  ViewStyle,
} from 'react-native';

export type ViewPropStyle = StyleProp<ViewStyle>;

export type TextPropStyle = StyleProp<TextStyle>;

export type Nullable<T> = T | undefined | null;

export interface BodyTextProps extends TextProps {
  colour?: string;
  textStyle?: TextPropStyle;
  children: ReactNode;
}

