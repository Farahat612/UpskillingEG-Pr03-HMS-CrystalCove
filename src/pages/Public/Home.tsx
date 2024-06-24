import { Box, Container, Grid, Typography } from '@mui/material'
import { LandingHero } from '../../components/combined'
import { Footer, Navbar } from '../../components/shared'
import {
  LargeRoom,
  TestmonialsData,
  TestmonialsImage,
} from '../../components/ui'
import { useFetchPublicData } from '../../hooks/portal/useFetchPublicData'
import { Ad } from '../../types'

const Home = () => {
  const { data: ads, loading } = useFetchPublicData<Ad[]>('ads', 'ads')

  // Get the last 4 ads
  const recentAds = ads.slice(-4)
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
            {!loading ? (
              recentAds.map((item, index) => (
                <Grid item md={3} key={index}>
                  <LargeRoom
                    item={item}
                    
                  />
                </Grid>
              ))
            ) : (
              <div>Loading...</div>
            )}
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
