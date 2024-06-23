import { Box, Grid, Paper, Skeleton, Typography } from '@mui/material'
import {
  BedOutlined,
  Light,
  ShowerOutlined,
  TableRestaurant,
} from '@mui/icons-material'
import BookingDetails from './BookingDetails'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../../hooks/portal/useFetchDetails'

const AboutDetails = () => {
  const { id } = useParams()
  const { data, loadingDone } = useFetchDetails(`rooms/${id}`, 'room')
  return (
    <Box>
      <Grid
        container
        item
        spacing={2}
      >
        <Grid
          mt={10}
          item
          lg={8}
          md={6}
          sm={12}
          xs={12}
        >
          {/* paraghs  */}
          {/* first row of icons */}
          <Grid
            item
            container
            md={12}
            sm={12}
            spacing={2}
            m={'auto'}
          >
            <Grid
              item
              md={3}
              sm={3}
              xs={6}
            >
              <BedOutlined
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                component={'div'}
                color={`primary.main`}
                display={'flex'}
              >
                5
                <Typography
                  ml={1}
                  color={`textLight.main`}
                  variant='h6'
                >
                  bedroom
                </Typography>
              </Typography>
            </Grid>

            <Grid
              item
              md={3}
              sm={3}
              xs={6}
            >
              <Light
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                display={'flex'}
                component={'div'}
              >
                1
                <Typography
                  ml={1}
                  color={`textLight.main`}
                  variant='h6'
                >
                  livingroom
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              sm={3}
              xs={6}
            >
              <ShowerOutlined
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                display={'flex'}
                component={'div'}
              >
                1
                <Typography
                  ml={1}
                  color={`textLight.main`}
                  variant='h6'
                >
                  diningroom
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              sm={3}
              xs={6}
            >
              <TableRestaurant
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                display={'flex'}
                component={'div'}
              >
                1
                <Typography
                  ml={1}
                  color={`textLight.main`}
                  variant='h6'
                >
                  diningroom
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          {/* paper price */}
          <Grid
            item
            container
            md={12}
            mt={3}
            sm={12}
            spacing={1}
          >
            <Grid
              xs={12}
              item
            >
              <Paper sx={{ borderRadius: 3 }}>
                <Box p={5}>
                  <Typography
                    variant='h6'
                    color={`primary.dark`}
                  >
                    Price
                  </Typography>
                  {!loadingDone ? (
                    <>
                      <Typography
                        variant='h4'
                        color={`teal.main`}
                        display={'flex'}
                        component={'div'}
                      >
                        ${data.price}
                        <Typography
                          ml={1}
                          color={`textLight.main`}
                          variant='h4'
                        >
                          per night
                        </Typography>
                      </Typography>
                      <Typography
                        variant='subtitle1'
                        color={`error.light`}
                      >
                        Discount {data.discount}% Off
                      </Typography>
                    </>
                  ) : (
                    <Box>
                      <Skeleton animation='wave' />
                      <Skeleton animation='wave' />
                    </Box>
                  )}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* the right gird form Booking*/}
        <Grid
          justifyContent={'center'}
          mt={5}
          item
          container
          lg={4}
          md={6}
          sm={12}
          spacing={0}
        >
          <BookingDetails />
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutDetails
