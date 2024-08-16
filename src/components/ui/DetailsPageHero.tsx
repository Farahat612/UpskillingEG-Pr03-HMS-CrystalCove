import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Room } from '../../types';
import { LoadingPage } from '../shared';
import { DetailsPageImage } from '../styled/img';

interface DetailsHeroProps {
  item: Room;
  loading: boolean;
}

const DetailsHero = ({ item, loading }: DetailsHeroProps) => {
  return (
    <>
      {!loading ? (
        <Box mt={6} mb={1}>
          <Grid container spacing={2} width={1400}>
            {item.images.map((img, index) => {
              return (
                <Grid
                  key={index}
                  item
                  maxHeight={400}
                  md={item.images.length >= 2 ? 6 : 12}
                  sm={12}
                >
                  <DetailsPageImage key={index + 1} src={`${img}`} alt='Main' />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default DetailsHero;
