import BookOnlineIcon from '@mui/icons-material/BookOnline'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HomeIcon from '@mui/icons-material/Home'
import LockIcon from '@mui/icons-material/Lock'
import LogoutIcon from '@mui/icons-material/Logout'
import PeopleIcon from '@mui/icons-material/People'
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/global/AuthContext'

import { Modal } from '@mui/material'
import React from 'react'
import { ChangePass } from '../../pages/Authentication'
import {
  Drawer,
  DrawerHeader,
  ModuleChangePassStyle,
  listItemButtonStyles,
  listItemIconStyles,
  listItemStyles,
} from '../styled/Sidebarstyled'

const SideBar = () => {
  const [open, setOpen] = useState(false)
  // module open
  const [openModule, setOpenModule] = React.useState(false)
  const handleOpen = () => setOpenModule(true)
  const handleClose = () => setOpenModule(false)

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
            { text: 'Home', icon: <HomeIcon /> },
            { text: 'Users', icon: <PeopleIcon /> },
            { text: 'Rooms', icon: <DashboardIcon /> },
            { text: 'Ads', icon: <CalendarMonthIcon /> },
            { text: 'Bookings', icon: <BookOnlineIcon /> },
            { text: 'Facilities', icon: <RoomPreferencesIcon /> },
          ].map(({ text, icon }) => (
            <Link
              to={`/admin/${text}`}
              key={text}
            >
              <ListItem
                key={text}
                disablePadding
                sx={listItemButtonStyles}
              >
                <ListItemButton sx={listItemStyles}>
                  <ListItemIcon sx={listItemIconStyles}>{icon}</ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}

          <ListItem
            disablePadding
            sx={listItemButtonStyles}
            onClick={handleOpen}
          >
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
          <ListItem
            onClick={logout}
            disablePadding
            sx={listItemButtonStyles}
          >
            <ListItemButton sx={listItemStyles}>
              <ListItemIcon sx={listItemIconStyles}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary='Logout'
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        {/* module change pass */}

        <Modal
          sx={ModuleChangePassStyle}
          open={openModule}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <ChangePass closeModule={handleClose} />
        </Modal>

        {/* module change pass */}
      </Drawer>
    </Box>
  )
}

export default SideBar
