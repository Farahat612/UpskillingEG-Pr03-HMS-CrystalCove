/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthLayout } from '../../layouts'
import ForgotPassImg from '../../assets/forms/forgot-password.png'
import { AuthForm } from '../../components/forms'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormData } from '../../types'
import { ForgetPass } from '../../hooks/useForgotPassPage'
import { useNavigate  } from 'react-router-dom'

const ForgotPassPage = () => {
  const navigat = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const onSubmit = async (data: FormData) => {
    
      await ForgetPass(data, (nav) => {
        if(nav == true) {
          navigat('/reset-password')
        }
      })
    
  }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={5}
            sx={{ mt: 4 }}
          >
            {/* Email */}
            <Stack spacing={0}>
              <Typography
                variant='subtitle2'
                color={'primary.main'}
              >
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
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%=-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid E-mail !',
                  },
                })}
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
            {/* Submit Button */}
            <Stack
              spacing={0}
              sx={{ mt: 3 }}
            >
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
        </form>
      </AuthForm>
    </AuthLayout>
  )
}

export default ForgotPassPage
