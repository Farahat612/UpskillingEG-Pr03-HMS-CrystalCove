import {
  Stack,
  Divider,
  Typography,
  Paper,
  Container,
  Badge,
  Box,
} from "@mui/material";

import {
  HeroImage,
  TestmonialsData,
  TestmonialsImage,
  DetailsHero,
} from "../components/ui";
import { StartBookingForm } from "../components/forms";
import { DeleteModal, AddItemsModal } from "../components/modals";
import { Footer, Header, Navbar } from "../components/shared";
import { Testmonial, LandingHero } from "../components/combined";
import { ForgotPassPage } from "./1.Authentication";

import Rooms from "./Rooms";
import UnAuthorized from './../components/shared/UnAuthorized';

const Components = () => {
  return (
    <>
      <Stack sx={{ p: 2 }}>
        {/* Individual Elements */}
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Badge
            badgeContent={"saje - farahat"}
            color="success"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}>
            <Typography variant="h4" gutterBottom>
              Individual Elements
            </Typography>
          </Badge>
          <Stack direction="row" spacing={8} sx={{ pt: 2, mt: 5 }}>
            <HeroImage />
            <TestmonialsImage />
            <StartBookingForm />
            <TestmonialsData />
          </Stack>

          <Divider sx={{ my: 4 }} />

          <Badge
            badgeContent={"sherif"}
            color="success"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}>
            <Typography variant="h4" gutterBottom>
              Modals
            </Typography>
          </Badge>
          <Stack direction="row" spacing={8} sx={{ mt: 5 }}>
            <DeleteModal />
            <AddItemsModal title="Add Items">
              <Typography variant="body1" gutterBottom>
                Add your items here
              </Typography>
            </AddItemsModal>
          </Stack>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Combined Elements */}
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Badge
            badgeContent={"farahat"}
            color="success"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}>
            <Typography variant="h4" gutterBottom>
              Combined Elements
            </Typography>
          </Badge>

          <Stack direction={"column"}>
            {/* Testmonail */}
            <Stack direction="row" spacing={8} sx={{ p: 2, mt: 5 }}>
              <Badge
                badgeContent="Tetmonial"
                color="secondary"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}>
                <Paper elevation={3} sx={{ p: 5 }}>
                  <Testmonial />
                </Paper>
              </Badge>
            </Stack>

            {/* Landing Hero */}
            <Stack direction="row" spacing={8} sx={{ p: 2, mt: 5 }}>
              <Badge
                badgeContent="Landing Hero"
                color="secondary"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}>
                <Paper elevation={3} sx={{ p: 5 }}>
                  <LandingHero />
                </Paper>
              </Badge>
            </Stack>
          </Stack>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Authentication Elements */}
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Badge
            badgeContent={"Forgor-Password - asmaa"}
            color="success"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}>
            <Typography variant="h4" gutterBottom>
              Authentication Layout Example
            </Typography>
          </Badge>

          <Box>
            <ForgotPassPage mode="portal" />
          </Box>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Details Page Elements */}
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Badge
            badgeContent={"abdalrahman"}
            color="success"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}>
            <Typography variant="h4" gutterBottom>
              Details Page Elements
            </Typography>
          </Badge>
          <Stack direction="column" spacing={0} sx={{ pt: 2 }}>
            <Container maxWidth="xl" sx={{ margin: "auto" }}>
              <Navbar />
              <Header />
              <DetailsHero />
            </Container>
            <Footer />
          </Stack>
        </Paper>

        {/* sidebar */}
        <Paper sx={{ p: 2, mb: 2 }} elevation={3}>
          <Stack direction="column" spacing={0} sx={{ pt: 2 }}>
            <Container>
              {/* <Rooms /> */}
              <UnAuthorized/>
            </Container>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
};

export default Components;
