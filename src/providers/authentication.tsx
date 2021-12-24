import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { loginWithWebAuth, logout } from '../api/authentication'

interface AuthenticationContextDetail {
  accessToken: string
  error?: any
  performWebAuth: () => void
  logoutUser: () => void
  loading: boolean
}

export const AuthenticationContext = createContext<AuthenticationContextDetail>(
  {} as AuthenticationContextDetail,
)

export function useAuthenticationContext() {
  return useContext(AuthenticationContext)
}

export function AuthenticationProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState('')
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)

  const performWebAuth = useCallback(async () => {
    setLoading(true)
    const response = await loginWithWebAuth()
    if (response.isOk && response.result) {
      setAccessToken(response.result.accessToken)
      setLoading(false)
    }
  }, [])

  const logoutUser = useCallback(async () => {
    try {
      await logout()
      setAccessToken('')
    } catch (e) {
      setError(e)
    }
  }, [])

  return (
    <AuthenticationContext.Provider
      value={{ accessToken, error, performWebAuth, logoutUser, loading }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
