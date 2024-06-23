import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { DatePick, CapacityButtonGroup } from '../forms_utilities'

const BookingDetails = () => {
  return (
    <Paper
      elevation={1}
      sx={{ borderRadius: 3, mt: 'auto' }}
    >
      <Box sx={{ m: 5 }}>
        <Box>
          <Typography
            mb={2}
            component={'h6'}
            variant='h6'
            color={`primary.dark`}
          >
            Start Booking
          </Typography>
          <Stack
            direction='column'
            spacing={4}
          >
            <Typography
              variant='subtitle1'
              gutterBottom
              color={`primary`}
            >
              Pick a Date
            </Typography>
            <DatePick />
            <CapacityButtonGroup />
            <Box
              display={'flex'}
              gap={0.6}
              flexWrap={'wrap'}
            >
              <Typography color={`textLight.main`}>You will pay</Typography>
              <Typography color={`primary.main`}>$480 USD</Typography>
              <Typography color={`textLight.main`}>per</Typography>
              <Typography color={`primary.main`}>2 Presone</Typography>
            </Box>
            <Button
              variant='contained'
              color={`primary`}
            >
              Continue Book
            </Button>
          </Stack>
        </Box>
      </Box>
    </Paper>
  )
}

export default BookingDetails
