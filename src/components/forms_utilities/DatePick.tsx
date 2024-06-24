import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

interface DatePickProps {
  date: Dayjs
  setDate: (date: Dayjs) => void
}

const DatePick = ({ date, setDate }: DatePickProps) => {
  return (
    <>
      <DatePicker
        label='Pick a Date'
        value={date}
        disablePast
        onChange={(newDate) => newDate && setDate(newDate)}
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
