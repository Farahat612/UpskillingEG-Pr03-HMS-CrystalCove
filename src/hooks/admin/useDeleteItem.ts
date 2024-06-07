import { toast } from 'sonner'
import { apiProtected } from '../../utils/api'

export const useDeleteItem = ({
  itemId,
  endpoint,
}: {
  itemId: string
  endpoint: string
}) => {
  const deleteItem = async () => {
    try {
      await apiProtected.delete(`/admin/${endpoint}/${itemId}`)
      toast.success('Item deleted successfully')
    } catch (error) {
      console.error(error)
    }
  }

  return {
    deleteItem,
  }
}
