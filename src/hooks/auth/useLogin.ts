import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiPublic } from '../../utils/api'
import { FormData } from '../../types'
import { toast } from 'sonner'
const useLogin = ({ userType }: { userType: 'portal' | 'admin' }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const onSubmit = async (data: FormData) => {
    try {
      const res = await apiPublic.post(`/${userType}/users/login`, data)
      localStorage.setItem('token', res.data.data.token)
      toast.success(res.data.message)
      navigate('/')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error('Invalid Credentials!')
    }
  }
  return {
    passwordVisible,
    togglePasswordVisibility,
    navigate,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  }
}

export default useLogin
