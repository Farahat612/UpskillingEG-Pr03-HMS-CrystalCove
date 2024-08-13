import { Container, Grid, Skeleton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Footer, Header, Navbar } from '../../components/shared'
import { RoomCard } from '../../components/ui'
import { useFetchProtectedData } from '../../hooks/portal/useFetchProtectedData'
import { Room } from '../../types'


type favoriteRoom = {
  _id: string
  rooms: Room[]
}

const Favorites = () => {
  const { data: favoriteRooms, loading } = useFetchProtectedData<
    favoriteRoom[]
  >('favorite-rooms', 'favoriteRooms')
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Navbar />
      <Container>
        <Header headerName={'Your Favorites'} subtitleHeader={''} />
        <Typography mt={3} variant='h6' color={'primary.dark'}>
          Your Favorites Rooms
        </Typography>
        <Grid container spacing={2} mt={2} justifyContent={'center'}>
          {!loading ? (
            favoriteRooms.map((item) =>
              item.rooms.map((room, index) => (
                <Grid item md={3} key={index}>
                  <RoomCard item={room} />
                </Grid>
              ))
            )
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

export default Favorites
