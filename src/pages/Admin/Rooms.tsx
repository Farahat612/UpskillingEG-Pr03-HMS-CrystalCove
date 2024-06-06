// Users.tsx
import { AdminLayout } from '../../layouts'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'
import { apiProtected } from '../../utils/api'
import { useEffect, useState } from 'react'
import { Room } from '../../types'
import { useSearchParams } from 'react-router-dom'
import { Box, Button, TablePagination } from '@mui/material'

const Rooms = () => {
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()

  const page = parseInt(searchParams.get('page') || '1', 10) - 1
  const size = parseInt(searchParams.get('size') || '10', 10)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiProtected.get('/admin/rooms', {
          params: { page: page + 1, size }, // API is 1-indexed, adjust if needed
        })

        setRooms(response.data.data.rooms)
        setTotalCount(response.data.data.totalCount)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    fetchUsers()
  }, [page, size])

  const columns = [
    { id: 'roomNumber', label: 'Room Number' },
    { id: 'image', label: 'Image' },
    { id: 'price', label: 'Price' },
    { id: 'discount', label: 'Discount' },
    { id: 'capacity', label: 'Capacity' },
  ]

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

  let rows: Room[] = []
  if (!loading && rooms) {
    rows = rooms.map((room: Room) => ({
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
