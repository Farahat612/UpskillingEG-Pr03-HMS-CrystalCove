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
      <Container
        maxWidth='xl'
        sx={{ margin: 'auto' }}
      >
        <LandingHero />
        {/* adc grid */}
        <Box mt={10}>
          <Typography
            mb={2}
            variant='h5'
            fontWeight={700}
            color={'primary.dark'}
          >
            Ads
          </Typography>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              md={3}
            >
              <LargeRoom />
            </Grid>
            <Grid
              item
              md={3}
            >
              <LargeRoom />
            </Grid>
            <Grid
              item
              md={3}
            >
              <LargeRoom />
            </Grid>
            <Grid
              item
              md={3}
            >
              <LargeRoom />
            </Grid>
          </Grid>
        </Box>
        {/* adc grid */}
        {/* Testmonials grid */}
        <Grid
          mt={10}
          container
          spacing={0}
          justifyContent={'center'}
        >
          <Grid
            md={2}
            sm={4}
            xs={5}
            item
          >
            <TestmonialsImage />
          </Grid>
          <Grid
            md={10}
            sm={8}
            item
          >
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
