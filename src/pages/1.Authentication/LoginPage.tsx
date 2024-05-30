/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthLayout } from '../../layouts'
import SigninImage from '../../assets/forms/sign-in.png'
import { AuthForm } from '../../components/forms'
import { Button, Stack, TextField, Typography } from '@mui/material'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { apiPublic } from '../../utils/api'
import { Login } from '../../hooks/useLoginPage'
import { FormData } from '../../types'

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const onSubmit = async (data: FormData) => {
   
      await Login(data)
    
  }

  return (
    <AuthLayout
      imageSrc={SigninImage}
      imgTitle='Sign In to CrystalCove'
      slogan='Homes as unique as you.'
    >
      <AuthForm
        heading='Login'
        subtitle={`If you don't have an account, You can`}
        linkText='Register here!'
        linkDestination='/register'
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
                placeholder='Please Inter Your Email'
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
            {/* Password */}
            <Stack spacing={0}>
              <Typography
                variant='subtitle2'
                color={'primary.main'}
              >
                Password
              </Typography>
              <TextField
                placeholder='Please Inter Your Password'
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

              {/* Forgot Password Link */}
              <Typography
                variant='subtitle2'
                sx={{ mt: 1, ml: 'auto' }}
              >
                <Link
                  to={'/forgot-password'}
                  style={{ color: 'rgba(0, 0, 0, 0.54)' }}
                >
                  Forgot Password?
                </Link>
              </Typography>
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
                {isSubmitting ? 'logging...' : 'Login'}
              </Button>
            </Stack>
          </Stack>
        </form>
      </AuthForm>
    </AuthLayout>
  )
}

export default LoginPage
