import {
  BedOutlined,
  Wifi,
  PoolOutlined,
  SmokeFreeOutlined,
  Restaurant,
  FitnessCenter,
  WineBar,
} from '@mui/icons-material';
import { Box, Grid, Paper, Skeleton, Typography } from '@mui/material';
import BookingDetails from './BookingDetails';
import { Room } from '../../types';

interface AboutProps {
  item: Room;
  loading: boolean;
}

const AboutDetails = ({ item, loading }: AboutProps) => {
  return (
    <Box>
      <Grid container item spacing={2}>
        <Grid mt={10} item lg={8} md={6} sm={12} xs={12}>
          {/* paraghs  */}
          {/* first row of icons */}
          <Grid item container md={12} sm={12} spacing={2} m={'auto'}>
            <Grid item md={3} sm={3} xs={6}>
              <BedOutlined sx={{ fontSize: 33 }} />
              <Typography fontSize={21} component={'div'} display={'flex'}>
                <Typography fontSize={18}>5 Bed Rooms</Typography>
              </Typography>
            </Grid>
            <Grid item md={3} sm={3} xs={6}>
              <Wifi sx={{ fontSize: 33 }} />
              <Typography fontSize={18}>Free WiFi</Typography>
            </Grid>
            <Grid item md={3} sm={3} xs={6}>
              <Restaurant sx={{ fontSize: 31 }} />
              <Typography fontSize={18}>4 Restaurants</Typography>
            </Grid>
            <Grid item md={3} sm={3} xs={6}>
              <WineBar sx={{ fontSize: 33 }} />

              <Typography ml={1} fontSize={18}>
                Bar
              </Typography>
            </Grid>
            <Grid item md={3} sm={3} xs={6} mt={4}>
              <PoolOutlined sx={{ fontSize: 33 }} />
              <Typography fontSize={18}>2 Swimming pools</Typography>
            </Grid>
            <Grid item md={3} sm={3} xs={6} mt={4}>
              <FitnessCenter sx={{ fontSize: 33 }} />

              <Typography mr={1} fontSize={18}>
                Fitness Club
              </Typography>
            </Grid>
            <Grid item md={3} sm={3} xs={6} mt={4}>
              <SmokeFreeOutlined sx={{ fontSize: 33 }} />

              <Typography mr={1} fontSize={18}>
                Non-smoking rooms
              </Typography>
            </Grid>
          </Grid>
          {/* paper price */}
          <Grid item container md={12} mt={3} sm={12} spacing={1}>
            <Grid xs={12} item>
              <Paper sx={{ borderRadius: 3 }}>
                <Box p={5}>
                  <Typography variant='h6' color={`primary.dark`}>
                    Price
                  </Typography>
                  {!loading ? (
                    <>
                      <Typography
                        variant='h4'
                        color={`teal.main`}
                        display={'flex'}
                        component={'div'}
                      >
                        ${item.price}
                        <Typography
                          ml={1}
                          color={`textLight.main`}
                          variant='h4'
                        >
                          per night
                        </Typography>
                      </Typography>
                      <Typography variant='subtitle1' color={`error.light`}>
                        Discount {item.discount}% Off
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
          {/* @ts-expect-error: Types not matched without reasons */}
          <BookingDetails room={item} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutDetails;
