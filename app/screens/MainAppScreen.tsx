/* eslint-disable react/no-unstable-nested-components */
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
import { AntDesign } from '@app/components/icons/VectorIcons';

const styles = StyleSheet.create({
  tabHeader: {
    height: 100,
  },
  header: {
    backgroundColor: theme.colors.primary['400'],
    // height: 500,
    borderBottomColor: '#f4f',
    shadowOpacity: 0,
  },
  headerTitle: {
    color: theme.colors.white,
  },
  tabHeaders: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 24,
    // height: 150,
  },
  tabBar: {
    height: 100,
    borderTopWidth: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    color: '#fff',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 24,
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
        // statusBarStyle:co
        contentStyle: {
          backgroundColor: '#fff',
        },
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
                  headerStyle: styles.tabHeaders,
                  // headerTitleStyle: styles.headerTitle,
                  tabBarStyle: styles.tabBar,
                  tabBarLabelStyle: {
                    fontSize: 14,
                  },
                }}
              >
                <MainTab.Screen
                  name="home"
                  component={HomeScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="home" color={color} size={size} />
                    ),
                    // headerTitle: ,
                    title: 'Inicio',
                  }}
                />
                <MainTab.Screen
                  name="bible"
                  component={HomeScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="book" color={color} size={size} />
                    ),
                    title: 'Biblia',
                  }}
                />
                <MainTab.Screen
                  name="community"
                  component={HomeScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign
                        name="addusergroup"
                        color={color}
                        size={size}
                      />
                    ),
                    title: 'Comunidad',
                  }}
                />
                <MainTab.Screen
                  name="devotionals"
                  component={HomeScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign
                        name="checksquareo"
                        color={color}
                        size={size}
                      />
                    ),
                    title: 'Devocionales',

                    // tabBa÷
                  }}
                />
                {/* <MainTab.Screen
                  name="settings"
                  component={HomeScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name="home" color={color} size={size} />
                    ),
                  }}
                /> */}
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
