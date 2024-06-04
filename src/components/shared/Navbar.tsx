import React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/logo.png'
import RightNavbar, { Draw } from './RightNavbar'

const drawerWidth = 240

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = ({ navbarItem }: any) => {
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
      {/*Pass links in mobile media */}
      <Draw navbarItem={navbarItem} />
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
        <Container
          maxWidth='xl'
          sx={{ margin: 'auto' }}
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
            {/* call  component links and pass props */}
            <RightNavbar navbarItem={navbarItem} />
          </Toolbar>
        </Container>
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
export default Navbar
