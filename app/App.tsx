/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@env';
import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme, View } from 'react-native';

import { Auth0Provider, useAuth0 } from 'react-native-auth0';
import { theme } from './theme/theme';
import { Button, NativeBaseProvider } from 'native-base';

function InnerApp(): JSX.Element {
  const { authorize, user, clearCredentials } = useAuth0();
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Button
        onPress={() => {
          if (user) {
            clearCredentials();
            return;
          }
          authorize({ prompt: 'login' }, { ephemeralSession: true });
        }}
      >
        {user ? 'log ou' : 'log in'}
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
          <InnerApp />
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
