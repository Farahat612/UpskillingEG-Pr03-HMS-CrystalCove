/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthLayout } from '../../layouts'
import { AuthForm } from '../../components/forms'
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

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
    setPreviewImage,
    secretKey,
    setSecretKey,
    objectUrl,
  } = useRegister({ userType })

  return (
    <AuthLayout
      imageSrc={SignUpImage}
      imgTitle='Sign Up to CrystalCove'
      slogan='Place for every time.'
    >
      <AuthForm
        heading={userType === 'portal' ? 'Sign Up' : 'Create Admin Account'}
        {...(userType === 'portal' && {
          subtitle: 'Already have an account?',
          linkText: 'Login',
          linkDestination: '/login',
        })}
      >
        {/* Create Admin Secret Key */}
        {userType === 'admin' && (
          <Stack spacing={0}>
            <Typography variant='subtitle2' color={'error.main'}>
              Secret Key
            </Typography>
            <TextField
              placeholder='Enter Your Secret Key'
              type='password'
              variant='outlined'
              fullWidth
              size='small'
              sx={{
                bgcolor: 'rgba(245, 246, 248, 1)',
              }}
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
            />
            <Divider sx={{ mt: 3 }} />
          </Stack>
        )}

        {/* Form */}
        <Stack
          spacing={3}
          sx={{ mt: 4 }}
          component='form'
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* User Name */}
          <Stack spacing={0}>
            <Typography variant='subtitle2' color={'primary.main'}>
              UserName
            </Typography>
            <TextField
              placeholder='Enter Your UserName'
              type='text'
              variant='outlined'
              fullWidth
              size='small'
              sx={{
                bgcolor: 'rgba(245, 246, 248, 1)',
              }}
              {...register('userName', userNameValidation)}
              error={errors.userName ? true : false}
              helperText={errors.userName ? errors.userName.message : null}
            />
          </Stack>
          {/* Phone Number and Country */}
          <Stack spacing={1} direction='row'>
            {/* Phone Number */}
            <Stack spacing={0} sx={{ flex: 1 }}>
              <Typography variant='subtitle2' color={'primary.main'}>
                Phone Number
              </Typography>
              <TextField
                placeholder='Enter Your Phone nubmer'
                type='tel'
                variant='outlined'
                fullWidth
                size='small'
                sx={{
                  bgcolor: 'rgba(245, 246, 248, 1)',
                }}
                {...register('phoneNumber', phoneNumberValidation)}
                error={errors.phoneNumber ? true : false}
                helperText={
                  errors.phoneNumber ? errors.phoneNumber.message : null
                }
              />
            </Stack>
            {/* Country */}
            <Stack spacing={0} sx={{ flex: 1 }}>
              <Typography variant='subtitle2' color={'primary.main'}>
                Country
              </Typography>
              <TextField
                placeholder='Enter Your Country'
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
                error={errors.country ? true : false}
                helperText={errors.country ? errors.country.message : null}
              />
            </Stack>
          </Stack>
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
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email.message : null}
            />
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
              {...register('password', newPasswordValidation)}
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : null}
            />
          </Stack>
          {/* Confirm Password */}
          <Stack spacing={0}>
            <Typography variant='subtitle2' color={'primary.main'}>
              Confirm Password
            </Typography>
            <TextField
              placeholder='Confirm Your Password'
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
              error={errors.confirmPassword ? true : false}
              helperText={
                errors.confirmPassword ? errors.confirmPassword.message : null
              }
            />
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
                src={objectUrl || userImgPlaceholder}
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
              disabled={
                isSubmitting ||
                (userType === 'admin' && secretKey !== 'se9!5@DM')
              }
            >
              {isSubmitting ? 'SignUp...' : 'Sign Up'}
            </Button>
          </Stack>
        </Stack>
      </AuthForm>
    </AuthLayout>
  )
}

export default RegisterPage
