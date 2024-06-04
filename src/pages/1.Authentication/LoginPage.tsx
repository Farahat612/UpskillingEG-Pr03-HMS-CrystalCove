/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthLayout } from '../../layouts'
import { AuthForm } from '../../components/forms'
import { Button, Stack, Typography } from '@mui/material'

import { Link } from 'react-router-dom'
import { emailValidation, passwordValidation } from '../../utils/validations'
import { useLogin } from '../../hooks/auth'

import SigninImage from '../../assets/forms/sign-in.png'
import { AuthFormTextField } from '../../components/forms/AuthFormTextField'

const LoginPage = ({ mode }: { mode: 'portal' | 'admin' }) => {
  const {
    passwordVisible,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  } = useLogin({ mode })

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
        linkDestination={mode === 'portal' ? '/register' : '/admin/create'}
      >
        <Stack
          spacing={6}
          sx={{ mt: 4 }}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email */}
          <AuthFormTextField
            placeholder='Enter Your Email'
            type='text'
            variant='filled'
            fullWidth
            size='small'
            label='Email Address'
            {...register('email', emailValidation)}
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
          />
          {/* Password */}
          <Stack spacing={0}>
            <AuthFormTextField
              placeholder='Enter Your Password'
              type={passwordVisible ? 'text' : 'password'}
              variant='filled'
              fullWidth
              size='small'
              label='Password'
              {...register('password', passwordValidation)}
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : null}
            />

            {/* Forgot Password Link */}
            <Typography component={'div'} sx={{ mt: 1, ml: 'auto' }}>
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
      </AuthForm>
    </AuthLayout>
  )
}

export default LoginPage
