import { Box, Button, Typography } from "@mui/material";
import notFound from "../../assets/images/8961448_3973481.jpg";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <Box display={'flex'} justifyContent={"center"} alignContent={'center'}>
      <Box  width={700} height={450} >
        <Box >
          <img src={notFound} alt="logo" width={'100%'} height={'100%'} />
        </Box>
        <Box textAlign={'center'}>
          <Typography variant="h1" color={'primary.main'} textAlign={'center'} fontWeight={700}>Oops!</Typography>
          <Typography variant="h4" fontWeight={700} my={2}>404 - PAGE NOT FOUND.</Typography>
          <Typography variant="h6" color={'textLight.main'}>
            This Page doesn't exist or was removed! We suggest you back to home.
          </Typography>
          <Box mt={2}>
            <Button onClick={handleClick} variant="contained" >Back To Home</Button>
          </Box>
        </Box>
      </Box>
    </Box >
  );
};

export default NotFound;
