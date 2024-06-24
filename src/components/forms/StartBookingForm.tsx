import { Button, Stack, Typography } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate'
import { CapacityButtonGroup, DatePick } from '../forms_utilities'

const StartBookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs())
  const [endDate, setEndDate] = useState<Dayjs>(dayjs().add(1, 'day'))
  const [capacity, setCapacity] = useState<number>(2)

  return (
    <>
      <Stack direction='column' spacing={2} sx={{ pt: 2 }}>
        <Typography
          variant='h6'
          component={'div'}
          color={'primary.dark'}
          fontWeight={700}
        >
          Start Booking
          <Typography
            mt={1}
            variant='h6'
            fontSize={15}
            fontWeight={700}
            color={'primary.dark'}
          >
            Start Date
          </Typography>
        </Typography>
        <DatePick date={selectedDate} setDate={setSelectedDate} />
        <Typography
          variant='h6'
          fontSize={15}
          fontWeight={700}
          color={'primary.dark'}
        >
          End Date
        </Typography>
        <DatePick date={endDate} setDate={setEndDate} />
        <Typography
          variant='h6'
          fontSize={15}
          fontWeight={700}
          color={'primary.dark'}
        >
          Capacity
        </Typography>
        <CapacityButtonGroup capacity={capacity} setCapacity={setCapacity} />
        <Button
          component={Link}
          to={'/explore'}
          state={{
            startDate: formatDate(selectedDate.toDate()),
            endDate: formatDate(endDate.toDate()),
            capacity,
          }}
          variant='contained'
          fullWidth
        >
          Explore
        </Button>
      </Stack>
    </>
  )
}

export default StartBookingForm
