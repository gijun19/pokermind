import React from 'react'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { AuthScreen } from '../../modules/auth/screens'
import { genRootNavigator, genStackNavigator, genTabNavigator } from './helpers'
import { Platform, StyleSheet } from 'react-native'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { ScreenLayout, TabScreenLayout } from './types'
import { View, Colors } from 'react-native-ui-lib'
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons'

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
  tabBarShowLabel: false,
  tabBarIcon: ({ focused }) => {
    return (
      <View style={styles.iconContainer}>
        <MCIIcon
          name={getIconName(routeName)}
          style={{ color: focused ? Colors.pmBrand : Colors.grey10 }}
          size={30}
        />
      </View>
    )
  },
})

const getIconName = (routeName: string) => {
  switch (routeName) {
    case 'ProfileNavigator': {
      return 'account-outline'
    }
    case 'FeedNavigator': {
      return 'timeline-outline'
    }
    case 'ChatNavigator': {
      return 'chat-outline'
    }
    case 'PokerSessionNavigator': {
      return 'cards-playing-outline'
    }
    default: {
      return ''
    }
  }
}

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
  PokerSession: {
    component: View, // should be a stack nav
    name: 'PokerSession',
    options: () => ({
      title: 'Poker Session',
      ...tabBarDefaultOptions('PokerSessionNavigator'),
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
  Profile: {
    component: View, // should be a stack nav
    name: 'ProfileNavigator',
    options: () => ({
      title: 'Profile',
      ...tabBarDefaultOptions('ProfileNavigator'),
    }),
  },
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: '50%',
    height: 30,
  },
})

export const TabNavigator = () =>
  genTabNavigator([tabs.PokerSession, tabs.Feed, tabs.Chat, tabs.Profile])

export const RootNavigator = () => genRootNavigator(TabNavigator, [])
