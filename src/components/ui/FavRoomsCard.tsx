import { Box, IconButton, Typography } from "@mui/material";
import { RoomImage } from "../styled/RoomImage.styled";
// import roomPicture from "../../assets/images/room.png";
import {
  BadgedBox,
  IconsBox,
  LayerBox,
  RoomName,
} from "../styled/RoomBoxStyle";
import { Favorite, Visibility } from "@mui/icons-material";
import { useGetAllRooms } from "../../hooks/portal/useGetAllRooms";
import { Room } from "../../types";
import { useEffect } from "react";

export default function FavRoomsCards() {
  const { data, loading } = useGetAllRooms();
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {!loading ? (
        <Box sx={{}}>
          {data.map((item: Room) => {
            return (
              <>
                <Box
                  key={Math.random()}
                  sx={{
                    position: "relative",
                    borderRadius: "15px",
                    width: "fit-content",
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{}}>
                    <RoomImage src={item.images[0]} alt="RoomPicture" />
                  </Box>
                  <BadgedBox>{item.price}</BadgedBox>
                  <RoomName>
                    <Typography variant="h6">Ocean Land</Typography>
                    <Typography>Bandung, Indonesia</Typography>
                  </RoomName>
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
              </>
            );
          })}
        </Box>
      ) : (
        "Loading"
      )}
    </>
  );
}
