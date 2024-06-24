import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

interface DatePickProps {
  selectedDate: Dayjs
  setSelectedDate: (date: Dayjs) => void
}

const DatePick = ({ selectedDate, setSelectedDate }: DatePickProps) => {
  return (
    <>
      <DatePicker
        label='Pick a Date'
        value={selectedDate}
        disablePast
        onChange={(newDate) => newDate && setSelectedDate(newDate)}
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
