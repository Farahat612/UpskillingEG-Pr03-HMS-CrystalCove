/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

// types
type ModalContextType = {
  deleteModalOpened: boolean
  setDeleteModalOpened: (open: boolean) => void
}

// create a context
export const ModalsContext = createContext<ModalContextType | null>(null)

// create a context provider
export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [deleteModalOpened, setDeleteModalOpened] = useState(false)

  return (
    <ModalsContext.Provider value={{ deleteModalOpened, setDeleteModalOpened }}>
      {children}
    </ModalsContext.Provider>
  )
}

// create a custom hook
export const useModalsContext = () => {
  const context = useContext(ModalsContext)
  if (!context) {
    throw new Error('useModals must be used within a ModalsProvider')
  }
  return context
}
