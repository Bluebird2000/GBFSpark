import React, {useCallback, useMemo, JSX} from 'react';
import {StatusBar, Pressable, Keyboard} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useColorTheme from '@helpers/hooks/useColorTheme';
import {ViewPropStyle} from '@helpers/common';
import If from '@components/atoms/If';
import { container } from '@constants/styles';
import { ParentScrollViewProps } from '@helpers/interface';
import ScreenTitle from '@components/molecules/ScreenTitle';

export default function ParentScrollView({
  children,
  title = '',
  titleStyle = null,
  description = '',
  descriptionStyle = null,
  backgroundColour = '',
  showsVerticalScrollIndicator = false,
  noPadding = false,
  containerStyle = {},
  onScroll = () => {},
  enableAutomaticScroll = true,
  onTouchParentView = () => {},
  statusBarStyle,
  screenTitleProps = {},
}: ParentScrollViewProps): JSX.Element {
  const {top, bottom} = useSafeAreaInsets();
  const colourScheme = useColorTheme() as 'light' | 'dark';

  const containerStyles = container(backgroundColour, colourScheme);

  const parentStyleWithInsets = useMemo<ViewPropStyle>(
    () => ({
      ...(noPadding
        ? containerStyles.parent
        : containerStyles.parentWithPadding),
      paddingBottom: bottom,
      marginTop: top,
    }),
    [top, bottom, containerStyles, noPadding],
  );

  const defaultStatusBarStyle = useMemo<'light-content' | 'dark-content'>(
    () => (colourScheme === 'dark' ? 'light-content' : 'dark-content'),
    [colourScheme],
  );

  const onPressParentScrollView = useCallback(() => {
    Keyboard.dismiss();
    onTouchParentView?.();
  }, [onTouchParentView]);

  const onStartShouldSetResponder = useCallback(() => true, []);

  return (
    <>
      <StatusBar
        backgroundColor={
          backgroundColour || containerStyles.parent.backgroundColor
        }
        barStyle={statusBarStyle || defaultStatusBarStyle}
        translucent={!backgroundColour}
      />
      <KeyboardAwareScrollView
        style={parentStyleWithInsets}
        contentContainerStyle={containerStyle}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        onScroll={onScroll}
        scrollEventThrottle={15}
        enableAutomaticScroll={enableAutomaticScroll}
        onStartShouldSetResponder={onStartShouldSetResponder}>
        <Pressable
          onPress={onPressParentScrollView}
          style={containerStyles.parent}
          accessible={false}>
          <If condition={title}>
            <ScreenTitle
              title={title}
              titleStyle={titleStyle || {}}
              description={description}
              descriptionStyle={descriptionStyle || {}}
              containerStyle={containerStyle}
              showBackButton={true}
              {...screenTitleProps}
            />
          </If>
          {children}
        </Pressable>
      </KeyboardAwareScrollView>
    </>
  );
}
