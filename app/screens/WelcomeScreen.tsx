import React, { useState } from 'react';
import { Button, Image, VStack, Text, Heading, useTheme } from 'native-base';
import Logo from '../shared/assets/img/main-logo.png';
import { useAuth0 } from 'react-native-auth0';
import { getOSProperty } from '../shared/utils/platform-utils';
import { GRAPHQL_ENDPOINT } from '@env';
import { ScaleLoop } from '../components/animations/ScaleLoop';
import { ScreenContainer } from '@app/components/containers/ScreensContainers';

export default function WelcomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const { authorize } = useAuth0();
  const { colors } = useTheme();
  const containerSize = 200;
  const logoSize = 250;

  const login = async () => {
    setIsLoading(true);
    await authorize(
      {
        audience: GRAPHQL_ENDPOINT,
        prompt: 'login',
        scope: 'openid profile email offline_access',
      },
      { ephemeralSession: true },
    );

    setIsLoading(false);
  };
  return (
    <ScreenContainer
      position="relative"
      paddingBottom={getOSProperty('android', 10)}
      alignItems="center"
      background="white"
    >
      <VStack height={containerSize} marginBottom="auto" />
      <ScaleLoop animate={isLoading}>
        <Image source={Logo} alt="asd" height={logoSize} width={logoSize} />
      </ScaleLoop>
      <VStack
        alignItems="center"
        space={3}
        height={containerSize}
        marginTop="auto"
        opacity={isLoading ? 0 : 1}
      >
        <Heading color={colors.primary[400]}>
          Bienvenido a Permancer en Dios
        </Heading>
        <Text textAlign={'center'}>
          Acercate más a Dios haciendo to devocional y lectura biblica diaria
        </Text>
        <Text italic> ¡Te ayudaremos en el proceso!</Text>
        <Button size={'lg'} onPress={login}>
          Iniciar
        </Button>
      </VStack>
    </ScreenContainer>
  );
}
