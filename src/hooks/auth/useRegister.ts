import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { FormData } from '../../types'
import { useNavigate } from 'react-router-dom'
import { apiPublic } from '../../utils/api'
import { appendFormData } from '../../utils/appendFormData'

const useRegister = ({ userType }: { userType: 'portal' | 'admin' }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible)
  }

  const navigate = useNavigate()

  const [previewImage, setPreviewImage] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const onSubmit = async (data: FormData) => {
    try {
      const signUpData = {
        ...data,
        role: userType === 'portal' ? 'user' : 'admin',
      }
      const formData = appendFormData(signUpData)
      const res = await apiPublic.post(`/${userType}/users`, formData)
      toast.success(res.data.message)
      navigate('/login')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message)
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
    previewImage,
    setPreviewImage,
  }
}

export default useRegister
