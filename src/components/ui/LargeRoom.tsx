import { Box, IconButton, Typography } from '@mui/material'
import { RoomImage } from '../styled/RoomImage.styled'
import largeRoomPicture from '../../assets/images/largeRoom.png'
import { BadgedBox, IconsBox, LayerBox } from '../styled/RoomBoxStyle'
import { Favorite, Visibility } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function LargeRoom() {
  const navigate = useNavigate()
  return (
    <Box
      component={'div'}
      onClick={() => navigate('/room-details/6657e5ed6ebbbefbc1a3fb05')}
    >
      <Box
        sx={{
          position: 'relative',
          borderRadius: '15px',
          width: 'inherit',
          cursor: 'pointer',
        }}
      >
        <RoomImage src={largeRoomPicture} alt='RoomPicture' />
        <BadgedBox>$856 per night</BadgedBox>
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
      <Box fontSize='clamp(.5rem, 3.4vw, 1rem)'>
        <Typography variant='h6' color='#152C5B'>
          Green Park
        </Typography>
        <Typography color='#B0B0B0' fontSize='15px'>
          Bandung, Indonesia
        </Typography>
      </Box>
    </Box>
  )
}
