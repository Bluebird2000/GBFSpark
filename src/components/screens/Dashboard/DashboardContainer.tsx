import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BodyMedium from '@components/atoms/text/bodyMedium';
import ParentScrollView from '@components/templates/ParentScrollView';

const Dashboard = () => {
  return (
    <ParentScrollView>
      <Text>Screens</Text>
      <BodyMedium>Welcome to Umob</BodyMedium>
    </ParentScrollView>
  );
};

export default Dashboard;
