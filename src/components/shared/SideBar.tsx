import Box from "@mui/material/Box";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

import {
  listItemStyles,
  listItemButtonStyles,
  listItemIconStyles,
  DrawerHeader,
  Drawer,
} from "../styled/Sidebarstyled";
const SideBar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", bgcolor: "#203FC7" }}>
      <Drawer
        PaperProps={{ sx: { bgcolor: "#203FC7" } }}
        variant="permanent"
        open={open}>
        <DrawerHeader>
          <IconButton
            sx={{
              color: "#fff",
              bgcolor: "#f484ad",
              "&:hover": {
                bgcolor: "#d4698f",
              },
            }}
            onClick={handleDrawerToggle}>
            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {[
            { text: "Home", icon: <HomeIcon /> },
            { text: "Users", icon: <PeopleIcon /> },
            { text: "Rooms", icon: <DashboardIcon /> },
            { text: "Ads", icon: <CalendarMonthIcon /> },
            { text: "Bookings", icon: <BookOnlineIcon /> },
          ].map(({ text, icon }) => (
            <Link to={text} key={text}>
              <ListItem key={text} disablePadding sx={listItemButtonStyles}>
                <ListItemButton sx={listItemStyles}>
                  <ListItemIcon sx={listItemIconStyles}>{icon}</ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}

          <ListItem disablePadding sx={listItemButtonStyles}>
            <ListItemButton sx={listItemStyles}>
              <ListItemIcon sx={listItemIconStyles}>
                <LockIcon />
              </ListItemIcon>
              <ListItemText
                primary="Change Password"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={listItemButtonStyles}>
            <ListItemButton sx={listItemStyles}>
              <ListItemIcon sx={listItemIconStyles}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <List></List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
