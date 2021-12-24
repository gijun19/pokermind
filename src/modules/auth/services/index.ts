import Auth0 from 'react-native-auth0'

export const auth0Service = new Auth0({
  domain: 'pokermind-local.us.auth0.com',
  clientId: 'wONWFkLFUipVDErBZjPSiWqqPj6oKfuf',
})

export const authenticateUser = async () => {
  try {
    const response = await auth0Service.webAuth.authorize({
      scope: 'openid profile email',
      audience: 'http://localhost/',
    })
    return {
      isOk: true,
      result: response,
    }
  } catch (error) {
    console.error(error)
    return {
      isOk: false,
      error,
    }
  }
}
