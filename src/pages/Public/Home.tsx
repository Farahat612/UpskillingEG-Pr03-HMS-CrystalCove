import { Box, Container, Grid, Typography } from "@mui/material";
import { LandingHero } from "../../components/combined";
import { Footer, Navbar } from "../../components/shared";
import {
  LargeRoom,
  TestmonialsData,
  TestmonialsImage,
} from "../../components/ui";
import { apiPublic } from "../../utils/api";
import { useState, useEffect } from "react";


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




const Home = () => {
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


  // Get the last 4 ads
const lastFourAds = ads.slice(-4);
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ m: "auto" }}>
        <LandingHero />
        {/* ads grid */}
        <Box mt={10}>
          <Typography
            mb={2}
            variant="h5"
            fontWeight={700}
            color={"primary.dark"}>
            Most Popular Adds
          </Typography>
          <Grid container spacing={2} margin={"auto"} justifyContent={"center"}>
            {lastFourAds.map((item, index) => (
              <Grid item md={3} key={index}>
                <LargeRoom
                  roomPicture={item.room.images[0]}
                  price={item.room.discount}
                  title={item.room.roomNumber}
                  location={"Depok, Indonesia"}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testmonials grid */}
        <Grid
          mx={"auto"}
          mt={10}
          container
          spacing={0}
          justifyContent={"center"}>
          <Grid md={4} sm={5} xs={5} item>
            <TestmonialsImage />
          </Grid>
          <Grid md={7} sm={7} item>
            <TestmonialsData />
          </Grid>
        </Grid>
        {/* Testmonials grid */}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
