import {
  Stack,
  TextField,
  DialogActions,
  Button,
  MenuItem,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { useAddData, useFetchAllData } from '../../hooks/admin'
import { LoadindButton } from '../shared'
import { Room } from '../../types'

type AddAdFormData = {
  room: string
  discount: number
  isActive: boolean
}

const AddAdForm = () => {
  const { data: rooms } = useFetchAllData('/admin/rooms', 'rooms')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddAdFormData>()

  const { addData } = useAddData({ endpoint: 'ads' })

  const onSubmit = async (data: AddAdFormData) => {
    await addData(data)
    reset()
  }
  return (
    <Stack component={'form'} onSubmit={handleSubmit(onSubmit)} px={1}>
      <TextField
        select
        label='Select Room'
        margin='normal'
        {...register('room', { required: 'Room is required' })}
        error={errors.room ? true : false}
        helperText={errors.room ? errors.room.message : null}
      >
        {rooms.map((room: Room) => (
          <MenuItem key={room._id} value={room._id}>
            {room.roomNumber}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label='Discount'
        type='number'
        variant='outlined'
        fullWidth
        margin='normal'
        {...register('discount', { required: 'Discount is required' })}
        error={errors.discount ? true : false}
        helperText={errors.discount ? errors.discount.message : null}
      />

      <TextField
        select
        label='Select Active Status'
        margin='normal'
        {...register('isActive', { required: 'Active Status is required' })}
        error={errors.isActive ? true : false}
        helperText={errors.isActive ? errors.isActive.message : null}
      >
        <MenuItem key={1} value={'true'}>
          Active
        </MenuItem>
        <MenuItem key={0} value={'false'}>
          Inactive
        </MenuItem>
      </TextField>

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

export default AddAdForm
