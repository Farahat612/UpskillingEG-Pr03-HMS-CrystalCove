import { toast } from 'sonner'
import { apiProtected } from '../../utils/api'
import { useState } from 'react'
import { useRefetchContext } from '../../contexts/global/RefetchContext'
import { useModalsContext } from '../../contexts/global/ModalsContext'

export const useDeleteItem = ({
  itemId,
  endpoint,
}: {
  itemId: string
  endpoint: string
}) => {
  const [loading, setLoading] = useState(false)
  const { setRefetchCount } = useRefetchContext()
  const { setDeleteModalOpened } = useModalsContext()

  const deleteItem = async () => {
    try {
      setLoading(true)
      await apiProtected.delete(`/admin/${endpoint}/${itemId}`)
      toast.success('Item deleted successfully')
      setRefetchCount((prev) => prev + 1)
    } catch (error) {
      toast.error('Error deleting item')
      console.error(error)
    } finally {
      setLoading(false)
      setDeleteModalOpened(false)
    }
  }

  return {
    deleteItem,
    loading,
  }
}
