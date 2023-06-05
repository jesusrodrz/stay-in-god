import React from 'react';
import { Button, HStack, Heading, Text, VStack, useTheme } from 'native-base';
import { Avatar } from 'native-base';
import { useAuth0 } from 'react-native-auth0';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenContainer } from '../../components/containers/ScreensContainers';
import { useCurrentUser } from '@app/shared/hooks/user-hooks';
import {
  getFirstLetters,
  getUserFullName,
} from '@app/shared/utils/strings-helpers';
import { theme } from '@app/shared/theme/theme';
const Icon = () => (
  <Ionicons
    name="log-out-outline"
    color={theme.colors.primary[400]}
    size={20}
  />
);
export default function ProfileScreen() {
  const user = useCurrentUser();
  const { clearCredentials } = useAuth0();
  return (
    <ScreenContainer padding={3}>
      <HStack space={2}>
        <Avatar
          source={{
            uri: user.avatar?.url,
          }}
          size="lg"
        >
          {getFirstLetters(user)}
        </Avatar>
        <VStack>
          <Heading>{getUserFullName(user)}</Heading>
          <Text>{user.email}</Text>
        </VStack>
      </HStack>

      <Button
        onPress={clearCredentials}
        marginTop="auto"
        alignItems="center"
        variant="outline"
        endIcon={
          <Ionicons
            name="log-out-outline"
            color={theme.colors.primary[400]}
            size={20}
            style={{
              transform: [{ translateY: 1 }],
            }}
          />
        }
      >
        Cerrar Sessión
      </Button>
    </ScreenContainer>
  );
}
