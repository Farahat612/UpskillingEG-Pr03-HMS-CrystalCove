import { Box, Stack } from '@mui/material'
import { HeroImage, LandingHeroForm } from '../ui'

const LandingHero = () => {
  return (
    <Stack direction='row' spacing={6}>
      <LandingHeroForm />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <HeroImage />
      </Box>
    </Stack>
  )
}

export default LandingHero
