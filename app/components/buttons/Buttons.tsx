React;
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IconButton } from 'native-base';
import React from 'react';
import { RootStackParamList } from '../../navigators/main-navigators';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VectorIconsButton } from '@app/components/icons/VectorIcons';
import { useAuth0 } from 'react-native-auth0';

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

export function LogoutLeftArrowButton() {
  const { clearCredentials } = useAuth0();
  return (
    <VectorIconsButton
      onPress={clearCredentials}
      name="arrowleft"
      type="AntDesign"
      color="white"
      size="lg"
      variant="ghost"
    />
  );
}
