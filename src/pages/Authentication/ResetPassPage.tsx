/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthLayout } from '../../layouts'
import { AuthForm } from '../../components/forms'
import { Button, Stack, TextField, Typography } from '@mui/material'

import { emailValidation, newPasswordValidation } from '../../utils/validations'
import { useResetPass } from '../../hooks/auth'

import ResetPassImg from '../../assets/forms/reset-password.png'
import { LoadindButton } from '../../components/shared'

const ResetPassPage = ({ mode }: { mode: 'portal' | 'admin' }) => {
  const {
    passwordVisible,
    confirmPasswordVisible,
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
  } = useResetPass({ mode })
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
        linkDestination={mode === 'portal' ? '/login' : '/admin/login'}
      >
        <Stack
          spacing={3}
          sx={{ mt: 4 }}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email */}
          <Stack spacing={0}>
            <Typography variant='subtitle2' color={'primary.main'}>
              Email Address
            </Typography>
            <TextField
              type='text'
              placeholder='Enter Your Email'
              variant='outlined'
              fullWidth
              size='small'
              sx={{
                bgcolor: 'rgba(245, 246, 248, 1)',
              }}
              {...register('email', emailValidation)}
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email.message : ''}
            />
          </Stack>
          {/* OTP */}
          <Stack spacing={0}>
            <Typography variant='subtitle2' color={'primary.main'}>
              OTP
            </Typography>
            <TextField
              type='text'
              placeholder='Enter OTP'
              variant='outlined'
              fullWidth
              size='small'
              sx={{
                bgcolor: 'rgba(245, 246, 248, 1)',
              }}
              {...register('seed', {
                required: 'seed is required',
              })}
              error={errors.seed ? true : false}
              helperText={errors.seed ? errors.seed.message : ''}
            />
          </Stack>
          {/* Password */}
          <Stack spacing={0}>
            <Typography variant='subtitle2' color={'primary.main'}>
              Password
            </Typography>
            <TextField
              type={passwordVisible ? 'text' : 'password'}
              placeholder='Enter Your New Password'
              variant='outlined'
              fullWidth
              size='small'
              sx={{
                bgcolor: 'rgba(245, 246, 248, 1)',
              }}
              {...register('password', newPasswordValidation)}
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : ''}
            />
          </Stack>
          {/* Confirm Password */}
          <Stack spacing={0}>
            <Typography variant='subtitle2' color={'primary.main'}>
              Confirm Password
            </Typography>
            <TextField
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder='Confirm Your New Password'
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
              error={errors.confirmPassword ? true : false}
              helperText={
                errors.confirmPassword ? errors.confirmPassword.message : ''
              }
            />
          </Stack>
          {/* Submit Button */}
          <Stack spacing={0} sx={{ mt: 3 }}>
            <Button
              type='submit'
              className='btn btn-primary btn-block'
              variant='contained'
              disabled={isSubmitting}
            >
              {isSubmitting ? <LoadindButton LoadingText='Reset...'/>: 'Reset'}
            </Button>
          </Stack>
        </Stack>
      </AuthForm>
    </AuthLayout>
  )
}

export default ResetPassPage
