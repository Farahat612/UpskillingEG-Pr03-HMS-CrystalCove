import { Box, Button, Typography } from "@mui/material";
import notFound from "../../assets/images/8961448_3973481.jpg";
import { useNavigate } from "react-router-dom";
import "../styled/NoutFound.css";
const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <>
      <Box>
        <Box className="flex">
          <img src={notFound} alt="logo" className="NotFoundImg" />
        </Box>
        <Box>
          <Typography variant="h1">Oops!</Typography>
          <Typography variant="h4">404 - PAGE NOT FOUND.</Typography>
          <Typography variant="subtitle1">
            This Page doesn't exist or was removed! We suggest you back to home.
          </Typography>
          <Box className="flex">
            <Button onClick={handleClick}>Back To Home</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
