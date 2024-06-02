import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Img1 from '../../assets/details-hero-images/01.png'
import Img2 from '../../assets/details-hero-images/02.png'
import Img3 from '../../assets/details-hero-images/03.png'

const DetailsHero = () => {
  return (
    <Box mt={10}>
      <Grid container spacing={2}>
        <Grid item md={8} sm={12}>
          <img
            style={{
              borderRadius: '20px',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            src={Img1}
            alt='Main'
          />
        </Grid>
        <Grid item container md={4} sm={12} spacing={2}>
          <Grid item xs={6} sm={6} md={12}>
            <img
              style={{
                borderRadius: '20px',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              src={Img2}
              alt='First'
            />
          </Grid>
          <Grid item xs={6} sm={6} md={12}>
            <img
              style={{
                borderRadius: '20px',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              src={Img3}
              alt='Second'
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DetailsHero
