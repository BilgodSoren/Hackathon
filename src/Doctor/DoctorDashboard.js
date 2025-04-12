import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
} from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const stats = [
  {
    title: 'Today’s Appointments',
    value: 12,
    icon: <EventNoteIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
  },
  {
    title: 'Pending Follow-ups',
    value: 5,
    icon: <AssignmentLateIcon sx={{ fontSize: 40, color: '#f57c00' }} />,
  },
  {
    title: 'Active Emergencies',
    value: 2,
    icon: <WarningAmberIcon sx={{ fontSize: 40, color: '#d32f2f' }} />,
  },
  {
    title: 'Prescriptions Today', 
    value: 8,
    icon: <LocalPharmacyIcon sx={{ fontSize: 40, color: '#388e3c' }} />,
  },
];

const DoctorDashboard = () => {
  return (
    <Box sx={{ height: '100vh', bgcolor: '#f0f4f8' }}>
      {/* Top Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Doctor Dashboard
          </Typography>
          <IconButton>
            <Avatar alt="Doctor" src="/doctor-profile.png" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Dashboard Content */}
      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
          Welcome back, Doctor!
        </Typography>

        <Grid container spacing={3}>
          {stats.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Paper
                elevation={6}
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box sx={{ mb: 1 }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 500 }}>
                  {item.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  {item.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DoctorDashboard;
