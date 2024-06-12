import { Box, IconButton, Typography } from '@mui/material'
import { RoomImage } from '../styled/RoomImage.styled'
import { BadgedBox, IconsBox, LayerBox } from '../styled/RoomBoxStyle'
import { Favorite, Visibility } from '@mui/icons-material'
interface LargeRoomProps {
  roomPicture?: string;
  price?: number;
  title?: string;
  location?: string;
}

export default function LargeRoom({ roomPicture, price, title, location }: LargeRoomProps) {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          borderRadius: "15px",
          width: "inherit",
          cursor: "pointer",
        }}>
        <RoomImage src={roomPicture} alt="RoomPicture" />
        <BadgedBox>{price} per night</BadgedBox>
        <LayerBox>
          <IconsBox>
            <IconButton sx={{ color: "#FFFFFF" }}>
              <Favorite />
            </IconButton>
            <IconButton sx={{ color: "#FFFFFF" }}>
              <Visibility />
            </IconButton>
          </IconsBox>
        </LayerBox>
      </Box>
      <Box fontSize="clamp(.5rem, 3.4vw, 1rem)">
        <Typography variant="h6" color="#152C5B">
          {title} 
        </Typography>
        <Typography color="#B0B0B0" fontSize="15px">
          {location} 
        </Typography>
      </Box>
    </Box>
  );
}
