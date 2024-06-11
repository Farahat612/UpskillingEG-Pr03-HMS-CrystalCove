import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import { HeroImage, LandingHeroForm } from '../ui'

const LandingHero = () => {
  const theme = useTheme()
  const isMedia = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Grid
      justifyContent={'center'}
      alignItems={'center'}
      container
      direction={isMedia ? 'row' : 'column'}
      mt={4}
    >
      <Grid
        md={6}
        sm={12}
        xs={12}
        item
      >
        <LandingHeroForm />
      </Grid>
      <Grid
        md={6}
        sm={12}
        item
        sx={isMedia ? { mt: 0 } : { mt: 5 }}
      >
        <Box
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HeroImage />
        </Box>
      </Grid>
    </Grid>
  )
}

export default LandingHero
