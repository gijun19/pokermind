import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack, RootNavigator } from './src/core/navigators'
import { StatusBar } from 'react-native'
import {
  AuthenticationProvider,
  useAuthenticationContext,
} from './src/providers/authentication'

const AppNavigator = () => {
  const { accessToken } = useAuthenticationContext()
  return (
    <NavigationContainer>
      {accessToken ? <RootNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <>
      <StatusBar />
      <AuthenticationProvider>
        <AppNavigator />
      </AuthenticationProvider>
    </>
  )
}
