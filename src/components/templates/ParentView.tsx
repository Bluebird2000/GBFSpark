import React, {useMemo} from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ParentViewProps} from '@helpers/interface';
import useColorTheme from '@helpers/hooks/useColorTheme';
import {ViewPropStyle} from '@helpers/common';
import If from '@components/atoms/If';
import ScreenTitle from '@components/molecules/ScreenTitle';
import { container } from '@constants/styles';

export default function ParentView({
  children,
  title = '',
  titleStyle = {},
  description = '',
  descriptionStyle = {},
  backgroundColour = '',
  noPadding = false,
  containerStyle = {},
  panResponderRef,
  statusBarStyle,
  screenTitleProps = {},
}: ParentViewProps): React.JSX.Element {
  const {top, bottom} = useSafeAreaInsets();
  const colourScheme = useColorTheme() as 'light' | 'dark';

  const containerStyles = container(backgroundColour, colourScheme);

  const parentStyleWithInsets = useMemo<ViewPropStyle>(
    () => ({
      ...(noPadding
        ? containerStyles.parent
        : containerStyles.parentWithPadding),
      paddingBottom: bottom,
    }),
    [top, bottom, containerStyles, noPadding],
  );

  const defaultStatusBarStyle = useMemo<'light-content' | 'dark-content'>(
    () => (colourScheme === 'dark' ? 'light-content' : 'dark-content'),
    [colourScheme],
  );

  return (
    <>
      <StatusBar
        backgroundColor={
          backgroundColour || containerStyles.parent.backgroundColor
        }
        barStyle={statusBarStyle || defaultStatusBarStyle}
        translucent={!backgroundColour}
      />
      <View
        accessible={false}
        style={[parentStyleWithInsets, containerStyle]}
        {...panResponderRef}>
        <If condition={title}>
          <ScreenTitle
            title={title}
            titleStyle={titleStyle || {}}
            description={description}
            descriptionStyle={descriptionStyle || {}}
            {...screenTitleProps}
          />
        </If>
        {children}
      </View>
    </>
  );
}
