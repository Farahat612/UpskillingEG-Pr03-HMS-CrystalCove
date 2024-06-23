import { Container } from '@mui/material'
import { Navbar, Header, Footer } from '../../components/shared'
import { AboutDetails, DetailsHero, RatingDetails } from '../../components/ui'
import { useFetchPublicData } from '../../hooks/portal/useFetchPublicData'
import { Room } from '../../types'
import { useParams } from 'react-router-dom'

const RoomDetails = () => {
  const { id } = useParams()
  const { data: item, loading } = useFetchPublicData<Room>(
    `rooms/${id}`,
    'room'
  )
  return (
    <>
      <Navbar />
      <Container maxWidth='xl' sx={{ margin: 'auto' }}>
        <Header headerName='Village Angga' subtitleHeader='Bogor, Indonesia' />
        <DetailsHero item={item as Room} loading={loading} />
        <AboutDetails />
        <RatingDetails />
      </Container>
      <Footer />
    </>
  )
}

export default RoomDetails
