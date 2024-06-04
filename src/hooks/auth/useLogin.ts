/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiPublic } from '../../utils/api'
import { FormData } from '../../types'
import { toast } from 'sonner'
import { useAuthContext } from '../../contexts/global/AuthContext'

type SignInFormData = Pick<FormData, 'email' | 'password'>

const useLogin = ({ mode }: { mode: 'portal' | 'admin' }) => {
  const { login } = useAuthContext()

  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>()
  const onSubmit = async (data: SignInFormData) => {
    try {
      const res = await apiPublic.post(`/${mode}/users/login`, data)
      localStorage.setItem('token', res.data.data.token)
      toast.success(res.data.message)
      // storing token and mode in local storage
      const signinData = res.data.data
      login(signinData.token, mode, signinData.user.role)
      navigate(from, { replace: true })
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
