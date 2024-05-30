/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthLayout } from '../../layouts'
import SigninImage from '../../assets/forms/sign-in.png'
import { AuthForm } from '../../components/forms'
import { Button, Stack, TextField, Typography } from '@mui/material'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
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
        <form>
          <Stack spacing={3} sx={{ mt: 4 }}>
            {/* Email */}
            <Stack spacing={0}>
              <Typography variant='subtitle2' color={'primary.main'}>
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
              />
            </Stack>
            {/* Password */}
            <Stack spacing={0}>
              <Typography variant='subtitle2' color={'primary.main'}>
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
              />
              {/* Forgot Password Link */}
              <Typography variant='subtitle2' sx={{ mt: 1, ml: 'auto' }}>
                <Link
                  to={'/forgot-password'}
                  style={{ color: 'rgba(0, 0, 0, 0.54)' }}
                >
                  Forgot Password?
                </Link>
              </Typography>
            </Stack>
          </Stack>

          {/* Submit Button */}
          <Stack spacing={0} sx={{ mt: 3 }}>
            <Button
              type='submit'
              className='btn btn-primary btn-block'
              variant='contained'
            >
              Login
            </Button>
          </Stack>
        </form>
      </AuthForm>
    </AuthLayout>
  )
}

export default LoginPage
