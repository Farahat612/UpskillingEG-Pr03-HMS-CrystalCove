import { Box, IconButton, Typography } from '@mui/material'
import { RoomImage } from '../styled/RoomImage.styled'
// import roomPicture from "../../assets/images/room.png";
import { Favorite, Visibility } from '@mui/icons-material'
import { BadgedBox, IconsBox, LayerBox, RoomName } from '../styled/RoomBoxStyle'
import { Room } from '../../types'

export default function RoomCard({ item }: { item: Room }) {
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
        <Box sx={{}}>
          <RoomImage src={item.images[0]} alt='RoomPicture' />
        </Box>
        <BadgedBox>{item.price}</BadgedBox>
        <RoomName>
          <Typography variant='h6'>{item.roomNumber}</Typography>
          <Typography>{item.capacity} Persons</Typography>
        </RoomName>
        <LayerBox>
          <IconsBox>
            <IconButton sx={{ color: '#FFFFFF' }}>
              <Favorite />
            </IconButton>
            <IconButton sx={{ color: '#FFFFFF' }}>
              <Visibility />
            </IconButton>
          </IconsBox>
        </LayerBox>
      </Box>
    </>
  )
}
