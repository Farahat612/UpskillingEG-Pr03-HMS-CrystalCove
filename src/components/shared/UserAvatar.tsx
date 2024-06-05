import Avatar from '@mui/material/Avatar'
import { useAuthContext } from '../../contexts/global/AuthContext'
import UserImgPlaceHolder from '../../assets/images/userImgPlaceholder.png'
import { Button } from '@mui/material'
import { User } from '../../types'

const UserAvatar = () => {
  const { logout, currentUser } = useAuthContext()
  const currentUserData = currentUser as User

  return (
    <>
      <Avatar
        // sx={{ width: 56, height: 56 }}
        alt='Remy Sharp'
        src={
          currentUserData ? currentUserData.profileImage : UserImgPlaceHolder
        }
      />
      <Button onClick={logout}>Logout</Button>
    </>
  )
}

export default UserAvatar
