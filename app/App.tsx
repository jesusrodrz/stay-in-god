/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@env';
import React, { useEffect } from 'react';
import { Auth0Provider, useAuth0 } from 'react-native-auth0';
import { NativeBaseProvider } from 'native-base';
import { apolloClient, createAuthApolloLink } from './shared/graphql/client';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '@app/screens/SplashScreen';
import MainAppScreen from '@app/screens/MainAppScreen';
import { navigationTheme, theme } from '@app/shared/theme/theme';
import { Auth0User } from '@app/types/helpers-types';
import { UserDocument } from '@app/types/generated/graphql';

function App(): JSX.Element {
  const { getCredentials, isLoading, ...auth } = useAuth0();
  const user = auth.user as Auth0User;
  const isAuthenticated = Boolean(user);

  useEffect(() => {
    apolloClient.setLink(createAuthApolloLink(getCredentials));
  }, [getCredentials]);

  useEffect(() => {
    if (user) {
      apolloClient
        .query({
          query: UserDocument,
          variables: {
            id: user.sub,
          },
          fetchPolicy: 'network-only',
        })
        .then(() => {});
    }
  }, [user]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <MainAppScreen authenticated={isAuthenticated} />;
}

function AppWithProviders(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <Auth0Provider clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN}>
        <ApolloProvider client={apolloClient}>
          <NavigationContainer theme={navigationTheme}>
            <App />
          </NavigationContainer>
        </ApolloProvider>
      </Auth0Provider>
    </NativeBaseProvider>
  );
}

export default AppWithProviders;
