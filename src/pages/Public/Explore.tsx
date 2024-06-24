import { Container, Grid, Typography } from '@mui/material'
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

  return (
    <>
      <Navbar />
      <Container>
        <Header headerName={'Explore ALL Rooms'} subtitleHeader={''} />
        <Typography mt={3} variant='h6' color={'#152C5B'}>
          All Rooms
        </Typography>

        <Grid container spacing={2} margin={'auto'} justifyContent={'center'}>
          {!loading ? (
            allRooms.map((item, index) => (
              <Grid item md={3} key={index}>
                <RoomCard item={item} />
              </Grid>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Explore
