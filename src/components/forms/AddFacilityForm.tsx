import { Stack, TextField, DialogActions, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import useAddData from '../../hooks/admin/useAddData'
import { LoadindButton } from '../shared'

type AddFaciltyFormData = {
  name: string
}

const AddFacilityForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddFaciltyFormData>()

  const { addData } = useAddData({ endpoint: 'room-facilities' })

  const onSubmit = async (data: AddFaciltyFormData) => {
    await addData(data)
    reset()
  }

  return (
    <Stack component={'form'} onSubmit={handleSubmit(onSubmit)} px={1}>
      <TextField
        label='Facility Name'
        variant='outlined'
        fullWidth
        margin='normal'
        {...register('name', { required: 'Facility Name is required' })}
        error={errors.name ? true : false}
        helperText={errors.name ? errors.name.message : null}
      />
      <DialogActions sx={{ pt: 4, mb: 2 }}>
        <Button
          disabled={isSubmitting}
          type='submit'
          color='primary'
          variant='contained'
        >
          {isSubmitting ? <LoadindButton LoadingText='Adding...' /> : 'Save'}
        </Button>
      </DialogActions>
    </Stack>
  )
}

export default AddFacilityForm
