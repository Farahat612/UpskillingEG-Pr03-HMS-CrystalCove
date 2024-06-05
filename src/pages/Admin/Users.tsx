// Users.tsx
import { AdminLayout } from '../../layouts'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'
import { apiProtected } from '../../utils/api'
import { useEffect, useState } from 'react'
import { User } from '../../types'
import { useSearchParams } from 'react-router-dom'
import { Box, TablePagination } from '@mui/material'

const Users = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()

  const page = parseInt(searchParams.get('page') || '1', 10) - 1
  const size = parseInt(searchParams.get('size') || '10', 10)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiProtected.get('/admin/users', {
          params: { page: page + 1, size }, // API is 1-indexed, Mui Table Pagation is 0-indexed
        })

        setUsers(response.data.data.users)
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
    { id: 'userName', label: 'UserName' },
    { id: 'email', label: 'Email' },
    { id: 'phoneNumber', label: 'Phone Number' },
    { id: 'country', label: 'Country' },
    { id: 'role', label: 'Role' },
  ]
  
  let rows: User[] = []
  if (!loading && users) {
    rows = users.map((user: User) => ({
      ...user
    }))
  }

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

  return (
    <AdminLayout>
      <HeaderDashboard
        headerTitle='Users'
        headerSubtitle='Check Details of All users in the system.'
        buttonText='Add New User'
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

export default Users
