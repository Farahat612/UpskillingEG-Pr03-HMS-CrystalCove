/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthLayout } from '../../layouts'
import { AuthForm } from '../../components/forms'
import { Button, Stack, TextField, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import { emailValidation, passwordValidation } from '../../utils/validations'
import { useLogin } from '../../hooks/auth'

import SigninImage from '../../assets/forms/sign-in.png'

const LoginPage = ({ userType }: { userType: 'portal' | 'admin' }) => {
  const {
    passwordVisible,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  } = useLogin({ userType })

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
          <Stack spacing={3} sx={{ mt: 4 }}>
            {/* Email */}
            <Stack spacing={0}>
              <Typography variant='subtitle2' color={'primary.main'}>
                Email Address
              </Typography>
              <TextField
                placeholder='Enter Your Email'
                type='text'
                variant='outlined'
                fullWidth
                size='small'
                sx={{
                  bgcolor: 'rgba(245, 246, 248, 1)',
                }}
                {...register('email', emailValidation)}
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
              <Typography variant='subtitle2' color={'primary.main'}>
                Password
              </Typography>
              <TextField
                placeholder='Enter Your Password'
                type={passwordVisible ? 'text' : 'password'}
                variant='outlined'
                fullWidth
                size='small'
                sx={{
                  bgcolor: 'rgba(245, 246, 248, 1)',
                }}
                {...register('password', passwordValidation)}
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
              <Typography sx={{ mt: 1, ml: 'auto' }}>
                <Link to={'/forgot-password'}>
                  <Typography variant='subtitle2' color='textDark.main'>
                    Forgot Password?
                  </Typography>
                </Link>
              </Typography>
            </Stack>

            {/* Submit Button */}
            <Stack spacing={0} sx={{ mt: 3 }}>
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
