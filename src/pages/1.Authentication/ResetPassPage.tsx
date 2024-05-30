/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Stack, TextField, Typography } from '@mui/material'
import ResetPassImg from '../../assets/forms/reset-password.png'
import { AuthForm } from '../../components/forms'
import { AuthLayout } from '../../layouts'

import { useState } from 'react'

const ResetPassPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible)
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
            {/* OTP */}
            <Stack spacing={0}>
              <Typography variant='subtitle2' color={'primary.main'}>
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
            </Stack>
            {/* Confirm Password */}
            <Stack spacing={0}>
              <Typography variant='subtitle2' color={'primary.main'}>
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
              />
            </Stack>
            {/* Submit Button */}
            <Stack spacing={0} sx={{ mt: 3 }}>
              <Button
                type='submit'
                className='btn btn-primary btn-block'
                variant='contained'
              >
                Reset
              </Button>
            </Stack>
          </Stack>
        </form>
      </AuthForm>
    </AuthLayout>
  )
}

export default ResetPassPage
