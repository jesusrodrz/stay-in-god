import React from 'react';
import { Image, Spinner, VStack } from 'native-base';
import Logo from '../shared/assets/img/main-logo.png';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  spinner: {
    transform: [{ scale: 2 }, { translateY: 100 }],
  },
});

export default function SplashScreen() {
  const size = 200;
  return (
    <VStack
      w="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Image
        height={size}
        width={size}
        source={Logo}
        alt="Permanecer en Dios Logo"
      />
      <Spinner size="lg" position="absolute" style={styles.spinner} />
    </VStack>
  );
}
