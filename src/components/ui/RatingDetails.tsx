import {
  Box,
  Button,
  Grid,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React from 'react'
import { RateComponent } from '../styled/Rate.styled'
import { useAuthContext } from '../../contexts/global/AuthContext'
import { CommentDetails } from '.'
import useAddComments from '../../hooks/portal/useAddComments'
import { useParams } from 'react-router-dom'
import { LoadindButton } from '../shared'

const RatingDetails = () => {
  const { id } = useParams()
  // check if user is logged in
  const { auth } = useAuthContext()
  const isLogin = auth.isAuthenticated
  // For star rating
  const [value, setValue] = React.useState<number | null>(2)
  // for mobile media
  const theme = useTheme()
  const inMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useAddComments(id, 'reviews', value)
  return (
    <>
      {isLogin ? (
        <Box mt={10}>
          <Paper
            elevation={2}
            sx={{ borderRadius: 3 }}
          >
            <Grid
              container
              spacing={2}
              direction={inMobile ? 'row' : 'row'}
              p={4}
            >
              {/* border between rate in pc media or border bottom in mobile media */}
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
                    {isSubmitting ? (
                      <LoadindButton LoadingText='sending' />
                    ) : (
                      'send'
                    )}
                  </Button>
                </Stack>
              </RateComponent>
              <Grid
                item
                xs={12}
                md={6}
              >
                <CommentDetails />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ) : (
        ''
      )}
    </>
  )
}

export default RatingDetails
