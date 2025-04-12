import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
} from '@mui/material';
import logo from '../Universal/logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationIcon from '@mui/icons-material/Medication';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/doctor/doctorApp/' },
  { text: 'Appointments', icon: <CalendarTodayIcon />, path: '/doctor/doctorApp/appointments' },
  { text: 'Emergencies', icon: <LocalHospitalIcon />, path: '/doctor/doctorApp/emergencies' },
  { text: 'Prescriptions', icon: <MedicationIcon />, path: '/doctor/doctorApp/prescriptions' },
  { text: 'Wellness', icon: <FavoriteIcon />, path: '/doctor/doctorApp/wellness' },
  { text: 'Communication', icon: <ChatIcon />, path: '/doctor/doctorApp/communication' },
  { text: 'Reports', icon: <BarChartIcon />, path: '/doctor/doctorApp/reports' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/doctor/doctorApp/patient-records' },
  { text: 'Log Out', icon: <Logout />, isLogout: true },
];

const DoctorSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Example: clear tokens or localStorage
    localStorage.clear();

    // Redirect to login
    navigate('/SignIn');
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 220,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#263238',
          color: '#fff',
          borderRight: 'none',
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="Logo" style={{ width: 50, marginBottom: 8 }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontWeight: "bold", marginLeft: 1 }}
        >
          Health Plus
        </Typography>
      </Box>
      <List sx={{ paddingTop: 0 }}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => item.isLogout ? handleLogout() : navigate(item.path)}
            sx={{
              '&:hover': {
                backgroundColor: '#37474f',
                cursor: 'pointer',
              },
              mb: 1,
              borderRadius: 1,
              px: 2,
            }}
          >
            <ListItemIcon sx={{ color: '#fff', minWidth: 36 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ fontSize: 14 }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default DoctorSidebar;
