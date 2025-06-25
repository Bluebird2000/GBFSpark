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
export interface SignUpProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isLoading: boolean;
  isSignupDisabled: boolean;
  onChangeFirstName: (text: string) => void;
  onChangeLastName: (text: string) => void;
  onChangeEmail: (text: string) => void;
  onChangePassword: (text: string) => void;
  onSignUp: () => void;
  onPressHintMessage: () => void;
}

export interface LoginProps {
  state: any,
  email: string;
  onChangeEmail: (email: string) => void;
  isLoading: boolean;
  password: string;
  onChangePassword: (password: string) => void;
  onLogin: () => void;
  isLoginDisabled: boolean;
  onPressHintMessage: () => void;
}
// types.ts
export interface StationStatus {
  station_id: string;
  num_bikes_available: number;
  num_docks_available: number;
  lat: number;
  lon: number;
}

export interface StationInfo {
  station_id: string;
  name: string;
  lat: number;
  lon: number;
}

export interface Station extends StationStatus, Pick<StationInfo, 'name'> {}

export interface Question {
  question: string;
  options: string[];
  answer: string;
}
