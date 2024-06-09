import {
  Stack,
  TextField,
  DialogActions,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Divider,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { useAddData, useFetchAllData } from '../../hooks/admin'
import { LoadindButton } from '../shared'
import { Room } from '../../types'
import useEditItem from '../../hooks/admin/useEditItem'

type AddOrEditAdFormData = {
  room: string
  discount: number
  isActive: boolean
}

type AddOrEditAdFormProps = {
  type: 'add' | 'edit'
  id?: string
}

const AddOrEditAdForm = ({ type, id }: AddOrEditAdFormProps) => {
  const { data: rooms } = useFetchAllData('/admin/rooms', 'rooms')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<AddOrEditAdFormData>()

  const { addData } = useAddData({ endpoint: 'ads' })
  const { editItem } = useEditItem({ endpoint: 'ads' })

  const onSubmit = async (data: AddOrEditAdFormData) => {
    if (type === 'add') {
      await addData(data)
    } else {
      await editItem(data, id!)
    }
    reset()
  }
  return (
    <Stack
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      px={1}
      spacing={4}
    >
      {type == 'add' && (
        <FormControl fullWidth variant='outlined'>
          <InputLabel id='room'>Select Room</InputLabel>
          <Controller
            name='room'
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <Select
                {...field}
                labelId='room'
                label='Select Room'
                error={errors.room ? true : false}
              >
                {rooms.map((room: Room) => (
                  <MenuItem key={room._id} value={room._id}>
                    {room.roomNumber}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText error={errors.room ? true : false}>
            {errors.room ? errors.room.message : null}
          </FormHelperText>
        </FormControl>
      )}

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

      <FormControl fullWidth variant='outlined'>
        <InputLabel id='isActive'>Is Active</InputLabel>
        <Controller
          name='isActive'
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Select
              {...field}
              labelId='isActive'
              label='Is Active'
              error={errors.isActive ? true : false}
            >
              <MenuItem value={'true'}>Yes</MenuItem>
              <MenuItem value={'false'}>No</MenuItem>
            </Select>
          )}
        />
        <FormHelperText error={errors.isActive ? true : false}>
          {errors.isActive ? errors.isActive.message : null}
        </FormHelperText>
      </FormControl>

      <Divider />

      <DialogActions sx={{ mb: 2 }}>
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

export default AddOrEditAdForm
