import { FormData } from '../../types'
import { useForm } from 'react-hook-form'
import { apiProtected } from '../../utils/api'
import { toast } from 'sonner'
import { useState } from 'react'
type ChangePassFormData = Pick<
  FormData,
  'oldPassword' | 'newPassword' | 'confirmPassword'
>
export const useChangepassword = (closeModule: () => void) => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false)
  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible)
  }
  const [newPasswordVisible, setNewPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible)
  }
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible)
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ChangePassFormData>()

  const onSubmit = async (data: ChangePassFormData) => {
    try {
      const response = await apiProtected.post(
        '/admin/users/change-password',
        data
      )
      toast.success(response.data.message)
      closeModule()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
  return {
    oldPasswordVisible,
    toggleOldPasswordVisibility,
    newPasswordVisible,
    togglePasswordVisibility,
    confirmPasswordVisible,
    toggleConfirmPasswordVisibility,
    register,
    handleSubmit,
    onSubmit,
    watch,
    errors,
    isSubmitting,
  }
}
