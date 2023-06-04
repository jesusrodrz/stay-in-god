import React from 'react';
import { Button, HStack, Heading, VStack } from 'native-base';
import { Avatar } from 'native-base';
import { Text } from 'react-native-svg';
import { useAuth0 } from 'react-native-auth0';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenContainer } from '../../components/containers/ScreensContainers';

export default function ProfileScreen() {
  const { clearCredentials } = useAuth0();
  return (
    <ScreenContainer padding={3}>
      <HStack space={2}>
        <Avatar />
        <VStack space={2}>
          <Heading>Name</Heading>
          <Text>name@email.com</Text>
        </VStack>
      </HStack>
      <Button onPress={clearCredentials}>
        Cerrar Sessión <Ionicons name="log-out-outline" />
      </Button>
    </ScreenContainer>
  );
}
