/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Stack, TextField, Typography } from '@mui/material'
import SignUpImage from '../../assets/forms/sign-up.png'
import { AuthForm } from '../../components/forms'
import { AuthLayout } from '../../layouts'

import { useState } from 'react'

const RegisterPage = () => {
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
      imageSrc={SignUpImage}
      imgTitle='Sign Up to CrystalCove'
      slogan='Place for every time.'
    >
      <AuthForm
        heading='Sign Up'
        subtitle={`If you already have an account, You can`}
        linkText='Login here!'
        linkDestination='/login'
      >
        <form>
          <Stack spacing={3} sx={{ mt: 4 }}>
            {/* User Name */}
            <Stack spacing={0}>
              <Typography variant='subtitle2' color={'primary.main'}>
                UserName
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
            {/* Phone Number and Country */}
            <Stack
              spacing={0}
              direction='row'
              divider={<div style={{ width: 10 }} />}
            >
              <Stack spacing={0} sx={{ flex: 1 }}>
                <Typography variant='subtitle2' color={'primary.main'}>
                  Phone Number
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
              <Stack spacing={0} sx={{ flex: 1 }}>
                <Typography variant='subtitle2' color={'primary.main'}>
                  Country
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
            </Stack>
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
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </form>
      </AuthForm>
    </AuthLayout>
  )
}

export default RegisterPage
