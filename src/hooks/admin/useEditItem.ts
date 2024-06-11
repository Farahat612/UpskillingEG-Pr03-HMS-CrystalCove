import { toast } from 'sonner'
import { apiProtected } from '../../utils/api'
import { useRefetchContext } from '../../contexts/global/RefetchContext'
import { useModalsContext } from '../../contexts/global/ModalsContext'

const useEditItem = ({ endpoint }: { endpoint: string }) => {
  const { setRefetchCount } = useRefetchContext()
  const { setEditModalOpened, setItemIdToEdit } = useModalsContext()

  const editItem = async (item: object, id: string) => {
    try {
      await apiProtected.put(`/admin/${endpoint}/${id}`, item)
      toast.success('Item edited successfully')
      setRefetchCount((prev) => prev + 1)
      setEditModalOpened(false)
      setItemIdToEdit('')
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
