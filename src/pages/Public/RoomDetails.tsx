import { Container } from '@mui/material'
import { Navbar, Header, Footer } from '../../components/shared'
import { AboutDetails, DetailsHero, RatingDetails } from '../../components/ui'

const RoomDetails = () => {
  return (
    <>
      <Navbar  />
      <Container maxWidth='xl' sx={{ margin: 'auto' }}>
        <Header headerName='Village Angga' subtitleHeader='Bogor, Indonesia' />
        <DetailsHero />
        <AboutDetails />
        <RatingDetails />
      </Container>
      <Footer />
    </>
  )
}

export default RoomDetails
