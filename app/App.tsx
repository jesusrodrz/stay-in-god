/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, GRAPHQL_ENDPOINT } from '@env';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, useColorScheme, View } from 'react-native';

import { Auth0Provider, useAuth0 } from 'react-native-auth0';
import { theme } from './shared/theme/theme';
import { Button, NativeBaseProvider } from 'native-base';
import { apolloClient, createAuthApolloLink } from './shared/graphql/client';
import { ApolloProvider, gql, useQuery } from '@apollo/client';

function InnerApp(): JSX.Element {
  const { authorize, user, clearCredentials, getCredentials } = useAuth0();

  useEffect(() => {
    if (user) {
      apolloClient.setLink(createAuthApolloLink(getCredentials));
    }
  }, [user, getCredentials]);
  const { data, refetch } = useQuery(
    gql`
      query {
        users {
          id
          email
          last_login
        }
      }
    `,
    {
      skip: !user,
      onError: e => {
        console.log(e);
      },
    },
  );

  console.log(data);

  return (
    <View style={styles.sectionContainer}>
      <Button
        onPress={() => {
          if (user) {
            clearCredentials();
            return;
          }
          authorize(
            {
              prompt: 'login',
              scope: 'openid profile email offline_access',
              audience: GRAPHQL_ENDPOINT,
            },
            { ephemeralSession: true },
          );
        }}
      >
        {user ? 'log out' : 'log in'}
      </Button>
      <Button
        onPress={() => {
          refetch();
        }}
      >
        refetch
      </Button>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <Auth0Provider clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN}>
          <ApolloProvider client={apolloClient}>
            <InnerApp />
          </ApolloProvider>
        </Auth0Provider>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
