/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { User } from '../../types'
import { apiProtected } from '../../utils/api'

// Types

type Mode = 'portal' | 'admin'
type UserRole = 'user' | 'admin'
type Auth = {
  isAuthenticated: boolean
  token: string | null
  mode: Mode | null
  role: UserRole | null
  userId?: string
}
type AuthContextType = {
  auth: Auth
  currentUser: User | object
  loading: boolean
  login: (token: string, mode: Mode, role: UserRole, id: string) => void
  logout: () => void
}

// Create context
export const AuthContext = createContext<AuthContextType | null>(null)

// Create context provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | object>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [auth, setAuth] = useState<Auth>(() => {
    const token = localStorage.getItem('token') as string
    const mode = localStorage.getItem('mode') as Mode | null
    const role = localStorage.getItem('role') as UserRole | null
    const userId = localStorage.getItem('userId') as string

    return {
      isAuthenticated: token !== null,
      token,
      mode,
      role,
      userId,
    }
  })

  // fetch the current user data when the user is signed in using the user Id extracted from the token and at this endpoint: `/${mode}/users/${userId}`
  useEffect(() => {
    if (auth.isAuthenticated) {
      const fetchUser = async () => {
        try {
          setLoading(true)
          const userId = auth.userId
          const response = await apiProtected.get(
            `/${auth.mode}/users/${userId}`
          )
          setCurrentUser(response.data.data.user)
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }
      fetchUser()
    }
  }, [auth])

  const login = (token: string, mode: Mode, role: UserRole, id: string) => {
    localStorage.setItem('token', token)
    localStorage.setItem('mode', mode)
    localStorage.setItem('role', role)
    localStorage.setItem('userId', id)
    setAuth({ isAuthenticated: true, token, mode, role, userId: id })
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('mode')
    localStorage.removeItem('role')
    localStorage.removeItem('userId')
    setAuth({ isAuthenticated: false, token: null, mode: null, role: null, userId: ''})
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout, currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the auth context
export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
