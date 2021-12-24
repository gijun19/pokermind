import React from 'react'
import { View, Text, Button } from 'react-native-ui-lib'
import { useAuthenticationContext } from '../../../providers/authentication'

export const AuthScreen = () => {
  const { performWebAuth } = useAuthenticationContext()

  const handleLogin = () => {
    performWebAuth()
  }
  return (
    <View flex useSafeArea>
      <View padding-s4>
        <Text text40L marginB-s4>
          Auth
        </Text>

        <Text text50L marginB-s4>
          Sign in with our identity provider
        </Text>
        {/* <Card center padding-card marginB-s4 enableShadow={false}>
          <Text body>This is an example card </Text>
        </Card> */}

        <Button
          label="Login With Auth0"
          borderRadius={0}
          onPress={handleLogin}
        />
      </View>
    </View>
  )
}
