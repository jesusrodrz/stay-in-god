React;
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IconButton } from 'native-base';
import React from 'react';
import { RootStackParamList } from '../../navigators/main-navigators';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function ProfileButton() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  navigation;
  return (
    <IconButton
      //   size={size}
      size="lg"
      variant="ghost"
      _icon={{
        as: MaterialIcons,
        name: 'person',
        color: 'blueGray.600',
      }}
      onPress={() => {
        navigation.navigate('profile');
      }}
    />
  );
}
