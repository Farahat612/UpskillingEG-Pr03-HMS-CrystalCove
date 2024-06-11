import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { DatePick, CapacityButtonGroup } from '../forms_utilities'

const BookingDetails = () => {
  return (
    <Paper elevation={1} sx={{ borderRadius: 3 }}>
      <Box sx={{ m: 7 }}>
        <Box>
          <Typography variant='h6' color={`primary.dark`}>
            Start Booking
          </Typography>
          <Typography
            variant='h4'
            color={`teal.main`}
            display={'flex'}
            component={'div'}
          >
            $280
            <Typography ml={1} color={`textLight.main`} variant='h4'>
              per night
            </Typography>
          </Typography>
          <Typography variant='subtitle1' color={`error.light`}>
            Discount 20% Off
          </Typography>

          <Stack direction='row' spacing={8} sx={{ pt: 2, mt: 5 }}>
            <Stack direction='column' spacing={2} sx={{ pt: 2 }}>
              <Typography variant='subtitle1' gutterBottom color={`primary`}>
                Pick a Date
              </Typography>
              <DatePick />
              <CapacityButtonGroup />
              <Box display={'flex'} gap={0.6} flexWrap={'wrap'}>
                <Typography color={`textLight.main`}>You will pay</Typography>
                <Typography color={`primary.main`}>$480 USD</Typography>
                <Typography color={`textLight.main`}>per</Typography>
                <Typography color={`primary.main`}>2 Presone</Typography>
              </Box>
              <Button variant='contained' color={`primary`}>
                Continue Book
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Paper>
  )
}

export default BookingDetails
