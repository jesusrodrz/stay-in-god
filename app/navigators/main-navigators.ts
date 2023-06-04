import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type MainTabParamList = {
  home: undefined;
  bible: undefined;
  community: undefined;
  devotionals: undefined;
  settings: undefined;
};
export const MainTab = createBottomTabNavigator<MainTabParamList>();

export type RootStackParamList = {
  welcome: undefined;
  main: undefined;
  profile: undefined;
  FillProfile: undefined;
};
export const RootStack = createNativeStackNavigator<RootStackParamList>();
