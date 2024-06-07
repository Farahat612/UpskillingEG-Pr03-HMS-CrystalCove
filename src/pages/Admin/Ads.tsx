import { Box, Button, TablePagination } from '@mui/material'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'
import { AdminLayout } from '../../layouts'
import { Ad } from '../../types'

import { useFetchPaginatedData } from '../../hooks/admin/useFetchPaginatedData'

import { useModalsContext } from '../../contexts/global/ModalsContext'
import { AddItemsModal, EditItemsModal } from '../../components/modals'
import { AddAdForm } from '../../components/forms'

const Ads = () => {
  const {
    data,
    loading,
    totalCount,
    page,
    size,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useFetchPaginatedData('/admin/ads', 'ads')

  const { setAddModalOpened } = useModalsContext()

  const columns = [
    { id: 'roomNumber', label: 'Room Number' },
    { id: 'price', label: 'Price' },
    { id: 'discount', label: 'Discount' },
    { id: 'capacity', label: 'Capacity' },
    { id: 'isActive', label: 'Active Status' },
  ]

  let rows: Ad[] = []
  if (!loading && data) {
    rows = data.map((ad: Ad) => ({
      ...ad,
      isActive: ad.isActive ? 'Active' : 'Inactive',
      price: ad.room.price,
      discount: ad.room.discount,
      capacity: ad.room.capacity,
      roomNumber: ad.room.roomNumber,
    }))
  }
  return (
    <AdminLayout>
      <HeaderDashboard
        headerTitle='Ads Table Details'
        headerSubtitle='Check Details of All Ads in the system.'
      >
        <Button
          sx={{ py: 1.2, px: 5, borderRadius: 3 }}
          variant='contained'
          color='primary'
          onClick={() => setAddModalOpened(true)}
        >
          Add New Ad
        </Button>
      </HeaderDashboard>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <CustomTable columns={columns} rows={rows} page='ads' />
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

      <AddItemsModal title='Add New Ad'>
        <AddAdForm />
      </AddItemsModal>

      <EditItemsModal title='Edit Ad'>
        <AddAdForm />
      </EditItemsModal>
    </AdminLayout>
  )
}

export default Ads
