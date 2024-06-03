import { Button, Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";

type HeaderDashboardProps = {
  headerTitle?: string;
  headerSubtitle?: string;
  buttonText?: string;
};
const HeaderDashboard = ({ headerTitle, headerSubtitle, buttonText }: HeaderDashboardProps) => {
  return (
    <Box
      sx={{
        p: 5,
        width: "100%",
       
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Stack spacing={1}>
        <Typography variant="h4" color="text.primary">
          {headerTitle}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {headerSubtitle}
        </Typography>
      </Stack>
      <Button
        sx={{ py: 2, px: 4, borderRadius: 3, bgcolor: " #203FC7" }}
        variant="contained"
        color="primary">
        {buttonText}
      </Button>
    </Box>
  );
};

export default HeaderDashboard;
