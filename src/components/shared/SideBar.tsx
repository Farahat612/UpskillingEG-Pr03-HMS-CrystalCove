import { useState } from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { useAuthContext } from '../../contexts/global/AuthContext'

import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import PeopleIcon from '@mui/icons-material/People'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LockIcon from '@mui/icons-material/Lock'
import LogoutIcon from '@mui/icons-material/Logout'
import BookOnlineIcon from '@mui/icons-material/BookOnline'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import './../styled/Sidebar.css'

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { logout } = useAuthContext()

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <Box sx={{ minheight: '100vh' }}>
      <Sidebar className='sidebar-container' collapsed={isCollapsed}>
        <Menu>
          <MenuItem onClick={toggleCollapsed} className='toggler-icon'>
            {isCollapsed ? (
              <ChevronLeftIcon className='arrow' />
            ) : (
              <ChevronRightIcon className='arrow' />
            )}
          </MenuItem>
          <MenuItem
            icon={<HomeIcon />}
            component={<Link to='/admin' />}
            className='mt-5'
          >
            Home
          </MenuItem>
          <MenuItem
            icon={<PeopleIcon />}
            component={<Link to='/admin/users' />}
          >
            Users
          </MenuItem>
          <MenuItem
            icon={<DashboardIcon />}
            component={<Link to='/admin/rooms' />}
          >
            Rooms
          </MenuItem>
          <MenuItem
            icon={<CalendarMonthIcon />}
            component={<Link to='/admin/ads' />}
          >
            Ads
          </MenuItem>
          <MenuItem
            icon={<BookOnlineIcon />}
            component={<Link to='/admin/bookings' />}
          >
            Bookings
          </MenuItem>
          <MenuItem icon={<LockIcon />}>Change Password</MenuItem>
          <MenuItem onClick={logout} icon={<LogoutIcon />}>
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SideBar
