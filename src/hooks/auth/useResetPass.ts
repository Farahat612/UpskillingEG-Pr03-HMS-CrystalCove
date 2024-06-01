import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormData } from '../../types'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { apiPublic } from '../../utils/api'
const useResetPass = ({ userType }: { userType: 'portal' | 'admin' }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible)
  }

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const onSubmit = async (data: FormData) => {
    try {
      const res = await apiPublic.post(
        `/${userType}/users/reset-password`,
        data
      )
      toast.success(res.data.message)
      navigate('/login')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.success(error.response.data.message)
    }
  }
  return {
    passwordVisible,
    togglePasswordVisibility,
    confirmPasswordVisible,
    toggleConfirmPasswordVisibility,
    navigate,
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
  }
}

export default useResetPass
