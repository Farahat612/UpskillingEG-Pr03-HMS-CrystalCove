/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Stack, TextField, Typography } from '@mui/material'
import ResetPassImg from '../../assets/forms/reset-password.png'
import { AuthForm } from '../../components/forms'
import { AuthLayout } from '../../layouts'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormData } from '../../types'
import { ResetPass } from '../../hooks/useResetPassPage'
import { useNavigate } from 'react-router-dom'

const ResetPassPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible)
  }

  const navigat = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const onSubmit = async (data: FormData) => {
    await ResetPass(data, (nav) => {
      if (nav == true) {
        navigat('/login')
      }
    })
  }
  return (
    <AuthLayout
      imageSrc={ResetPassImg}
      imgTitle='Meditate im CrystalCove'
      slogan='Landscapes to be remembered.'
    >
      <AuthForm
        heading='Reset Password'
        subtitle={`If you came here by mistake, You can`}
        linkText='Login here!'
        linkDestination='/login'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={3}
            sx={{ mt: 4 }}
          >
            {/* Email */}
            <Stack spacing={0}>
              <Typography
                variant='subtitle2'
                color={'primary.main'}
              >
                Email Address
              </Typography>
              <TextField
                type='text'
                variant='outlined'
                fullWidth
                size='small'
                sx={{
                  bgcolor: 'rgba(245, 246, 248, 1)',
                }}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%=-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid E-mail !',
                  },
                })}
              />
              {errors.email && (
                <Typography
                  sx={{
                    backgroundColor: '#ff5252',
                    color: 'white',
                    mt: 1,
                    p: 1,
                    borderRadius: '4px',
                  }}
                >
                  {errors.email.message}
                </Typography>
              )}
            </Stack>
            {/* OTP */}
            <Stack spacing={0}>
              <Typography
                variant='subtitle2'
                color={'primary.main'}
              >
                OTP
              </Typography>
              <TextField
                type='text'
                variant='outlined'
                fullWidth
                size='small'
                sx={{
                  bgcolor: 'rgba(245, 246, 248, 1)',
                }}
                {...register('seed', {
                  required: 'seed is required',
                })}
              />
              {errors.seed && (
                <Typography
                  sx={{
                    backgroundColor: '#ff5252',
                    color: 'white',
                    mt: 1,
                    p: 1,
                    borderRadius: '4px',
                  }}
                >
                  {errors.seed.message}
                </Typography>
              )}
            </Stack>
            {/* Password */}
            <Stack spacing={0}>
              <Typography
                variant='subtitle2'
                color={'primary.main'}
              >
                Password
              </Typography>
              <TextField
                type={passwordVisible ? 'text' : 'password'}
                variant='outlined'
                fullWidth
                size='small'
                sx={{
                  bgcolor: 'rgba(245, 246, 248, 1)',
                }}
                {...register('password', {
                  required: 'password is required',
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                  },
                })}
              />
              {errors.password && (
                <Typography
                  sx={{
                    backgroundColor: '#ff5252',
                    color: 'white',
                    mt: 1,
                    p: 1,
                    borderRadius: '4px',
                  }}
                >
                  {errors.password.message}
                </Typography>
              )}
            </Stack>
            {/* Confirm Password */}
            <Stack spacing={0}>
              <Typography
                variant='subtitle2'
                color={'primary.main'}
              >
                Confirm Password
              </Typography>
              <TextField
                type={confirmPasswordVisible ? 'text' : 'password'}
                variant='outlined'
                fullWidth
                size='small'
                sx={{
                  bgcolor: 'rgba(245, 246, 248, 1)',
                }}
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: (value) =>
                    value == watch('password') ||
                    'The confirm password do not match password ',
                })}
              />
              {errors.confirmPassword && (
                <Typography
                  sx={{
                    backgroundColor: '#ff5252',
                    color: 'white',
                    mt: 1,
                    p: 1,
                    borderRadius: '4px',
                  }}
                >
                  {errors.confirmPassword.message}
                </Typography>
              )}
            </Stack>
            {/* Submit Button */}
            <Stack
              spacing={0}
              sx={{ mt: 3 }}
            >
              <Button
                type='submit'
                className='btn btn-primary btn-block'
                variant='contained'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Reset...' : 'Reset'}
              </Button>
            </Stack>
          </Stack>
        </form>
      </AuthForm>
    </AuthLayout>
  )
}

export default ResetPassPage
