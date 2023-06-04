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

function InnerApp(): JSX.Element {
  const { user, clearCredentials, getCredentials, isLoading } = useAuth0();

  const isAuthenticated = Boolean(user);

  useEffect(() => {
    if (isAuthenticated) {
      apolloClient.setLink(createAuthApolloLink(getCredentials));
    }
  }, [isAuthenticated, getCredentials, clearCredentials]);

  if (isLoading) {
    return <SplashScreen />;
  }
  console.log('isAuthenticated: ', isAuthenticated);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <>
          <RootStack.Screen
            name="main"
            component={MainAppScreen}
            options={{
              animation: 'fade_from_bottom',
            }}
          />
          <RootStack.Screen
            name="main"
            component={MainAppScreen}
            options={{
              animation: 'fade_from_bottom',
            }}
          />
          <RootStack.Screen
            name="profile"
            component={ProfileScreen}
            options={{
              animation: 'slide_from_right',
            }}
          />
          <RootStack.Screen
            name="FillProfile"
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
