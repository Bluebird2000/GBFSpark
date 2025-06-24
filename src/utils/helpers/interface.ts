import {ViewPropStyle} from './common';

export interface ParentScrollViewProps {
  children: React.ReactNode;
  title?: string;
  titleStyle?: ViewPropStyle;
  description?: string;
  descriptionStyle?: ViewPropStyle;
  backgroundColour?: string;
  showsVerticalScrollIndicator?: boolean;
  noPadding?: boolean;
  containerStyle?: ViewPropStyle;
  onScroll?: () => void;
  enableAutomaticScroll?: boolean;
  onTouchParentView?: () => void;
  statusBarStyle?: 'light-content' | 'dark-content';
  screenTitleProps?: Record<string, unknown>;
}

export interface ParentViewProps {
  children: React.ReactNode;
  title?: string;
  titleStyle?: ViewPropStyle;
  description?: string;
  descriptionStyle?: ViewPropStyle;
  backgroundColour?: string;
  noPadding?: boolean;
  containerStyle?: ViewPropStyle;
  panResponderRef?: object;
  horizontalLine?: boolean;
  statusBarStyle?: 'light-content' | 'dark-content';
  screenTitleProps?: Record<string, unknown>;
}

export interface ScreenTitleProps {
  title?: string;
  description?: string;
  titleStyle?: ViewPropStyle;
  descriptionStyle?: ViewPropStyle;
  containerStyle?: ViewPropStyle;
  horizontalLine?: boolean;
  showBackButton?: boolean;
}

export interface GBFSInputProps {
  placeholder?: string;
  label?: string;
  rightComponentHeading?: string;
  containerStyle?: object;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  inputTextStyle?: object;
  children?: React.ReactNode;
  [key: string]: unknown;
}