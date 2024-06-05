import { IconButton, Rating, Stack, Typography } from '@mui/material'

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

const TestmonialsData = () => {
  return (
    <Stack spacing={2} ml={10} maxWidth={'100%'}>
      <Typography variant='h6' gutterBottom color={'primary.dark'} fontWeight={700}>
        Happy Family
      </Typography>

      <Rating value={5} readOnly />

      <Typography variant='h6' gutterBottom color={'primary.dark'}  >
        "We had the best week ever here. Our kids loved the pool and the beach.
        We can't wait to come back!"
      </Typography>
      <Typography variant='subtitle2'>Anga : Product Manager</Typography>

      <Stack direction='row' spacing={2}>
        <Typography variant='caption'>Stayed 07/2021</Typography>
        <Typography variant='caption'>5/5</Typography>
      </Stack>

      <Stack direction='row' spacing={2}>
        <IconButton color='primary'>
          <ArrowCircleLeftIcon />
        </IconButton>
        <IconButton color='primary'>
          <ArrowCircleRightIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default TestmonialsData
