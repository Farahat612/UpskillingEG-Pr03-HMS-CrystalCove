// Users.tsx
import { Box, Button, TablePagination } from '@mui/material'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'
import { AdminLayout } from '../../layouts'
import { Room } from '../../types'

import { useFetchPaginatedData } from '../../hooks/admin/useFetchPaginatedData'

const Rooms = () => {
  const {
    data,
    loading,
    totalCount,
    page,
    size,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useFetchPaginatedData('/admin/rooms', 'rooms')

  const columns = [
    { id: 'roomNumber', label: 'Room Number' },
    { id: 'image', label: 'Image' },
    { id: 'price', label: 'Price' },
    { id: 'discount', label: 'Discount' },
    { id: 'capacity', label: 'Capacity' },
  ]

  let rows: Room[] = []
  if (!loading && data) {
    rows = data.map((room: Room) => ({
      ...room,
    }))
  }

  return (
    <AdminLayout>
      <HeaderDashboard
        headerTitle='Rooms Table Details'
        headerSubtitle='You can check all details'
      >
        <Button
          sx={{ py: 1.2, px: 5, borderRadius: 3 }}
          variant='contained'
          color='primary'
        >
          Add New Room
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

export default Rooms
