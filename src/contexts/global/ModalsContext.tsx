/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

// types
type ModalContextType = {
  deleteModalOpened: boolean
  setDeleteModalOpened: (open: boolean) => void

  addModalOpened: boolean
  setAddModalOpened: (open: boolean) => void

  editModalOpened: boolean
  setEditModalOpened: (open: boolean) => void

  itemIdToEdit: string
  setItemIdToEdit: (id: string) => void
}

// create a context
export const ModalsContext = createContext<ModalContextType | null>(null)

// create a context provider
export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [deleteModalOpened, setDeleteModalOpened] = useState(false)
  const [addModalOpened, setAddModalOpened] = useState(false)
  const [editModalOpened, setEditModalOpened] = useState(false)
  const [itemIdToEdit, setItemIdToEdit] = useState('')

  return (
    <ModalsContext.Provider
      value={{
        deleteModalOpened,
        setDeleteModalOpened,
        addModalOpened,
        setAddModalOpened,
        editModalOpened,
        setEditModalOpened,
        itemIdToEdit,
        setItemIdToEdit,
      }}
    >
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
