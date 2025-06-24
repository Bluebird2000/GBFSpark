import React, { useMemo, useRef } from 'react';
import { View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { horizontalScale, verticalScale } from '@constants/scale';
import BodyMedium from '@components/atoms/text/bodyMedium';
import ParentView from '@components/templates/ParentView';
import colours from '@constants/colours';
import GBFSButton from '@components/molecules/GBFSButton';
import { welcomeStyles } from '@constants/styles';
import images from '@assets/images/images';

type WelcomeProps = {
  onPressPrimaryButton: () => void;
};

export default function Welcome({
  onPressPrimaryButton,
}: WelcomeProps): React.JSX.Element {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ParentView
      noPadding
      backgroundColour={colours.neutral400}
      statusBarStyle="light-content"
      containerStyle={{ paddingTop: safeAreaInsets.top }}
    >
      <View style={welcomeStyles.container}>
        <View style={welcomeStyles.innerContainer}>
          <View style={welcomeStyles.topContainer}>
            <Image
              source={images.umobIcon}
              style={{
                width: horizontalScale(122),
                height: verticalScale(100),
                resizeMode: 'contain',
              }}
            />
            <BodyMedium colour={colours.darkBase300}>Sign up to join</BodyMedium>
          </View>
          <View style={welcomeStyles.buttonsContainer}>
            <GBFSButton
              text="Sign up with Email"
              onPress={onPressPrimaryButton}
            />
          </View>
        </View>
      </View>
    </ParentView>
  );
}
