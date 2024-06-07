import { AppBar } from '@mui/material'
import Logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom'
import UserAvatar from './UserAvatar'

const AdminNavbar = () => {
  return (
    <AppBar
      component='nav'
      color='inherit'
      sx={{
        boxShadow: 'none',
        borderBottom: '1px solid #E5E5E5',
        position: 'static',
        mb: 2,
        py: 2,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
    >
      <Link to='/admin'>
        <img src={Logo} alt='logo' width='150' />
      </Link>

      <UserAvatar />
    </AppBar>
  )
}

export default AdminNavbar
