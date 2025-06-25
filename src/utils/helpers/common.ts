import { ReactNode } from 'react';
import {
  StyleProp,
  TextStyle,
  TextProps,
  ViewStyle,
  TextInput,
} from 'react-native';

// Use in cases where you want to send an object but it must be generic, not of a specific type, like '{ [key: string]: any }'
export type GenericObject = { [key: string]: unknown }; // Record<string, unknown>;

export type ViewPropStyle = StyleProp<ViewStyle>;

export type TextPropStyle = StyleProp<TextStyle>;

export type Nullable<T> = T | undefined | null;

export interface BodyTextProps extends TextProps {
  colour?: string;
  textStyle?: TextPropStyle;
  children: ReactNode;
}

export type InputFieldProps = {
  borderColor?: string;
  textInputStyle?: TextStyle;
  value?: string;
  isFocused?: boolean;
  forwardRef?: React.Ref<TextInput>;
  onPress?: () => void;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  isError?: boolean;
  leftContainerStyle?: ViewStyle;
  width?: number;
  height?: number;
} & GenericObject;
