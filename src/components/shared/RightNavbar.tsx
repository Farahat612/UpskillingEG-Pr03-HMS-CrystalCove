import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/global/AuthContext'
import React from 'react'

type NavbarItem = string

interface LinksType {
  navbarItem: NavbarItem[]
}

export const Draw: React.FC<LinksType> = ({ navbarItem }) => {
  const navigate = useNavigate()
  const { auth } = useAuthContext()
  const isLogin = auth.isAuthenticated

  // Navigate to path when on click on button item
  const handleNavItemClick = (path: string) => {
    navigate(`/${path}`)
  }

  return (
    <List sx={{ color: 'rgba(21, 44, 91, 1)' }}>
      {/* condition if login or not in mobile media and loop of callback props*/}
      {isLogin ? (
        <>
          {navbarItem.map((item: string) => (
            <ListItem
              key={item}
              disablePadding
            >
              <ListItemButton
                sx={{ textAlign: 'center' }}
                onClick={() => handleNavItemClick(item)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </>
      ) : (
        <ListItemText
          sx={{
            width: 130,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            m: 'auto',
          }}
        >
          <Link to={'/'}>
            <Button>Home</Button>
          </Link>
          <Link to={'/Explore'}>
            <Button sx={{ color: '#152C5B' }}>Explore</Button>
          </Link>
          <Link to={'/register'}>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#3252DF', color: 'white', mt: 2 }}
            >
              Register
            </Button>
          </Link>
          <Link to={'/login'}>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#3252DF', color: 'white', mt: 2 }}
            >
              Login Now
            </Button>
          </Link>
        </ListItemText>
      )}
    </List>
  )
}

const RightNavbar: React.FC<LinksType> = ({ navbarItem }) => {
  const navigate = useNavigate()
  const { auth } = useAuthContext()
  const isLogin = auth.isAuthenticated

  // Navigate to path when on click on button item

  const handleNavItemClick = (path: string) => {
    navigate(`/${path}`)
  }

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
      }}
    >
      {/* condition if login or not in and loop of callback props*/}
      {isLogin ? (
        <>
          {navbarItem.map((item: string) => (
            <Button
              onClick={() => handleNavItemClick(item)}
              key={item}
              sx={{ color: 'rgba(21, 44, 91, 1)' }}
            >
              {item}
            </Button>
          ))}
        </>
      ) : (
        <>
          <Link to={'/'}>
            <Button>Home</Button>
          </Link>
          <Link to={'/Explore'}>
            <Button sx={{ color: '#152C5B' }}>Explore</Button>
          </Link>
          <Link to={'/register'}>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#3252DF', color: 'white', ml: 2 }}
            >
              Register
            </Button>
          </Link>
          <Link to={'/login'}>
            <Button
              variant='contained'
              sx={{ backgroundColor: '#3252DF', color: 'white', ml: 2 }}
            >
              Login Now
            </Button>
          </Link>
        </>
      )}
    </Box>
  )
}

export default RightNavbar
