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
          <Button component={Link} to={'/'}>
            Home
          </Button>
          <Button component={Link} to={'/Explore'} sx={{ color: '#152C5B' }}>
            Explore
          </Button>
          <Button
            component={Link}
            to={'/user/favorites'}
            sx={{ color: '#152C5B' }}
          >
            Favorites
          </Button>
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
          <Button component={Link} to={'/'}>
            Home
          </Button>
          <Button component={Link} to={'/Explore'} sx={{ color: '#152C5B' }}>
            Explore
          </Button>
          <Button
            component={Link}
            to={'/register'}
            variant='contained'
            sx={{ backgroundColor: '#3252DF', color: 'white', mt: 2 }}
          >
            Register
          </Button>
          <Button
            component={Link}
            to={'/login'}
            variant='contained'
            sx={{ backgroundColor: '#3252DF', color: 'white', mt: 2 }}
          >
            Login Now
          </Button>
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
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 2,
      }}
    >
      {/* condition if login or not in and loop of callback props*/}
      {isLogin ? (
        <>
          <Button component={Link} to={'/'}>
            Home
          </Button>
          <Button component={Link} to={'/Explore'} sx={{ color: '#152C5B' }}>
            Explore
          </Button>
          <Button
            component={Link}
            to={'/user/favorites'}
            sx={{ color: '#152C5B' }}
          >
            Favorites
          </Button>
          <UserAvatar />
        </>
      ) : (
        <>
          <Button component={Link} to={'/'}>
            Home
          </Button>
          <Button component={Link} to={'/Explore'} sx={{ color: '#152C5B' }}>
            Explore
          </Button>
          <Button
            component={Link}
            to={'/register'}
            variant='contained'
            sx={{ backgroundColor: '#3252DF', color: 'white', ml: 2 }}
          >
            Register
          </Button>
          <Button
            component={Link}
            to={'/login'}
            variant='contained'
            sx={{ backgroundColor: '#3252DF', color: 'white', ml: 2 }}
          >
            Login Now
          </Button>
        </>
      )}
    </Box>
  )
}

export default RightNavbar
