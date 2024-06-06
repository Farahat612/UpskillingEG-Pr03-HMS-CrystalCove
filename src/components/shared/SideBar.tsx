import Box from '@mui/material/Box'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import PeopleIcon from '@mui/icons-material/People'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences'
import LockIcon from '@mui/icons-material/Lock'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/global/AuthContext'

import {
  listItemStyles,
  listItemButtonStyles,
  listItemIconStyles,
  DrawerHeader,
  Drawer,
} from '../styled/Sidebarstyled'

const SideBar = () => {
  const [open, setOpen] = useState(true)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }
  const { logout } = useAuthContext()
  return (
    <Box sx={{ display: 'flex', bgcolor: '#203FC7' }}>
      <Drawer
        PaperProps={{ sx: { bgcolor: '#203FC7', height: '100vh' } }}
        variant='permanent'
        open={open}
      >
        <DrawerHeader>
          <IconButton
            sx={{
              color: '#fff',
              bgcolor: '#f484ad',
              '&:hover': {
                bgcolor: '#d4698f',
              },
            }}
            onClick={handleDrawerToggle}
          >
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {[
            { text: 'Dashboard', icon: <HomeIcon /> },
            { text: 'Users', icon: <PeopleIcon /> },
            { text: 'Rooms', icon: <DashboardIcon /> },
            { text: 'Ads', icon: <CalendarMonthIcon /> },
            { text: 'Bookings', icon: <FactCheckIcon /> },
            { text: 'Facilities', icon: <RoomPreferencesIcon /> },
          ].map(({ text, icon }) => (
            <Link to={`/admin/${text}`} key={text}>
              <ListItem key={text} disablePadding sx={listItemButtonStyles}>
                <ListItemButton sx={listItemStyles}>
                  <ListItemIcon sx={listItemIconStyles}>{icon}</ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}

          <ListItem disablePadding sx={listItemButtonStyles}>
            <ListItemButton sx={listItemStyles}>
              <ListItemIcon sx={listItemIconStyles}>
                <LockIcon />
              </ListItemIcon>
              <ListItemText
                primary='Change Password'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={logout} disablePadding sx={listItemButtonStyles}>
            <ListItemButton sx={listItemStyles}>
              <ListItemIcon sx={listItemIconStyles}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List></List>
      </Drawer>
    </Box>
  )
}

export default SideBar
