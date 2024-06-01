import React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/logo.png'
import { useAuthContext } from '../../contexts/global/AuthContext'

const drawerWidth = 240

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MainNavbar = ({ navbarItem }: any) => {

  // get state of login person 
  const { auth } = useAuthContext()
  const isLogin = auth.isAuthenticated

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }
// Navbar in mobile media
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      right={'right'}
      sx={{ textAlign: 'center' }}
    >
      <Typography
        variant='h6'
        sx={{ my: 2 }}
      >
        <Link to='/'>
          <img
            src={Logo}
            alt='logo'
            width='150'
          />
        </Link>
      </Typography>
      <Divider />
      <List sx={{ color: 'rgba(21, 44, 91, 1)' }}>
        {/* condition if login or not in mobile media and loop of callback props*/}
        {isLogin ? (
          <>
            {navbarItem.map((item: string) => (
              <ListItem
                key={item}
                disablePadding
              >
                <ListItemButton sx={{ textAlign: 'center' }}>
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
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component='nav'
        color='inherit'
        sx={{
          boxShadow: 'none',
          borderBottom: '1px solid #E5E5E5',
          position: 'static',
          mb: 2,
        }}
      >
        <Toolbar sx={{ p: '0 !important' }}>
          <IconButton
            color={'primary'}
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={'black'}
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
          >
            <Link to='/'>
              <img
                src={Logo}
                alt='logo'
                width='150'
              />
            </Link>
          </Typography>
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
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}
export default MainNavbar
