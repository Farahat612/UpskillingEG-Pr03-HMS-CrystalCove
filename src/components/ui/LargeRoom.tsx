import { Favorite } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { Ad } from '../../types';
import { BadgedBox, IconsBox, LayerBox } from '../styled/RoomBoxStyle';
import { RoomImage } from '../styled/RoomImage.styled';
interface LargeRoomProps {

  item: Ad;
}

export default function LargeRoom({item }: LargeRoomProps) {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          borderRadius: '15px',
          width: 'inherit',
          cursor: 'pointer',
        }}
      >
        <RoomImage src={item.room.images[0]} alt='RoomPicture' />
        <BadgedBox>{item.price} per night</BadgedBox>
        <LayerBox>
          <IconsBox>
            <IconButton sx={{ color: '#FFFFFF' }}>
              <Favorite />
            </IconButton>
            {/* <IconButton sx={{ color: "#FFFFFF" }}>
              <Visibility />
            </IconButton> */}
          </IconsBox>
        </LayerBox>
      </Box>
      <Box fontSize='clamp(.5rem, 3.4vw, 1rem)'>
        <Typography variant='h6' color='#152C5B'>
          {item.room.roomNumber}
        </Typography>
        
      </Box>
    </Box>
  )
}
