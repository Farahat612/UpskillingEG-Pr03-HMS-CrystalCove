import { Button, Stack, Typography } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { useEffect, useState } from 'react'
import { CapacityButtonGroup, DatePick } from '../forms_utilities'
import { formatDate } from '../../utils/formatDate'

const StartBookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs())
  const [capacity, setCapacity] = useState<number>(2)

  useEffect(() => {
    console.log(formatDate(selectedDate.toDate()))
  }, [selectedDate])
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
            Pick a Date
          </Typography>
        </Typography>
        <DatePick
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <Typography
          variant='h6'
          fontSize={15}
          fontWeight={700}
          color={'primary.dark'}
        >
          Capacity
        </Typography>
        <CapacityButtonGroup capacity={capacity} setCapacity={setCapacity} />
        <Button variant='contained' fullWidth>
          Explore
        </Button>
      </Stack>
    </>
  )
}

export default StartBookingForm
