import { AdminLayout } from '../../layouts'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'
import { apiProtected } from '../../utils/api'
import { useEffect, useState } from 'react'
import { Facility } from '../../types'
import { useSearchParams } from 'react-router-dom'
import { Box, Button, TablePagination } from '@mui/material'

const Facilities = () => {
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [loading, setLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()

  const page = parseInt(searchParams.get('page') || '1', 10) - 1
  const size = parseInt(searchParams.get('size') || '10', 10)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiProtected.get('/admin/room-facilities', {
          params: { page: page + 1, size }, // API is 1-indexed, Mui Table Pagation is 0-indexed
        })

        setFacilities(response.data.data.facilities)
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
    { id: 'name', label: 'Name' },
    { id: 'owner', label: 'Owner' },
    { id: 'createdAt', label: 'Creation Date' },
  ]

  let rows: Facility[] = []
  if (!loading && facilities) {
    rows = facilities.map((facility) => ({
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
        >
          Add New Facility
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

export default Facilities
