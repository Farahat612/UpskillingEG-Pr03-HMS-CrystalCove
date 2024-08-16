import { Favorite, Visibility } from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Footer, Header, Navbar } from '../../components/shared';
import { useFetchPublicData } from '../../hooks/portal/useFetchPublicData';
import { Ad } from '../../types';
import {
  BadgedBox,
  IconsBox,
  LayerBox,
  RoomName,
} from './../../components/styled/RoomBoxStyle';
import { RoomImage } from './../../components/styled/RoomImage.styled';

const AllAds = () => {
  const { data: ads, loading } = useFetchPublicData<Ad[]>('ads', 'ads');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Navbar />
      <Container>
        <Header headerName={'Explore ALL Ads'} subtitleHeader={''} />
        <Typography mt={3} variant='h6' color={'#152C5B'}>
          All Ads
        </Typography>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={2}
        >
          {!loading ? (
            ads.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.room._id}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '15px',
                    width: 'fit-content',
                    cursor: 'pointer',
                  }}
                >
                  <RoomImage src={item.room.images[0]} alt='RoomPicture' />
                  <BadgedBox>{item.room.discount}</BadgedBox>
                  <RoomName>
                    <Typography variant='h6'>{item.room.roomNumber}</Typography>
                    {/* <Typography>{item.room.facilities}</Typography> */}
                  </RoomName>
                  <LayerBox>
                    <IconsBox>
                      <IconButton sx={{ color: '#FFFFFF' }}>
                        <Favorite />
                      </IconButton>
                      <IconButton sx={{ color: '#FFFFFF' }}>
                        <Visibility />
                      </IconButton>
                    </IconsBox>
                  </LayerBox>
                </Box>
              </Grid>
            ))
          ) : (
            <>
              <Stack spacing={10} direction={matches ? 'column' : 'row'}>
                <Stack>
                  <Skeleton height={230} width={230} variant='rounded' />
                </Stack>
                <Stack>
                  <Skeleton height={230} width={230} variant='rounded' />
                </Stack>
                <Stack>
                  <Skeleton height={230} width={230} variant='rounded' />
                </Stack>
                <Stack>
                  <Skeleton height={230} width={230} variant='rounded' />
                </Stack>
              </Stack>
            </>
          )}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AllAds;
