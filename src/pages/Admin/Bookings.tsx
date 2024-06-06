import { AdminLayout } from '../../layouts'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'
import { apiProtected } from '../../utils/api'
import { useEffect, useState } from 'react'
import { Booking } from '../../types'
import { useSearchParams } from 'react-router-dom'
import { Box, Button, TablePagination } from '@mui/material'

const Bookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()

  const page = parseInt(searchParams.get('page') || '1', 10) - 1
  const size = parseInt(searchParams.get('size') || '10', 10)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiProtected.get('/admin/booking', {
          params: { page: page + 1, size }, // API is 1-indexed, Mui Table Pagation is 0-indexed
        })

        setBookings(response.data.data.booking)
        setTotalCount(response.data.data.totalCount)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    fetchUsers()
  }, [page, size])

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setSearchParams({ page: (newPage + 1).toString(), size: size.toString() })
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newSize = parseInt(event.target.value, 10)
    setSearchParams({ page: '1', size: newSize.toString() })
  }

  const columns = [
    { id: 'roomNumber', label: 'Room Number' },
    { id: 'status', label: 'Status' },
    { id: 'totalPrice', label: 'Price' },
    { id: 'startDate', label: 'Start Date' },
    { id: 'endDate', label: 'End Date' },
  ]

  let rows: Booking[] = []
  if (!loading && bookings) {
    rows = bookings.map((booking: Booking) => ({
      ...booking,
      roomNumber: booking.room.roomNumber,
      startDate: new Date(booking.startDate).toLocaleDateString(),
      endDate: new Date(booking.endDate).toLocaleDateString(),
    }))
  }
  return (
    <AdminLayout>
      <HeaderDashboard
        headerTitle='Bookings Table Details'
        headerSubtitle='Check Details of All Bookings in the system.'
      >
        <Button
          sx={{ py: 1.2, px: 5, borderRadius: 3 }}
          variant='contained'
          color='primary'
        >
          Add New Booking
        </Button>
      </HeaderDashboard>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <CustomTable columns={columns} rows={rows} />
          <Box display='flex' justifyContent='center' mt={2}>
            <TablePagination
              component='div'
              count={totalCount}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={size}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </>
      )}
    </AdminLayout>
  )
}

export default Bookings
