import { Container, Grid, Typography } from "@mui/material";
import { Footer, Header, Navbar } from "../../components/shared";
import ADSRoom from "../../components/ui/ADSRoomCard";



const Favorites = () => {
  return (
    <>
        <Navbar/>
            <Container>
                <Header headerName={'Your Favorites'} subtitleHeader={''}/>
                <Typography
                    mt={3}
                    variant='h6'
                    color={'#152C5B'}
                    >
                        Your Rooms
                </Typography>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt={1} >
                    <Grid item xs={12} sm={6} md={4}>
                        <ADSRoom/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ADSRoom/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ADSRoom/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ADSRoom/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ADSRoom/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ADSRoom/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ADSRoom/>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
    </>
  )
}

export default Favorites
