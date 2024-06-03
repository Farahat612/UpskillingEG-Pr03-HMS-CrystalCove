import { useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./../styled/Sidebar.css";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box sx={{ height: "100vh" }}>
      <Sidebar className="sidebar-container" collapsed={isCollapsed}>
        <Menu>
          <MenuItem onClick={toggleCollapsed} className="toggler-icon">
            {isCollapsed ? (
              <ChevronLeftIcon className="arrow" />
            ) : (
              <ChevronRightIcon className="arrow" />
            )}
          </MenuItem>
          <MenuItem
            icon={<HomeIcon />}
            component={<Link to="/home" />}
            className="mt-5">
            Home
          </MenuItem>
          <MenuItem icon={<PeopleIcon />} component={<Link to="/users" />}>
            Users
          </MenuItem>
          <MenuItem icon={<DashboardIcon />} component={<Link to="/rooms" />}>
            Rooms
          </MenuItem>
          <MenuItem icon={<CalendarMonthIcon />} component={<Link to="/ads" />}>
            Ads
          </MenuItem>
          <MenuItem
            icon={<BookOnlineIcon />}
            component={<Link to="/bookings" />}>
            Bookings
          </MenuItem>
          <MenuItem icon={<LockIcon />}>Change Password</MenuItem>
          <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
