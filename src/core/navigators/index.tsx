import React from 'react'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { AuthScreen } from '../../modules/auth/screens'
import { genRootNavigator, genStackNavigator, genTabNavigator } from './helpers'
import { Platform, Text, View } from 'react-native'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { ScreenLayout, TabScreenLayout } from './types'

export const screenDefaultOptions = (): NativeStackNavigationOptions => ({
  headerShadowVisible: false,
  headerTintColor: 'red',

  // this setup makes large title work on iOS
  ...Platform.select({
    ios: {
      headerShown: false,
      headerLargeTitle: true,
      headerTransparent: true,
      headerBlurEffect: undefined, // this sets up blurred nav bar
      // if you'd like to have a solid color for a nav bar, then you should
      // set up `headerStyle: {backgroundColor: Colors.bg2Color}`
    },
  }),
})

export const tabBarDefaultOptions = (
  routeName: string,
): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarActiveTintColor: 'red',
  tabBarInactiveTintColor: 'red',
  tabBarStyle: {
    backgroundColor: 'red',
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarIcon: ({ focused, color, size }) => (
    <View>
      <Text>
        `${focused} ${color} ${size} ${routeName}`
      </Text>
    </View>
    // <Icon name={getIconName(routeName, focused)} size={size} color={color} />
  ),
})

// const getIconName = (
//   routeName: string,
//   focused: boolean
// ): keyof typeof Ionicons.glyphMap => {
//   if (routeName === 'MainNavigator') {
//     return focused ? 'newspaper' : 'newspaper-outline'
//   }
//   if (routeName === 'ExampleNavigator') {
//     return focused ? 'construct' : 'construct-outline'
//   }
//   if (routeName === 'SettingsNavigator') {
//     return focused ? 'cog' : 'cog-outline'
//   }

//   return 'list'
// }

const screens: ScreenLayout = {
  Auth: {
    component: AuthScreen,
    name: 'Auth',
    options: () => ({
      title: 'Auth',
      ...screenDefaultOptions(),
    }),
  },
}

export const AuthStack = () => genStackNavigator([screens.Auth])

const tabs: TabScreenLayout = {
  Profile: {
    component: View, // should be a stack nav
    name: 'ProfileNavigator',
    options: () => ({
      title: 'Profile',
      ...tabBarDefaultOptions('ProfileNavigator'),
    }),
  },
  Feed: {
    component: View, // should be a stack nav
    name: 'FeedNavigator',
    options: () => ({
      title: 'Feed',
      ...tabBarDefaultOptions('FeedNavigator'),
    }),
  },
  Chat: {
    component: View, // should be a stack nav
    name: 'ChatNavigator',
    options: () => ({
      title: 'Chat',
      ...tabBarDefaultOptions('ChatNavigator'),
    }),
  },
}

export const TabNavigator = () =>
  genTabNavigator([tabs.Profile, tabs.Chat, tabs.Feed])

export const RootNavigator = () => genRootNavigator(TabNavigator, [])
