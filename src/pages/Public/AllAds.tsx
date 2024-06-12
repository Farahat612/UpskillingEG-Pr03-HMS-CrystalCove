import { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, IconButton } from "@mui/material";
import { Footer, Header, Navbar } from "../../components/shared";
import { apiPublic } from "../../utils/api";
import { RoomImage } from "./../../components/styled/RoomImage.styled";
import {
  BadgedBox,
  IconsBox,
  LayerBox,
  RoomName,
} from "./../../components/styled/RoomBoxStyle";
import { Favorite, Visibility } from "@mui/icons-material";

interface Room {
  _id: string;
  price: number;
  discount: number;
  roomNumber: string;
  images: string[];
  facilities: string[];
}

interface Ad {
  _id: string;
  isActive: boolean;
  room: Room;
}

const AllAds = () => {
  const [ads, setAds] = useState<Ad[]>([]);

  const getItem = async () => {
    try {
      const { data } = await apiPublic.get(`/portal/ads`);
      setAds(data.data.ads);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Header headerName={"Explore ALL Ads"} subtitleHeader={""} />
        <Typography mt={3} variant="h6" color={"#152C5B"}>
          All Ads
        </Typography>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={1}>
          {ads.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.room._id}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "15px",
                  width: "fit-content",
                  cursor: "pointer",
                }}>
                <RoomImage src={item.room.images[0]} alt="RoomPicture" />
                <BadgedBox>{item.room.discount}</BadgedBox>
                <RoomName>
                  <Typography variant="h6">{item.room.roomNumber}</Typography>
                  {/* <Typography>{item.room.facilities}</Typography> */}
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
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default AllAds;
