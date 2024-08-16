import { Typography, Stack, Rating, TextField, Button } from '@mui/material'
import { LoadindButton } from '../shared'
import { RateComponent } from '../styled/Rate.styled'
import React from 'react'
import useAddComments from '../../hooks/portal/useAddComments'
import { useParams } from 'react-router-dom'

const RatingDetails = () => {
  const { id } = useParams()
  const [value, setValue] = React.useState<number | null>(2)
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useAddComments(id, 'reviews', value)
  return (
    <RateComponent
      item
      xs={12}
      md={6}
    >
      <Typography
        variant='h6'
        color='primary.dark'
        pl={1}
      >
        Rate
      </Typography>
      {/* Form for submit data  */}
      <Stack
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography mt={1}>
          <Rating
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue)
            }}
          />
        </Typography>
        <Typography
          pb={2}
          pl={1}
          color='primary.dark'
        >
          Message
        </Typography>
        <TextField
          multiline
          variant='outlined'
          rows={8}
          sx={{ width: '100%' }}
          {...register('review', { required: 'Rate this room' })}
          error={!!errors.review}
          helperText={errors.review?.message}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          sx={{ width: '100%', mt: 2 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoadindButton LoadingText='sending' /> : 'send'}
        </Button>
      </Stack>
    </RateComponent>
  )
}

export default RatingDetails
