import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack, RootNavigator } from './src/core/navigators'
import { StatusBar } from 'react-native'

export default function App() {
  const [isAuthenticated] = useState(false)
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        {isAuthenticated ? <RootNavigator /> : <AuthStack />}
      </NavigationContainer>
    </>
  )
}
