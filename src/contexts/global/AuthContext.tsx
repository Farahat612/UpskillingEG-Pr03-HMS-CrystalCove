/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

// Types
type Mode = 'portal' | 'admin'
type UserRole = 'user' | 'admin'
type Auth = {
  isAuthenticated: boolean
  token: string | null
  mode: Mode | null
  role: UserRole | null
}
type AuthContextType = {
  auth: Auth
  login: (token: string, mode: Mode, role: UserRole) => void
  logout: () => void
}

// Create context
export const AuthContext = createContext<AuthContextType | null>(null)

// Create context provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<Auth>(() => {
    const token = localStorage.getItem('token') as string
    const mode = localStorage.getItem('mode') as Mode | null
    const role = localStorage.getItem('role') as UserRole | null

    return {
      isAuthenticated: token !== null,
      token,
      mode,
      role,
    }
  })

  const login = (token: string, mode: Mode, role: UserRole) => {
    localStorage.setItem('token', token)
    localStorage.setItem('mode', mode)
    localStorage.setItem('role', role)
    setAuth({ isAuthenticated: true, token, mode, role })
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('mode')
    localStorage.removeItem('role')
    setAuth({ isAuthenticated: false, token: null, mode: null, role: null })
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
