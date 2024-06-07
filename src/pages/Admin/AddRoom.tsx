import {
  Box,
  Button,
  Divider,
  MenuItem,
  Stack,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Chip,
  FormHelperText,
  Grid,
  IconButton,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { AdminLayout } from '../../layouts'
import { useForm } from 'react-hook-form'
import { useAddData, useFetchAllData } from '../../hooks/admin'
import { Controller } from 'react-hook-form'
import { useState, useEffect } from 'react'

type AddRoomFormData = {
  roomNumber: string
  price: number
  capacity: number
  discount: number
  imgs: File[]
  facilities: string[]
}

const AddRoom = () => {
  const { data: facilities } = useFetchAllData(
    '/admin/room-facilities',
    'facilities'
  )
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    setValue,
    reset,
  } = useForm<AddRoomFormData>()

  const facilityNamesById = facilities.reduce((obj, facility) => {
    obj[facility._id] = facility.name
    return obj
  }, {})

  // State to store the image previews
  const [images, setImages] = useState<File[]>([])

  // Function to handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)

      // Store the previous images and append the new ones
      setImages((prevImages) => prevImages.concat(filesArray))

      // Reset the value of the input element
      e.target.value = ''
    }
  }

  const removeImagePreview = (index: number) => {
    setImages((prevImages) => prevImages.filter((_image, i) => i !== index))
  }

  useEffect(() => {
    setValue('imgs', images)
  }, [images, setValue])

  const { addData } = useAddData({ endpoint: 'rooms' })

  const onSubmit = async (data: Omit<AddRoomFormData, 'imgs'>) => {
    const formData = new FormData()

    // Append all other fields to formData
    for (const key in data) {
      if (Array.isArray(data[key])) {
        data[key].forEach((item) => {
          formData.append(key, item)
        })
      } else {
        formData.append(key, data[key])
      }
    }
    await addData(formData)
    reset()
    setImages([])
  }

  return (
    <AdminLayout>
      <Box
        width={'100%'}
        height={'100%'}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Stack
          component={'form'}
          spacing={5}
          onSubmit={handleSubmit(onSubmit)}
          width={'100%'}
          sx={{ margin: 'auto' }}
        >
          {/* Room Number */}
          <TextField
            label='Room Number'
            variant='filled'
            fullWidth
            {...register('roomNumber', { required: 'Room Number is required' })}
            error={errors.roomNumber ? true : false}
            helperText={errors.roomNumber ? errors.roomNumber.message : null}
          />

          {/* Price and Capacity */}
          <Stack spacing={1} direction='row'>
            {/* Price */}
            <TextField
              label='Price'
              type='number'
              variant='filled'
              fullWidth
              {...register('price', { required: 'Price is required' })}
              error={errors.price ? true : false}
              helperText={errors.price ? errors.price.message : null}
            />

            {/* Capacity */}
            <TextField
              label='Capacity'
              type='number'
              variant='filled'
              fullWidth
              {...register('capacity', { required: 'Capacity is required' })}
              error={errors.capacity ? true : false}
              helperText={errors.capacity ? errors.capacity.message : null}
            />
          </Stack>

          {/* Discount and facilities */}
          <Stack spacing={1} direction='row'>
            {/* Discount */}
            <TextField
              label='Discount'
              type='number'
              variant='filled'
              fullWidth
              size='medium'
              {...register('discount', { required: 'Discount is required' })}
              error={errors.discount ? true : false}
              helperText={errors.discount ? errors.discount.message : null}
            />

            {/* Facilities */}
            <FormControl fullWidth variant='filled'>
              <InputLabel id='facilities-select-multiple'>
                Select Facilities
              </InputLabel>
              <Controller
                name='facilities'
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <Select
                    labelId='facilities-select-multiple'
                    id='demo-multiple-chip'
                    multiple
                    value={field.value}
                    onChange={field.onChange}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          // Use the facilityNamesById object to look up the name
                          <Chip key={value} label={facilityNamesById[value]} />
                        ))}
                      </Box>
                    )}
                  >
                    {facilities.map((facility) => (
                      <MenuItem key={facility._id} value={facility._id}>
                        {facility.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.facilities && (
                <FormHelperText>{errors.facilities.message}</FormHelperText>
              )}
            </FormControl>
          </Stack>

          {/* Images uploader */}
          <FormControl fullWidth variant='filled'>
            <Controller
              name='imgs'
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <Box>
                  <Button variant='contained' component='label'>
                    Upload Images
                    <input
                      accept='image/*'
                      style={{ display: 'none' }}
                      id='raised-button-file'
                      multiple
                      type='file'
                      onChange={(e) => {
                        handleFileChange(e)
                        // Update the form value with the new images array
                        field.onChange(images)
                      }}
                    />
                  </Button>
                </Box>
              )}
            />
            {errors.imgs && (
              <FormHelperText>{errors.imgs.message}</FormHelperText>
            )}
          </FormControl>

          {/* Image previews */}
          <Grid container spacing={2}>
            {images.map((image, index) => (
              <Grid item xs={2} key={index}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${index}`}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                  }}
                />
                <IconButton onClick={() => removeImagePreview(index)}>
                  <Close />
                </IconButton>
              </Grid>
            ))}
          </Grid>

          <Divider />
          {/* Save and Cancel */}
          <Stack alignSelf={'end'} spacing={5} direction='row'>
            <Button sx={{ px: 3 }} variant='outlined' onClick={() => reset()}>
              Cancel
            </Button>
            <Button
              disabled={isSubmitting}
              type='submit'
              variant='contained'
              sx={{ px: 3 }}
            >
              {isSubmitting ? 'Adding...' : 'Save'}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </AdminLayout>
  )
}

export default AddRoom
