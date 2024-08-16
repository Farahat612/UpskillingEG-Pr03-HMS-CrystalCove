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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(`${error ? error.response.data.message : 'Error adding item - Try again'}`)
      console.error(error)
    }
  }

  return {
    addData,
  }
}

export default usePostData
