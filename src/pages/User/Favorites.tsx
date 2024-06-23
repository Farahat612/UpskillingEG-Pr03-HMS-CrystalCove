import { Container, Grid, Typography } from '@mui/material'
import { Footer, Header, Navbar } from '../../components/shared'

import {RoomCard} from '../../components/ui'
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

  return (
    <>
      <Navbar />
      <Container>
        <Header headerName={'Your Favorites'} subtitleHeader={''} />
        <Typography mt={3} variant='h6' color={'#152C5B'}>
          Your Favorites Rooms
        </Typography>
        <Grid container spacing={2} margin={'auto'} justifyContent={'center'}>
          {!loading ? (
            favoriteRooms.map((item) =>
              item.rooms.map((room, index) => (
                <Grid item md={3} key={index}>
                  <RoomCard item={room} />
                </Grid>
              ))
            )
          ) : (
            <div>Loading...</div>
          )}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Favorites
