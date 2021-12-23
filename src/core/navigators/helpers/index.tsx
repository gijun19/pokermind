import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
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
  return <Tab.Navigator>{tabScreens}</Tab.Navigator>
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
