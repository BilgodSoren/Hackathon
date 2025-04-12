// components/Navbar.js
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ChatIcon from "@mui/icons-material/Chat";
import EmergencyIcon from "@mui/icons-material/Report";
import MedicationIcon from "@mui/icons-material/Medication";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Language, Logout, Settings } from "@mui/icons-material";
import { Help } from "@mui/icons-material";
// import { Help } from "@mui/icons-material";
import logo from "./logo.png";
import { useLocation } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
// import { useTranslation } from "react-i18next";
// import i18n from "../i18n"; // adjust the path if necessary




const drawerWidth = 240;

const pages = [
  { label: "Dashboard", path: "/patient", icon: <DashboardIcon /> },
  // { label: "Patient Records", path: "/patient-records", icon: <FolderSharedIcon /> },
  { label: "Doctor Records", path: "/doctor-records", icon: <PeopleAltIcon /> },
  { label: "Consultation", path: "/patient/consultation", icon: <ChatIcon /> },
  { label: "Emergency", path: "/patient/emergency", icon: <EmergencyIcon /> },
  { label: "Medicine Tracker", path: "/medicinetracker", icon: <MedicationIcon /> },
  { label: "Mental Wellness", path: "/mentalwellness", icon: <PsychologyIcon /> },
  { label: "Health Education", path: "/healthed", icon: <SchoolIcon /> },

  { text: 'Settings', icon: <SettingsIcon />, path: '/patient/patientsetting' },
  { text: 'Log Out', icon: <Logout />, isLogout: true },
  // { label: "Language",icon: <Language /> },
]



const palette = {
  background: "#0D1B26",
  text: "#F5F7FA",
  highlight: "#1B2632",
};

export default function PatientNavbar() {




  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerContent = (
    <Box>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="Logo" style={{ width: 50, marginBottom: 8 }} />
          {!isMobile && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontWeight: "bold", color: palette.text, marginLeft: 1 }}
            >
              Health Plus
            </Typography>
          )}
        </Box>
      </Toolbar>
      <List>
        {pages.map((page, index) => (
          <ListItem
            button
            key={index}
            component={page.path ? Link : "div"}
            to={page.path || "#"}
            sx={{
              color: location.pathname === page.path ? "#00e676" : palette.text,
              fontWeight: "bold",
              backgroundColor: location.pathname === page.path ? "#1e3a5f" : "transparent",
              '&:hover': { backgroundColor: palette.highlight },
            }}
            onClick={() => {
              if (isMobile) setMobileOpen(false);
            }}
          >
            <ListItemIcon sx={{ color: palette.text }}>{page.icon}</ListItemIcon>
            <ListItemText
              primary={page.label}
              primaryTypographyProps={{ fontWeight: "bold" }}
            />
          </ListItem>

        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{ position: "fixed", top: 8, left: 8, zIndex: 1301 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: palette.background,
            color: palette.text,
          },
        }}
      >

        {drawerContent}
      </Drawer>
    </Box>
  );
}
