import { Box, Grid, Typography } from '@mui/material'
import {
  AirOutlined,
  BedOutlined,
  DoorSlidingOutlined,
  Light,
  LiveTv,
  NetworkWifi,
  ShowerOutlined,
  TableRestaurant,
} from '@mui/icons-material'
import BookingDetails from './BookingDetails'

const AboutDetails = () => {
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
          <Box>
            <Typography
              paragraph={true}
              color={`textLight.main`}
            >
              Minimal techno is a minimalist subgenre of techno music. It is
              characterized by a stripped-down aesthetic that exploits the use
              of repetition and understated development. Minimal techno is
              thought to have been originally developed in the early 1990s by
              Detroit-based producers Robert Hood and Daniel Bell.
            </Typography>
            <Typography
              paragraph={true}
              color={`textLight.main`}
            >
              Such trends saw the demise of the soul-infused techno that
              typified the original Detroit sound. Robert Hood has noted that he
              and Daniel Bell both realized something was missing from techno in
              the post-rave era.
            </Typography>
            <Typography
              paragraph={true}
              color={`textLight.main`}
            >
              Design is a plan or specification for the construction of an
              object or system or for the implementation of an activity or
              process, or the result of that plan or specification in the form
              of a prototype, product or process. The national agency for
              design: enabling Singapore to use design for economic growth and
              to make lives better.
            </Typography>
          </Box>
          {/* first row of icons */}
          <Grid
            display={'flex'}
            container
            md={12}
            sm={12}
            justifyContent={'center'}
            spacing={2}
          >
            <Grid
              item
              md={3}
              sm={6}
              xs={5}
            >
              <BedOutlined
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                mr={10}
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
              sm={6}
              xs={5}
            >
              <Light
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                mr={10}
                display={'flex'}
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
              sm={6}
              xs={5}
            >
              <ShowerOutlined
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                mr={10}
                display={'flex'}
              >
                3
                <Typography
                  ml={1}
                  color={`textLight.main`}
                  variant='h6'
                >
                  bathroom
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              sm={6}
              xs={5}
            >
              <TableRestaurant
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                mr={10}
                display={'flex'}
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
          {/* second row of icons */}
          <Grid
            display={'flex'}
            container
            md={12}
            mt={3}
            sm={12}
            justifyContent={'center'}
            spacing={2}
          >
            <Grid
              item
              md={3}
              sm={6}
              xs={5}
            >
              <NetworkWifi
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                mr={10}
                display={'flex'}
              >
                10
                <Typography
                  ml={1}
                  color={`textLight.main`}
                  variant='h6'
                >
                  mbp/s
                </Typography>
              </Typography>
            </Grid>

            <Grid
              item
              md={3}
              sm={6}
              xs={5}
            >
              <AirOutlined
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                mr={10}
                display={'flex'}
              >
                7
                <Typography
                  ml={1}
                  color={`textLight.main`}
                  variant='h6'
                >
                  unitready
                </Typography>
              </Typography>
            </Grid>

            <Grid
              item
              md={3}
              sm={6}
              xs={5}
            >
              <DoorSlidingOutlined
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                mr={10}
                display={'flex'}
              >
                2
                <Typography
                  ml={1}
                  color={`textLight.main`}
                  variant='h6'
                >
                  refigrator
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              sm={6}
              xs={5}
            >
              <LiveTv
                sx={{ fontSize: 40 }}
                color={'primary'}
              />
              <Typography
                variant='h6'
                color={`primary.main`}
                mr={10}
                display={'flex'}
              >
                2
                <Typography
                  ml={1}
                  color={`textLight.main`}
                  variant='h6'
                >
                  refigrator
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* the right gird form */}
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
