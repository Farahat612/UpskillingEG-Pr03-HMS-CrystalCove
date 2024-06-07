import { Box, Button, DialogActions, Stack } from '@mui/material'
import { AuthFormTextField } from '../../components/forms/AuthFormTextField'
import { BoxModuleChangePassStyle } from '../../components/styled/Sidebarstyled'
import { ChangePassIamge } from '../../components/styled/img'
import ChangePassImage from '../../assets/forms/sign-in.png'
import CloseIcon from '@mui/icons-material/Close'
import { useChangepassword } from '../../hooks/auth/useChangePass'
import {
  newPasswordValidation,
  passwordValidation,
} from '../../utils/validations'
import { LoadindButton } from '../../components/shared'

const ChangePass = ({ closeModule }: { closeModule: () => void }) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    watch,
    errors,
    isSubmitting,
    oldPasswordVisible,
    newPasswordVisible,
    confirmPasswordVisible,
  } = useChangepassword(closeModule)

  return (
    <Box sx={BoxModuleChangePassStyle}>
      <DialogActions>
      <Button
        onClick={closeModule}
        sx={{ ml: 'auto', display: 'block' }}
        >
        <CloseIcon />
      </Button>
      </DialogActions>
      <ChangePassIamge
        src={ChangePassImage}
        alt='Img change password'
        />
      <Stack
        spacing={5}
        sx={{ mt: 7 }}
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
        >
        {/* old Password */}
        <AuthFormTextField
          placeholder='Enter Your Email'
          type={oldPasswordVisible ? 'text' : 'password'}
          variant='filled'
          fullWidth
          size='small'
          label='Old Password'
          {...register('oldPassword', passwordValidation)}
          error={errors.oldPassword ? true : false}
          helperText={errors.oldPassword ? errors.oldPassword.message : null}
        />
        {/* New Password */}
        <Stack spacing={0}>
          <AuthFormTextField
            placeholder='Enter Your Password'
            type={newPasswordVisible ? 'text' : 'password'}
            variant='filled'
            fullWidth
            size='small'
            label='New Password'
            {...register('newPassword', newPasswordValidation)}
            error={errors.newPassword ? true : false}
            helperText={errors.newPassword ? errors.newPassword.message : null}
          />
        </Stack>
        {/* Confirm New Password */}
        <Stack spacing={0}>
          <AuthFormTextField
            placeholder='Enter Your Confirm Password'
            type={confirmPasswordVisible ? 'text' : 'password'}
            variant='filled'
            fullWidth
            size='small'
            label='Confirm New Password'
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value == watch('newPassword') ||
                'The confirm password do not match password',
            })}
            error={errors.confirmPassword ? true : false}
            helperText={
              errors.confirmPassword ? errors.confirmPassword.message : null
            }
          />
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
            {isSubmitting ? <LoadindButton LoadingText='changing' /> : 'change'}
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default ChangePass
