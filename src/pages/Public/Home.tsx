import { Box, Container, Grid, Typography } from '@mui/material'
import { LandingHero } from '../../components/combined'
import { Footer, Navbar } from '../../components/shared'
import {
  LargeRoom,
  TestmonialsData,
  TestmonialsImage,
} from '../../components/ui'
const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='xl' sx={{ m: 'auto' }}>
        <LandingHero />
        {/* ads grid */}
        <Box mt={10}>
          <Typography
            mb={2}
            variant='h5'
            fontWeight={700}
            color={'primary.dark'}
          >
            Most Popular Adds
          </Typography>
          <Grid container spacing={2} margin={'auto'} justifyContent={'center'}>
            <Grid item md={3}>
              <LargeRoom />
            </Grid>
            <Grid item md={3}>
              <LargeRoom />
            </Grid>
            <Grid item md={3}>
              <LargeRoom />
            </Grid>
            <Grid item md={3}>
              <LargeRoom />
            </Grid>
          </Grid>
        </Box>

        {/* Testmonials grid */}
        <Grid
          mx={'auto'}
          mt={10}
          container
          spacing={0}
          justifyContent={'center'}
        >
          <Grid md={4} sm={5} xs={5} item>
            <TestmonialsImage />
          </Grid>
          <Grid md={7} sm={7} item>
            <TestmonialsData />
          </Grid>
        </Grid>
        {/* Testmonials grid */}
      </Container>
      <Footer />
    </>
  )
}

export default Home
