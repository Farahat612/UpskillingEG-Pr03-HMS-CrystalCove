import { Box, IconButton, Typography } from '@mui/material'
import { RoomImage } from '../styled/RoomImage.styled'
// import roomPicture from "../../assets/images/room.png";
import { Favorite, Visibility } from '@mui/icons-material'
import { BadgedBox, IconsBox, LayerBox, RoomName } from '../styled/RoomBoxStyle'
import { Room } from '../../types'
import { useNavigate } from 'react-router-dom'
import usePostData from '../../hooks/portal/usePostData'

export default function RoomCard({ item }: { item: Room }) {
  const navigate = useNavigate()

  const { addData } = usePostData({
    endpoint: 'favorite-rooms',
    successMSG: 'Room added to favorites successfully',
  })

  const addToFavorites = (id: string) => {
    addData({ roomId: id })
  }
  return (
    <>
      <Box
        key={Math.random()}
        sx={{
          position: 'relative',
          borderRadius: '15px',
          width: 'fit-content',
          cursor: 'pointer',
        }}
      >
        <Box>
          <RoomImage src={item.images[0]} alt='RoomPicture' />
        </Box>
        <BadgedBox>{item.price}</BadgedBox>
        <RoomName>
          <Typography variant='h6'>{item.roomNumber}</Typography>
          <Typography>{item.capacity} Persons</Typography>
        </RoomName>
        <LayerBox>
          <IconsBox>
            <IconButton
              sx={{ color: '#FFFFFF' }}
              onClick={() => addToFavorites(item._id)}
            >
              <Favorite />
            </IconButton>
            <IconButton
              onClick={() => navigate(`/room-details/${item._id}`)}
              sx={{ color: '#FFFFFF' }}
            >
              <Visibility />
            </IconButton>
          </IconsBox>
        </LayerBox>
      </Box>
    </>
  )
}
