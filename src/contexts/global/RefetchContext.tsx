/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

// types
type RefetchContextType = {
  refetchCount: number
  setRefetchCount: React.Dispatch<React.SetStateAction<number>>
}

// create a context
export const RefetchContext = createContext<RefetchContextType | null>(null)

// create a context provider
export const RefetchProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [refetchCount, setRefetchCount] = useState(0)

  return (
    <RefetchContext.Provider value={{ refetchCount, setRefetchCount }}>
      {children}
    </RefetchContext.Provider>
  )
}

// create a custom hook
export const useRefetchContext = () => {
  const context = useContext(RefetchContext)
  if (!context) {
    throw new Error('useRefetch must be used within a RefetchProvider')
  }
  return context
}
