/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthLayout } from '../../layouts'
import { AuthForm } from '../../components/forms'
import { Button, Stack, TextField, Typography } from '@mui/material'

import { emailValidation } from '../../utils/validations'
import { useForgotPass } from '../../hooks/auth'

import ForgotPassImg from '../../assets/forms/forgot-password.png'

const ForgotPassPage = ({ userType }: { userType: 'portal' | 'admin' }) => {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useForgotPass({ userType })

  return (
    <AuthLayout
      imageSrc={ForgotPassImg}
      imgTitle='Relax at CrystalCove'
      slogan='Views you never experienced.'
    >
      <AuthForm
        heading='Forgot Password'
        subtitle={`If you came here by mistake, You can`}
        linkText='Login here!'
        linkDestination='/login'
      >
        <Stack
          spacing={5}
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
              helperText={errors.email ? errors.email.message : ''}
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
              {isSubmitting ? 'Sending...' : 'Send Mail'}
            </Button>
          </Stack>
        </Stack>
      </AuthForm>
    </AuthLayout>
  )
}

export default ForgotPassPage
