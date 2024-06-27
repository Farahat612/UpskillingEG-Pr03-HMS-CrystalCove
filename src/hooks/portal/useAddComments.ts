import { useForm } from 'react-hook-form'
import { apiProtected } from '../../utils/api'
import { toast } from 'sonner'

interface reviews {
  rating?: number
  review?: string
  comment?: string
}

const useAddComments = (
  id: string | undefined,
  endpoint: string,
  rating?: number | null
) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<reviews>()

  const onSubmit = async (data: reviews) => {
    try {
      const response = await apiProtected.post(`/portal/room-${endpoint}`, {
        ...data,
        roomId: id,
        rating: rating,
      })
      toast.success(response.data.message)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  }
}

export default useAddComments
