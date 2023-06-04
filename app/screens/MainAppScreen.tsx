import React from 'react';
import { ProfileButton } from '../components/buttons/Buttons';
import { StyleSheet } from 'react-native';
import { MainTab } from '@app/navigators/main-navigators';
import HomeScreen from '@app/modules/home/HomeScreen';

const styles = StyleSheet.create({
  tabHeader: {
    height: 100,
  },
});
export default function MainAppScreen() {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerLeft: ProfileButton,
        headerStyle: styles.tabHeader,
      }}
    >
      <MainTab.Screen name="home" component={HomeScreen} />
    </MainTab.Navigator>
  );
}
