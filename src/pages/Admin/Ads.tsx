import { AdminLayout } from '../../layouts'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'
import { apiProtected } from '../../utils/api'
import { useEffect, useState } from 'react'
import { Ad } from '../../types'
import { useSearchParams } from 'react-router-dom'
import { Box, TablePagination } from '@mui/material'

const Ads = () => {
  const [ads, setAds] = useState<Ad[]>([])
  const [loading, setLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()

  const page = parseInt(searchParams.get('page') || '1', 10) - 1
  const size = parseInt(searchParams.get('size') || '10', 10)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiProtected.get('/admin/ads', {
          params: { page: page + 1, size }, // API is 1-indexed, Mui Table Pagation is 0-indexed
        })

        setAds(response.data.data.ads)
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
    { id: 'price', label: 'Price' },
    { id: 'discount', label: 'Discount' },
    { id: 'capacity', label: 'Capacity' },
    { id: 'isActive', label: 'Active Status' },
  ]

  let rows: Ad[] = []
  if (!loading && ads) {
    rows = ads.map((ad: Ad) => ({
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
        buttonText='Add New Ad'
        buttonDestination='/admin/create'
      />

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

export default Ads
