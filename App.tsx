import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack, RootNavigator } from './src/core/navigators'
import { StatusBar } from 'react-native'
import { AuthenticationProvider } from './src/providers/authentication'
import { Colors } from 'react-native-ui-lib'

Colors.loadColors({
  pmBrand: '#9333ea',
  pmGray: '#6b7280',
  pmRed: '#dc2626',
  pmBlue: '#2563eb',
  pmGreen: '#16a34a',
})

const AppNavigator = () => {
  // const { accessToken } = useAuthenticationContext()
  return (
    <NavigationContainer>
      {true ? <RootNavigator /> : <AuthStack />}
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
