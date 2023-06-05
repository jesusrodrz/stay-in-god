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
import ProfileScreen from '@app/modules/profile/ProfileScreen';
import SplashScreen from '@app/screens/SplashScreen';
import { RootStack } from '@app/navigators/main-navigators';
import MainAppScreen from '@app/screens/MainAppScreen';
import WelcomeScreen from '@app/screens/WelcomeScreen';
import { navigationTheme, theme } from '@app/shared/theme/theme';
import FillProfileScreen from '@app/modules/onboarding/FillProfileScreen';
import OnboardingLoadingScreen from '@app/modules/onboarding/OnboardinLoadingScreen';
import { Auth0User } from '@app/types/helpers-types';
import { UserDocument } from '@app/types/generated/graphql';

function InnerApp(): JSX.Element {
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
        .then(data => {
          console.log(data);
        });
    }
  }, [user]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}
    >
      {isAuthenticated ? (
        <>
          <RootStack.Screen
            name="OnboardingLoading"
            component={OnboardingLoadingScreen}
            options={{
              animation: 'none',
            }}
          />
          <RootStack.Screen name="main" component={MainAppScreen} />
          <RootStack.Screen name="FillProfile" component={FillProfileScreen} />
          <RootStack.Screen
            name="profile"
            component={ProfileScreen}
            options={{
              animation: 'slide_from_right',
            }}
          />
        </>
      ) : (
        <RootStack.Screen name="welcome" component={WelcomeScreen} />
      )}
    </RootStack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <Auth0Provider clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN}>
        <ApolloProvider client={apolloClient}>
          <NavigationContainer theme={navigationTheme}>
            <InnerApp />
          </NavigationContainer>
        </ApolloProvider>
      </Auth0Provider>
    </NativeBaseProvider>
  );
}

export default App;
