import { Close, ChevronLeft, CloudUpload } from '@mui/icons-material'
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { AdminLayout } from '../../layouts'

import { useAddRoom } from '../../hooks/admin'
import { Controller } from 'react-hook-form'

const AddRoom = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    control,
    reset,
    facilityNamesById,
    handleFileChange,
    removeImagePreview,
    onSubmit,
    navigate,
    images,
    facilities,
    setImages,
  } = useAddRoom()
  return (
    <AdminLayout>
      <Box
        width={'100%'}
        minHeight={'60vh'}
        px={5}
        display='flex'
        flexDirection={'column'}
        justifyContent='center'
        alignItems='start'
      >
        {/* Back to Rooms Page Button */}
        <Button
          variant='contained'
          sx={{ width: 'fit-content', mb: 5, pr: 4 }}
          onClick={() => {
            reset()
            setImages([])
            navigate('/admin/rooms')
          }}
        >
          <ChevronLeft />
          Back to Rooms
        </Button>
        {/* Form */}
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
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '10rem',
                      border: '2px dashed #203FC7 ',
                      borderRadius: '15px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    <Button startIcon={<CloudUpload />} variant='contained'>
                      Upload Images
                    </Button>
                    <input
                      accept='image/*'
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                      }}
                      id='raised-button-file'
                      multiple
                      type='file'
                      onChange={(e) => {
                        handleFileChange(e)
                        // Update the form value with the new images array
                        field.onChange(images)
                      }}
                    />
                    <Typography>Or Drag and drop images here</Typography>
                  </Box>
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
            <Button
              sx={{ px: 3 }}
              variant='outlined'
              onClick={() => {
                reset()
                setImages([])
                navigate('/admin/rooms')
              }}
            >
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
