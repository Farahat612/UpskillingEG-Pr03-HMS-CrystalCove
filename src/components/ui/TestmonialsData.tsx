import { IconButton, Rating, Stack, Typography } from '@mui/material';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const TestmonialsData = () => {
  return (
    <Stack spacing={2} ml={8} maxWidth={'100%'}>
      <Typography
        variant='h6'
        gutterBottom
        color={'primary.dark'}
        fontWeight={700}
      >
        Anga's Family
      </Typography>

      <Rating value={5} readOnly />

      <Typography variant='h6' gutterBottom color={'primary.dark'}>
        "We had the best week ever here. Our kids loved the pool and the beach.
        We can't wait to come back!"
      </Typography>
      <Typography variant='subtitle1'>Anga : Product Manager</Typography>

      <Stack direction='row' spacing={2}>
        <Typography variant='subtitle2'>Stayed 07/2021</Typography>
      </Stack>
      <Typography variant='subtitle2'>Rated 5/5</Typography>
      <Stack direction='row' spacing={2}>
        <IconButton color='primary'>
          <ArrowCircleLeftIcon />
        </IconButton>
        <IconButton color='primary'>
          <ArrowCircleRightIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default TestmonialsData;
