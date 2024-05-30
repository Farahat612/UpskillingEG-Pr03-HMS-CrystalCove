/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthLayout } from '../../layouts'
import ForgotPassImg from '../../assets/forms/forgot-password.png'
import { AuthForm } from '../../components/forms'
import { Button, Stack, TextField, Typography } from '@mui/material'

const ForgotPassPage = () => {
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
        <form>
          <Stack spacing={5} sx={{ mt: 4 }}>
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
            {/* Submit Button */}
            <Stack spacing={0} sx={{ mt: 3 }}>
              <Button
                type='submit'
                className='btn btn-primary btn-block'
                variant='contained'
              >
                Send Mail
              </Button>
            </Stack>
          </Stack>
        </form>
      </AuthForm>
    </AuthLayout>
  )
}

export default ForgotPassPage
