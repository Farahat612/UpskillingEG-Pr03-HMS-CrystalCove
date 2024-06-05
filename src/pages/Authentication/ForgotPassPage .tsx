/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Stack } from '@mui/material'
import { AuthForm } from '../../components/forms'
import { AuthLayout } from '../../layouts'

import { useForgotPass } from '../../hooks/auth'
import { emailValidation } from '../../utils/validations'

import ForgotPassImg from '../../assets/forms/forgot-password.png'
import { AuthFormTextField } from '../../components/forms/AuthFormTextField'
import { LoadindButton } from '../../components/shared'

const ForgotPassPage = ({ mode }: { mode: 'portal' | 'admin' }) => {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useForgotPass({ mode })

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
        linkDestination={mode === 'portal' ? '/login' : '/admin/login'}
      >
        <Stack
          spacing={5}
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
            helperText={errors.email ? errors.email.message : ''}
          />

          {/* Submit Button */}
          <Stack spacing={0} sx={{ mt: 3 }}>
            <Button
              type='submit'
              className='btn btn-primary btn-block'
              variant='contained'
              disabled={isSubmitting}
            >
              {isSubmitting ? <LoadindButton LoadingText='Sending...'/> : 'Send Mail'}
            </Button>
          </Stack>
        </Stack>
      </AuthForm>
    </AuthLayout>
  )
}

export default ForgotPassPage
