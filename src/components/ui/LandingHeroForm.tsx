import { Stack, Typography } from '@mui/material';
import { StartBookingForm } from '../forms';

const LandingHeroForm = () => {
  return (
    <Stack
      sx={{
        maxWidth: 450,
      }}
    >
      <Stack direction='column' spacing={0}>
        <Typography variant='h3' fontWeight={700} color={'primary.dark'}>
          Forget Busy Work,
        </Typography>
        <Typography
          variant='h3'
          fontWeight={700}
          gutterBottom
          color={'primary.dark'}
        >
          Start Next Vacation
        </Typography>
      </Stack>

      <Stack direction='column' spacing={0} sx={{ mb: 2 }}>
        <Typography
          color={'textLight.light'}
          variant='subtitle1'
          fontSize={16}
          lineHeight={1.5}
          gutterBottom
        >
          We provide what you need to enjoy your holiday with family.
        </Typography>
        <Typography
          color={'textLight.light'}
          variant='subtitle1'
          fontSize={16}
          lineHeight={1.5}
          gutterBottom
        >
          Time to make another memorable moments.
        </Typography>
      </Stack>
      <StartBookingForm />
    </Stack>
  );
};

export default LandingHeroForm;
