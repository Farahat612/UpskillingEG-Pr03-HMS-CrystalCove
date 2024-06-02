import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/global/AuthContext'

// this component for links in mobile media
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Draw = ({ navbarItem }: any) => {
  const { auth } = useAuthContext()
  const isLogin = auth.isAuthenticated

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
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RightNavbar = ({ navbarItem }: any) => {
  const { auth } = useAuthContext()
  const isLogin = auth.isAuthenticated

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
