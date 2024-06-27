import { apiProtected } from '../../utils/api'
import { toast } from 'sonner'

const usePostData = ({
  endpoint,
  successMSG,
}: {
  endpoint: string
  successMSG: string
}) => {
  const addData = async (item: object) => {
    try {
      await apiProtected.post(`/portal/${endpoint}`, item)
      toast.success(successMSG || `Item added to ${endpoint} successfully`)
    } catch (error) {
      toast.error('Error adding item - Try again')
      console.error(error)
    }
  }

  return {
    addData,
  }
}

export default usePostData
