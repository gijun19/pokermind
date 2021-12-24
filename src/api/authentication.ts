import { auth0Adapter } from '../core/adapters/auth0'

export async function loginWithWebAuth() {
  try {
    const response = await auth0Adapter.webAuth.authorize({
      scope: 'openid profile email',
      audience: 'http://localhost/',
    })
    console.log('loginWithWebAuth response', { response })
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

export async function logout() {
  const response = await auth0Adapter.webAuth.clearSession()
  console.log('logout response', { response })
  return response
}
