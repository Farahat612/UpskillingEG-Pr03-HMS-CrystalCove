/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthLayout } from '../../layouts'
import { AuthForm } from '../../components/forms'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import {
  emailValidation,
  newPasswordValidation,
  phoneNumberValidation,
  userNameValidation,
} from '../../utils/validations'
import { useRegister } from '../../hooks/auth'

import SignUpImage from '../../assets/forms/sign-up.png'
import userImgPlaceholder from '../../assets/images/userImgPlaceholder.png'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const RegisterPage = ({ userType }: { userType: 'portal' | 'admin' }) => {
  const {
    passwordVisible,
    confirmPasswordVisible,
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
    previewImage,
    setPreviewImage,
  } = useRegister({ userType })

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} sx={{ mt: 4 }}>
            {/* User Name */}
            <Stack spacing={0}>
              <Typography variant='subtitle2' color={'primary.main'}>
                UserName
              </Typography>
              <TextField
                placeholder='Please Inter Your UserName'
                type='text'
                variant='outlined'
                fullWidth
                size='small'
                sx={{
                  bgcolor: 'rgba(245, 246, 248, 1)',
                }}
                {...register('userName', userNameValidation)}
              />
              {errors.userName && (
                <Typography
                  sx={{
                    backgroundColor: '#ff5252',
                    color: 'white',
                    mt: 1,
                    p: 1,
                    borderRadius: '4px',
                  }}
                >
                  {errors.userName.message}
                </Typography>
              )}
            </Stack>
            {/* Phone Number and Country */}
            <Stack
              spacing={0}
              direction='row'
              divider={<div style={{ width: 10 }} />}
            >
              {/* Phone Number */}
              <Stack spacing={0} sx={{ flex: 1 }}>
                <Typography variant='subtitle2' color={'primary.main'}>
                  Phone Number
                </Typography>
                <TextField
                  placeholder='Please Inter Your Phone nubmer'
                  type='text'
                  variant='outlined'
                  fullWidth
                  size='small'
                  sx={{
                    bgcolor: 'rgba(245, 246, 248, 1)',
                  }}
                  {...register('phoneNumber', phoneNumberValidation)}
                />
                {errors.phoneNumber && (
                  <Typography
                    sx={{
                      backgroundColor: '#ff5252',
                      color: 'white',
                      mt: 1,
                      p: 1,
                      borderRadius: '4px',
                    }}
                  >
                    {errors.phoneNumber.message}
                  </Typography>
                )}
              </Stack>
              {/* Country */}
              <Stack spacing={0} sx={{ flex: 1 }}>
                <Typography variant='subtitle2' color={'primary.main'}>
                  Country
                </Typography>
                <TextField
                  placeholder='Please Inter Your Phone Country'
                  type='text'
                  variant='outlined'
                  fullWidth
                  size='small'
                  sx={{
                    bgcolor: 'rgba(245, 246, 248, 1)',
                  }}
                  {...register('country', {
                    required: 'Country is required',
                  })}
                />
                {errors.country && (
                  <Typography
                    sx={{
                      backgroundColor: '#ff5252',
                      color: 'white',
                      mt: 1,
                      p: 1,
                      borderRadius: '4px',
                    }}
                  >
                    {errors.country.message}
                  </Typography>
                )}
              </Stack>
            </Stack>
            {/* Email */}
            <Stack spacing={0}>
              <Typography variant='subtitle2' color={'primary.main'}>
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
                placeholder='Please Inter Your Password'
                type={passwordVisible ? 'text' : 'password'}
                variant='outlined'
                fullWidth
                size='small'
                sx={{
                  bgcolor: 'rgba(245, 246, 248, 1)',
                }}
                {...register('password', newPasswordValidation)}
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
              <Typography variant='subtitle2' color={'primary.main'}>
                Confirm Password
              </Typography>
              <TextField
                placeholder='Please Inter Your Confirm Password'
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
                    value === watch('password') ||
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

            {/* User Image */}
            <Stack spacing={0}>
              <Typography variant='subtitle2' color={'primary.main'}>
                User Image
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  bgcolor: 'rgba(245, 246, 248, 1)',
                  borderRadius: '4px',
                  p: 2,
                }}
              >
                <Button
                  component='label'
                  role={undefined}
                  variant='contained'
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Image
                  <VisuallyHiddenInput
                    type='file'
                    {...register('profileImage')}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const file = e.target.files?.[0] || null
                      setPreviewImage(file)
                    }}
                  />
                </Button>
                <img
                  src={
                    previewImage
                      ? URL.createObjectURL(previewImage)
                      : userImgPlaceholder
                  }
                  alt='User'
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                  }}
                />
              </Box>
            </Stack>
            {/* Submit Button */}
            <Stack spacing={0} sx={{ mt: 3 }}>
              <Button
                type='submit'
                className='btn btn-primary btn-block'
                variant='contained'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SignUp...' : 'Sign Up'}
              </Button>
            </Stack>
          </Stack>
        </form>
      </AuthForm>
    </AuthLayout>
  )
}

export default RegisterPage
