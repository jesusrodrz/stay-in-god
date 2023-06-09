import React from 'react';
import {
  LogoutLeftArrowButton,
  ProfileButton,
} from '../components/buttons/Buttons';
import { StyleSheet } from 'react-native';
import { MainTab, RootStack } from '@app/navigators/main-navigators';
import HomeScreen from '@app/modules/home/HomeScreen';
import OnboardingLoadingScreen from '@app/modules/onboarding/OnboardinLoadingScreen';
import FillProfileScreen from '@app/modules/onboarding/FillProfileScreen';
import ProfileScreen from '@app/modules/profile/ProfileScreen';
import WelcomeScreen from '@app/screens/WelcomeScreen';
import { theme } from '@app/shared/theme/theme';

const styles = StyleSheet.create({
  tabHeader: {
    height: 100,
  },
  header: {
    backgroundColor: theme.colors.primary['400'],
    height: 500,
    borderBottomColor: '#f4f',
    shadowOpacity: 0,
  },
  headerTitle: {
    color: theme.colors.white,
  },
});
export default function MainAppScreen({
  authenticated,
}: {
  authenticated: boolean;
}) {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        // statusBarStyle:
      }}
    >
      {authenticated ? (
        <>
          <RootStack.Screen
            name="OnboardingLoading"
            component={OnboardingLoadingScreen}
            options={{
              animation: 'none',
            }}
          />
          <RootStack.Screen name="main">
            {() => (
              <MainTab.Navigator
                screenOptions={{
                  headerLeft: ProfileButton,
                  headerStyle: styles.tabHeader,
                }}
              >
                <MainTab.Screen name="home" component={HomeScreen} />
              </MainTab.Navigator>
            )}
          </RootStack.Screen>
          <RootStack.Screen
            name="FillProfile"
            component={FillProfileScreen}
            options={{
              headerShown: true,
              headerTitle: 'Completar Perfil',
              headerLeft: LogoutLeftArrowButton,

              headerShadowVisible: false,
              contentStyle: {
                backgroundColor: theme.colors.primary['400'],
              },
            }}
          />
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
