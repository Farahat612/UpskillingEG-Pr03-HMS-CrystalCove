import { Container } from '@mui/material'
import { Navbar, Header, Footer } from '../../components/shared'
import { AboutDetails, DetailsHero, RatingDetails } from '../../components/ui'

const RoomDetails = () => {
  return (
    <>
      <Navbar navbarItem={['Home', 'BrowseBy', 'Stories', 'Agents']} />
      <Container maxWidth='xl' sx={{ margin: 'auto' }}>
        <Header />
        <DetailsHero />
        <AboutDetails />
        <RatingDetails />
      </Container>
      <Footer />
    </>
  )
}

export default RoomDetails
