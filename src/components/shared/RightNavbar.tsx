import { Box, Button, List, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/global/AuthContext'
import UserAvatar from './UserAvatar'

export const Draw = () => {
  const { auth } = useAuthContext()
  const isLogin = auth.isAuthenticated

  return (
    <List sx={{ color: 'rgba(21, 44, 91, 1)' }}>
      {/* condition if login or not in mobile media and loop of callback props*/}
      {isLogin ? (
        <Box display={'flex'} flexDirection={'column'}>
          <Link to={'/'}>
            <Button>Home</Button>
          </Link>
          <Link to={'/Explore'}>
            <Button sx={{ color: '#152C5B' }}>Explore</Button>
          </Link>
          <Link to={'/user/favorites'}>
            <Button sx={{ color: '#152C5B' }}>Favorites</Button>
          </Link>
        </Box>
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

const RightNavbar = () => {
  const { auth } = useAuthContext()
  const isLogin = auth.isAuthenticated

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex', },
        alignItems: 'center',
        gap: 2,
      }}
    >
      {/* condition if login or not in and loop of callback props*/}
      {isLogin ? (
        <>
          <Link to={'/'}>
            <Button>Home</Button>
          </Link>
          <Link to={'/Explore'}>
            <Button sx={{ color: '#152C5B' }}>Explore</Button>
          </Link>

          <Link to={'/user/favorites'}>
            <Button sx={{ color: '#152C5B' }}>Favorites</Button>
          </Link>

          <UserAvatar />
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
