import { Stack, Typography } from '@mui/material'
import { StartBookingForm } from '../forms'

const LandingHeroForm = () => {
  return (
    <Stack
      sx={{
        maxWidth: 450,
      }}
    >
      <Stack direction='column' spacing={0}>
        <Typography variant='h6' fontSize={30} fontWeight={700}>
          Forget Busy Work,
        </Typography>
        <Typography variant='h6' fontSize={30} fontWeight={700} gutterBottom>
          Start Next Vacation
        </Typography>
      </Stack>

      <Stack direction='column' spacing={0} sx={{ mb: 2 }}>
        <Typography
          variant='subtitle1'
          fontSize={15}
          lineHeight={1.5}
          gutterBottom
        >
          We provide what you need to enjoy your holiday with family.
        </Typography>
        <Typography
          variant='subtitle1'
          fontSize={15}
          lineHeight={1.5}
          gutterBottom
        >
          Time to make another memorable moments.
        </Typography>
      </Stack>
      <StartBookingForm />
    </Stack>
  )
}

export default LandingHeroForm
