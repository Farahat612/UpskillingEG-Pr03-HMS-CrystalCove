import { Button, Stack, Typography } from '@mui/material'
import { DatePick, CapacityButtonGroup } from '../forms_utilities'

const StartBookingForm = () => {
  return (
    <>
      <Stack direction='column' spacing={2} sx={{ pt: 2 }}>
        <Typography variant='body1' gutterBottom>
          Start Booking
        </Typography>
        <DatePick />
        <CapacityButtonGroup />
        <Button variant='contained' fullWidth>
          Book Now
        </Button>
      </Stack>
    </>
  )
}

export default StartBookingForm
