import { toast } from 'sonner'
import { apiProtected } from '../../utils/api'
import { useRefetchContext } from '../../contexts/global/RefetchContext'
import { useModalsContext } from '../../contexts/global/ModalsContext'
import { Ad, Facility, Room } from '../../types'

const useEditItem = ({ endpoint }: { endpoint: string }) => {
  const { setRefetchCount } = useRefetchContext()
  const { setEditModalOpened } = useModalsContext()

  const editItem = async (item: Room | Facility | Ad) => {
    try {
      await apiProtected.put(`/admin/${endpoint}/${item._id}`, item)
      toast.success('Item edited successfully')
      setRefetchCount((prev) => prev + 1)
      setEditModalOpened(false)
    } catch (error) {
      toast.error('Error editing item - Try again')
      console.error(error)
    }
  }

  return {
    editItem,
  }
}

export default useEditItem
