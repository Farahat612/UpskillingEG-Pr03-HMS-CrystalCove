import { Stack, Divider, Typography, Paper } from '@mui/material'

import { HeroImage, TestmonialsImage } from '../ui'

const CalledComponents = () => {
  return (
    <>
      <Stack>
        <Paper sx={{ p: 2, my: 2 }} elevation={3}>
          <Typography variant='h6'>Home</Typography>
        </Paper>
        <Divider />
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Typography variant='h4' gutterBottom> Individual Elements </Typography>
          <Stack direction='row' spacing={8} sx={{ pt: 2 }}>
            <HeroImage />
            <TestmonialsImage />
          </Stack>
        </Paper>
        <Divider />
      </Stack>
    </>
  )
}

export default CalledComponents
