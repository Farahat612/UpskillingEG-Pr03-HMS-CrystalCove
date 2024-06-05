import SideBar from "./../components/shared/SideBar";
import HeaderDashbord from "./../components/shared/HeaderDashbord";
import { useTheme } from "@mui/material/styles";
import { Paper, Box } from "@mui/material";
const Rooms = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ display: "flex",height:"100vh"}}>
        <Box>
          <SideBar />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: {
              sm: `calc(${theme.spacing(8)} + 1px)`,
              xs: `calc(${theme.spacing(7)} + 1px)`,
            },
          }}>
          <HeaderDashbord
            headerTitle="Rooms Table Details"
            headerSubtitle="You can check all details"
            buttonText="Add New Room"
          />
        </Box>
      </Box>
    </>
  );
};

export default Rooms;
