import { DatePicker } from '@mui/x-date-pickers'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const DatePick = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  return (
    <>
      <DatePicker
        label='Pick a Date'
        value={selectedDate}
        disablePast
        onChange={(newDate) => setSelectedDate(newDate)}
        slots={{
          openPickerIcon: () => (
            <CalendarMonthIcon
              sx={{ fontSize: 30, cursor: 'pointer' }}
              color='primary'
            />
          ),
        }}
      />
    </>
  )
}

export default DatePick
