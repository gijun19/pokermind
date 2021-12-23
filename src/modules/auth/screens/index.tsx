import React from 'react'
import { View, Text, Card, Button } from 'react-native-ui-lib'
import Auth0 from 'react-native-auth0'

const auth0 = new Auth0({
  domain: 'pokermind-local.us.auth0.com',
  clientId: 'wONWFkLFUipVDErBZjPSiWqqPj6oKfuf',
})
export const AuthScreen = () => {
  const auth = async () => {
    try {
      const response = await auth0.webAuth.authorize({
        scope: 'openid profile email',
      })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View flex useSafeArea>
      <View padding-s4>
        <Text text40L marginB-s4>
          Auth
        </Text>
        <Card center padding-card marginB-s4 enableShadow={false}>
          <Text body>This is an example card </Text>
        </Card>

        <Button label="Button" borderRadius={0} onPress={auth} />
      </View>
    </View>
  )
}
