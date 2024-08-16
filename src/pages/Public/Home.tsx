import {
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { LandingHero } from '../../components/combined';
import { Footer, Navbar } from '../../components/shared';
import {
  LargeRoom,
  TestmonialsData,
  TestmonialsImage,
} from '../../components/ui';
import { useFetchPublicData } from '../../hooks/portal/useFetchPublicData';
import { Ad } from '../../types';

const Home = () => {
  const { data: ads, loading } = useFetchPublicData<Ad[]>('ads', 'ads');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  // Get the last 4 ads
  const recentAds = ads.slice(-4);
  return (
    <>
      <Navbar />
      <Container maxWidth='xl' sx={{ m: 'auto' }}>
        <LandingHero />
        {/* ads grid */}
        <Box mt={20}>
          <Typography
            mb={6}
            variant='h5'
            fontWeight={700}
            color={'primary.dark'}
          >
            Most Popular Ads
          </Typography>
          <Grid container spacing={2} mt={'2'} justifyContent={'center'}>
            {!loading ? (
              recentAds.map((item, index) => (
                <Grid item md={3} key={index}>
                  <LargeRoom item={item} />
                </Grid>
              ))
            ) : (
              <>
                <Stack spacing={10} direction={matches ? 'column' : 'row'}>
                  <Stack>
                    <Skeleton height={300} width={300} variant='rounded' />
                    <Skeleton variant='text' width={100} />
                  </Stack>
                  <Stack>
                    <Skeleton height={300} width={300} variant='rounded' />
                    <Skeleton variant='text' width={100} />
                  </Stack>
                  <Stack>
                    <Skeleton height={300} width={300} variant='rounded' />
                    <Skeleton variant='text' width={100} />
                  </Stack>
                  <Stack>
                    <Skeleton height={300} width={300} variant='rounded' />
                    <Skeleton variant='text' width={100} />
                  </Stack>
                </Stack>
              </>
            )}
          </Grid>
        </Box>

        {/* Testmonials grid */}
        <Grid
          mx={'auto'}
          mt={20}
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
  );
};

export default Home;
