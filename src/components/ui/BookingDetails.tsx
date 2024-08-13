import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { DatePick, CapacityButtonGroup } from '../forms_utilities'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { apiProtected } from '../../utils/api'
import { Room } from '../../types'
import { useNavigate } from 'react-router-dom'

const BookingDetails = ({ room }: Room) => {
  const navigate = useNavigate()

  const [capacity, setCapacity] = useState(2)
  const [startDate, setStartDate] = useState<Dayjs>(dayjs())
  const [endDate, setEndDate] = useState<Dayjs>(dayjs())

  const handleBookingClick = () => {
    try {
      apiProtected.post('/portal/booking', {
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD'),
        room: room._id,
        totalPrice: room.price * capacity,
      })

      navigate('/user/booking')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Paper elevation={1} sx={{ borderRadius: 3, mt: 'auto' }}>
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
          <Stack direction='column' spacing={4}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={2}
              justifyContent={'center'}
            >
              <Typography variant='subtitle1' gutterBottom color={`primary`}>
                Pick Start Date
              </Typography>
              <DatePick date={startDate} setDate={setStartDate} />
              <Typography variant='subtitle1' gutterBottom color={`primary`}>
                Pick End Date
              </Typography>
              <DatePick date={endDate} setDate={setEndDate} />
              <CapacityButtonGroup
                capacity={capacity}
                setCapacity={setCapacity}
              />
            </Box>
            <Box display={'flex'} gap={0.6} flexWrap={'wrap'}>
              <Typography color={`textLight.main`}>You will pay</Typography>
              <Typography color={`primary.main`}>
                ${room.price * capacity} USD
              </Typography>
              <Typography color={`textLight.main`}>per</Typography>
              <Typography color={`primary.main`}>{capacity} Presons</Typography>
            </Box>
            <Button
              variant='contained'
              color={`primary`}
              onClick={handleBookingClick}
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
