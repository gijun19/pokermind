import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from 'react-native-ui-lib'
import { ScreenInfo, TabScreenInfo } from '../types'

export const genStackNavigator = (screens: ScreenInfo[]) => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      {screens.map(screen => {
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options()}
          />
        )
      })}
    </Stack.Navigator>
  )
}

export const genTabNavigator = (screens: TabScreenInfo[]) => {
  const Tab = createBottomTabNavigator()
  const tabScreens = screens.map(screen => {
    return (
      <Tab.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={screen.options()}
      />
    )
  })
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: Colors.white,
          borderRadius: 12,
          height: 70,
          ...styles.shadow,
        },
      }}>
      {tabScreens}
    </Tab.Navigator>
  )
}

export const genRootNavigator = (
  app: React.ComponentType<any>,
  modals: any[],
) => {
  const RootStack = createNativeStackNavigator()
  const appScreen = <RootStack.Screen name="App" component={app} />
  const modalScreens = modals.map(() => <View />)

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>{appScreen}</RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        {modalScreens}
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.grey10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 5,
  },
})
