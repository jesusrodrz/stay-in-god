React;
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IconButton } from 'native-base';
import React from 'react';
import { RootStackParamList } from '../../navigators/main-navigators';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function ProfileButton() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <IconButton
      size="lg"
      variant="ghost"
      _icon={{
        as: Ionicons,
        name: 'ios-person',
        color: 'blueGray.600',
      }}
      onPress={() => {
        navigation.navigate('profile');
      }}
    />
  );
}
