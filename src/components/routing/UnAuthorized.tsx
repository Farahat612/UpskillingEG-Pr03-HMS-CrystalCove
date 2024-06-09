import unAuthImg from "../../assets/images/Unauthorized.svg";
import Box from "@mui/material/Box";


const UnAuthorized = () => {
 

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${unAuthImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}>
     
      
    </Box>
  );
};

export default UnAuthorized;
