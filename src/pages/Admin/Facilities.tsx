import { Box, Button, TablePagination } from '@mui/material'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'
import { AdminLayout } from '../../layouts'
import { Facility } from '../../types'

import { useFetchPaginatedData } from '../../hooks/admin/useFetchPaginatedData'

import { useModalsContext } from '../../contexts/global/ModalsContext'
import { AddItemsModal, EditItemsModal } from '../../components/modals'
import { AddOrEditFacilityForm } from '../../components/forms'

const Facilities = () => {
  const {
    data,
    loading,
    totalCount,
    page,
    size,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useFetchPaginatedData('/admin/room-facilities', 'facilities')

  const { setAddModalOpened, itemIdToEdit } = useModalsContext()

  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'owner', label: 'Owner' },
    { id: 'createdAt', label: 'Creation Date' },
  ]

  let rows: Facility[] = []
  if (!loading && data) {
    rows = data.map((facility) => ({
      ...facility,
      owner: facility.createdBy.userName,
      createdAt: new Date(facility.createdAt).toLocaleDateString(),
    }))
  }

  return (
    <AdminLayout>
      <HeaderDashboard
        headerTitle='Facilities Table Details'
        headerSubtitle='Check Details of All Facilities in the system.'
      >
        <Button
          sx={{ py: 1.2, px: 5, borderRadius: 3 }}
          variant='contained'
          color='primary'
          onClick={() => setAddModalOpened(true)}
        >
          Add New Facility
        </Button>
      </HeaderDashboard>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <CustomTable columns={columns} rows={rows} page='room-facilities' />
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

      <AddItemsModal title='Add New Facility'>
        <AddOrEditFacilityForm type='add' />
      </AddItemsModal>

      <EditItemsModal title='Edit Facility'>
        <AddOrEditFacilityForm type='edit' id={itemIdToEdit} />
      </EditItemsModal>
    </AdminLayout>
  )
}

export default Facilities
