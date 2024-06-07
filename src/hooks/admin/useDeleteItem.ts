import { toast } from 'sonner'
import { apiProtected } from '../../utils/api'
import { useState } from 'react'
import { useRefetchContext } from '../../contexts/global/RefetchContext'

export const useDeleteItem = ({
  itemId,
  endpoint,
}: {
  itemId: string
  endpoint: string
}) => {
  const [loading, setLoading] = useState(false)
  const { setRefetchCount } = useRefetchContext()

  const deleteItem = async () => {
    try {
      setLoading(true)
      await apiProtected.delete(`/admin/${endpoint}/${itemId}`)
      toast.success('Item deleted successfully')
      setRefetchCount((prev) => prev + 1)
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
