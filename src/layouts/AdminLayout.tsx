import { Stack } from '@mui/material'
import { AdminNavbar, SideBar } from '../components/shared'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack spacing={0} direction='row' minHeight={'100vh'} height={'auto'}>
      {/* SideBar on left */}
      <SideBar />

      {/* Main Content on right */}
      <Stack
        spacing={3}
        direction='column'
        width={'100%'}
        sx={{
          overflow: 'auto',
          px: 2,
        }}
      >
        {/* Navbar */}
        <Stack spacing={0} direction='row'>
          <AdminNavbar />
        </Stack>

        {/* Main Content */}
        <Stack spacing={4} direction='column' width={'inherit'}>
          {children}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AdminLayout
