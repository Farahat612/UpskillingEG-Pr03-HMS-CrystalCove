import { Stack, TextField, DialogActions, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useAddData } from '../../hooks/admin'
import { LoadindButton } from '../shared'
import useEditItem from '../../hooks/admin/useEditItem'

type AddOrEditFacilityFormData = {
  name: string
}

type AddOrEditFacilityFormProps = {
  type: 'add' | 'edit'
  id?: string
}

const AddOrEditFacilityForm = ({ type, id }: AddOrEditFacilityFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddOrEditFacilityFormData>()

  const { addData } = useAddData({ endpoint: 'room-facilities' })
  const { editItem } = useEditItem({ endpoint: 'room-facilities' })

  const onSubmit = async (data: AddOrEditFacilityFormData) => {
    if (type === 'add') {
      await addData(data)
    } else {
      await editItem(data, id!)
    }
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
          {isSubmitting ? (
            <LoadindButton
              LoadingText={type === 'add' ? 'Adding...' : 'Editing...'}
            />
          ) : type === 'add' ? (
            'Add'
          ) : (
            'Edit'
          )}
        </Button>
      </DialogActions>
    </Stack>
  )
}

export default AddOrEditFacilityForm
