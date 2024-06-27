// Users.tsx
import { Box, Button, TablePagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { HeaderDashboard } from '../../components/shared'
import { CustomTable } from '../../components/ui'
import { AdminLayout } from '../../layouts'
import { User } from '../../types'

import { useFetchPaginatedData } from '../../hooks/admin/useFetchPaginatedData'
import { LoadingTable } from '../../components/shared'

const Users = () => {
  const {
    data,
    loading,
    totalCount,
    page,
    size,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useFetchPaginatedData('/admin/users', 'users')

  const columns = [
    { id: 'userName', label: 'UserName' },
    { id: 'email', label: 'Email' },
    { id: 'phoneNumber', label: 'Phone Number' },
    { id: 'country', label: 'Country' },
    { id: 'role', label: 'Role' },
  ]

  let rows: User[] = []
  if (!loading && data) {
    rows = data.map((user: User) => ({
      ...user,
    }))
  }

  const navigate = useNavigate()

  return (
    <AdminLayout>
      <HeaderDashboard
        headerTitle='Users'
        headerSubtitle='Check Details of All users in the system.'
      >
        <Button
          sx={{ py: 1.2, px: 5, borderRadius: 3 }}
          variant='contained'
          color='primary'
          onClick={() => navigate('/admin/create')}
        >
          Add New User
        </Button>
      </HeaderDashboard>

      {loading ? (
        <LoadingTable />
      ) : (
        <>
          <CustomTable
            columns={columns}
            rows={rows}
            page='users'
          />
          <Box
            display='flex'
            justifyContent='center'
            mt={2}
          >
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
