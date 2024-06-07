import { toast } from 'sonner'
import { apiProtected } from '../../utils/api'
import { useState } from 'react'

export const useDeleteItem = ({
  itemId,
  endpoint,
}: {
  itemId: string
  endpoint: string
}) => {
  const [loading, setLoading] = useState(false)
  const deleteItem = async () => {
    try {
      setLoading(true)
      await apiProtected.delete(`/admin/${endpoint}/${itemId}`)
      toast.success('Item deleted successfully')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }

  }

  return {
    deleteItem,
    loading,
  }
}
