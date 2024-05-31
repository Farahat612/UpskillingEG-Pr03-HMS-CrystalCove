import { useForm } from 'react-hook-form'
import { FormData } from '../../types'
import { useNavigate } from 'react-router-dom'
import { apiPublic } from '../../utils/api'
import { toast } from 'sonner'

const useForgotPass = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const onSubmit = async (data: FormData) => {
    try {
      const res = await apiPublic.post('/admin/users/forgot-password', data)
      toast.success(res.data.message)
      navigate('/reset-password')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
  return {
    navigate,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  }
}

export default useForgotPass
