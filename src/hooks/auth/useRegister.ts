import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { FormData } from '../../types'
import { useNavigate } from 'react-router-dom'
import { apiPublic } from '../../utils/api'
import { appendFormData } from '../../utils/appendFormData'

type SignUpFormData = Pick<
  FormData,
  | 'userName'
  | 'phoneNumber'
  | 'country'
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'profileImage'
>

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
  const [objectUrl, setObjectUrl] = useState<string | null>(null)

  useEffect(() => {
    if (previewImage) {
      const url = URL.createObjectURL(previewImage)
      setObjectUrl(url)
    }
    // Cleanup function
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewImage])
  const [secretKey, setSecretKey] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>()
  const onSubmit = async (data: SignUpFormData) => {
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
    secretKey,
    setSecretKey,
    objectUrl,
  }
}

export default useRegister
