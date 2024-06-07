import { Box, Button, TablePagination } from '@mui/material'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'
import { AdminLayout } from '../../layouts'
import { Booking } from '../../types'

import { useFetchPaginatedData } from '../../hooks/admin/useFetchPaginatedData'


const Bookings = () => {
  const {
    data,
    loading,
    totalCount,
    page,
    size,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useFetchPaginatedData('/admin/booking', 'booking')
  

  const columns = [
    { id: 'roomNumber', label: 'Room Number' },
    { id: 'status', label: 'Status' },
    { id: 'totalPrice', label: 'Price' },
    { id: 'startDate', label: 'Start Date' },
    { id: 'endDate', label: 'End Date' },
  ]

  let rows: Booking[] = []
  if (!loading && data) {
    rows = data.map((booking: Booking) => ({
      ...booking,
      roomNumber: booking.room?.roomNumber ? booking.room.roomNumber : 'N/A',
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
          <CustomTable columns={columns} rows={rows} page='booking' />
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
