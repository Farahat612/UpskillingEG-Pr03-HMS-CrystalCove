import { Container, Grid, Skeleton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Footer, Header, Navbar } from '../../components/shared'
import { useLocation } from 'react-router-dom'
import { RoomCard } from '../../components/ui'
import { useFetchPublicData } from '../../hooks/portal/useFetchPublicData'
import { Room } from '../../types'

const Explore = () => {
  const { state } = useLocation()
  
  const { data: allRooms, loading } = useFetchPublicData<Room[]>(
    'rooms/available',
    'rooms',
    state
  )

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Navbar />
      <Container>
        <Header headerName={'Explore ALL Rooms'} subtitleHeader={''} />
        <Typography mt={3} variant='h6' color={'#152C5B'}>
          All Rooms
        </Typography>

        <Grid container spacing={2} mt={2} justifyContent={'center'}>
          {!loading ? (
            allRooms.map((item, index) => (
              <Grid item md={3} key={index}>
                <RoomCard item={item} />
              </Grid>
            ))
          ) : (
            <>
            <Stack
              spacing={10}
              direction={matches ? 'column' : 'row'}
            >
              <Stack>
                <Skeleton
                  height={230}
                  width={230}
                  variant='rounded'
                />
              </Stack>
              <Stack>
                <Skeleton
                  height={230}
                  width={230}
                  variant='rounded'
                />
              </Stack>
              <Stack>
                <Skeleton
                  height={230}
                  width={230}
                  variant='rounded'
                />
              </Stack>
              <Stack>
                <Skeleton
                  height={230}
                  width={230}
                  variant='rounded'
                />
              </Stack>
            </Stack>
          </>
          )}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Explore