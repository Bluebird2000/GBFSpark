import React, { JSX } from 'react';
import { View } from 'react-native';
import If from '@components/atoms/If';
import H1 from '@components/atoms/text/h1';
import { horizontalScale } from '@constants/scale';
import useColorTheme from '@helpers/hooks/useColorTheme';
import { screenTitleStyles } from '@constants/styles';
import { ScreenTitleProps } from '@helpers/interface';
import H6 from '@components/atoms/text/h6';

export default function ScreenTitle({
  title = 'Title',
  description = 'Description',
  containerStyle = {},
  horizontalLine = false,
}: ScreenTitleProps): JSX.Element {
  const colourScheme = useColorTheme();
  const styles = screenTitleStyles(colourScheme);

  const paddingHorizontalStyle = {
    paddingHorizontal: horizontalLine ? horizontalScale(24) : 0,
  };

  return (
    <View style={containerStyle}>
      <If condition={title}>
        <H1
          textStyle={{
            ...styles.title,
            ...paddingHorizontalStyle,
          }}
        >
          {title}
        </H1>
      </If>
      <If condition={description}>
        <H6
          textStyle={{
            ...styles.description,
            ...paddingHorizontalStyle,
          }}
        >
          {description}
        </H6>
      </If>
    </View>
  );
}
