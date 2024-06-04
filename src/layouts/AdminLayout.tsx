import { Stack } from '@mui/material'
import { SideBar } from '../components/shared'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <Stack spacing={0} direction='row' minHeight={'100vh'} height={'auto'}>
      {/* SideBar on left */}
      <SideBar />

      {/* Main Content on right */}
      <Stack
        spacing={2}
        direction='column'
        sx={{
          overflow: 'auto',
        }}
      >
        {/* Navbar */}
        <Stack spacing={0} direction='row'>
          Admin Navbar
        </Stack>

        {/* Main Content */}
        <Stack spacing={0} direction='row'>
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AdminLayout
