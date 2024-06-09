import { Button, Menu, MenuItem, Stack, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserImgPlaceHolder from '../../assets/images/userImgPlaceholder.png'
import { useAuthContext } from '../../contexts/global/AuthContext'
import { User } from '../../types'

const UserAvatar = () => {
  const { logout, currentUser } = useAuthContext()
  const currentUserData = currentUser as User

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navigate = useNavigate()

  return (
    <>
      <Stack
        direction='row'
        spacing={2}
        alignItems={'center'}
        component={'button'}
        id='user-drop-down-button'
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ border: 'none', background: 'none', cursor: 'pointer' }}
      >
        <Avatar
          // sx={{ width: 56, height: 56 }}
          alt={currentUserData ? currentUserData.userName : 'User'}
          src={
            currentUserData ? currentUserData.profileImage : UserImgPlaceHolder
          }
        />
      </Stack>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ px: 5 }} onClick={handleClose}>
          <Typography padding={1} variant='subtitle1'>
            {currentUserData ? currentUserData.userName : 'User'}
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button
            onClick={() => {
              navigate('/profile')
            }}
            sx={{ margin: 'auto' }}
          >
            Profile
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button onClick={logout} sx={{ margin: 'auto' }}>
            Logout
          </Button>
        </MenuItem>
      </Menu>
    </>
  )
}

export default UserAvatar
