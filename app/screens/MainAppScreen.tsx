import React from 'react';
import {
  Box,
  Button,
  Heading,
  IconButton,
  Image,
  Pressable,
  Spinner,
  Text,
  VStack,
  View,
  useTheme,
} from 'native-base';
// import Logo from '../shared/assets/img/main-logo.png';
import { MainTab } from '../navigators/main-navigators';
import { useAuth0 } from 'react-native-auth0';
import { ProfileButton } from '../components/buttons/Buttons';
import { StyleSheet } from 'react-native';

function HomeScreen() {
  console.log('HomeScreenProps');
  //   const { clearCredentials } = useAuth0();
  return (
    <View>
      <Heading>home</Heading>

      <Pressable
        onPress={() => {
          console.log('presable');
        }}
        android_ripple={{ color: 'black', borderless: true }}
      >
        <Box bg={'#ff4f4f'} p={12}>
          This is a Box with Linear Gradient
        </Box>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tabHeader: {
    height: 100,
  },
});
export default function MainAppScreen() {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerLeft: ProfileButton,
        headerStyle: styles.tabHeader,
        // headercon
      }}
    >
      <MainTab.Screen name="home" component={HomeScreen} />
    </MainTab.Navigator>
  );
}
