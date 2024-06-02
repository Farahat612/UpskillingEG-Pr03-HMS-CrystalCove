/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

// Types
type UserType = 'portal' | 'admin'
type UserRole = 'user' | 'admin'
type Auth = {
  isAuthenticated: boolean
  token: string | null
  userType: UserType | null
  role: UserRole | null
}
type AuthContextType = {
  auth: Auth
  login: (token: string, userType: UserType, role: UserRole) => void
  logout: () => void
}

// Create context
export const AuthContext = createContext<AuthContextType | null>(null)

// Create context provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<Auth>(() => {
    const token = localStorage.getItem('token') as string
    const userType = localStorage.getItem('userType') as UserType | null
    const role = localStorage.getItem('role') as UserRole | null

    return {
      isAuthenticated: token !== null,
      token,
      userType,
      role,
    }
  })

  const login = (token: string, userType: UserType, role: UserRole) => {
    localStorage.setItem('token', token)
    localStorage.setItem('userType', userType)
    localStorage.setItem('role', role)
    setAuth({ isAuthenticated: true, token, userType, role })
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    localStorage.removeItem('role')
    setAuth({ isAuthenticated: false, token: null, userType: null, role: null })
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
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
