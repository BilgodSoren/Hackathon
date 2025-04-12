import React from 'react';
import { Box, Typography, Paper, Grid, Avatar } from '@mui/material';

const mockProfile = {
  name: 'Ravi Sharma',
  age: 45,
  gender: 'Male',
  contact: '9876543210',
  address: 'Village Dholpur',
  medicalHistory: [
    'Diabetes',
    'High Blood Pressure',
    'Fracture (2021)',
  ],
  lastVisit: '2024-12-15',
};

const PatientProfile = () => {
  const profile = mockProfile;

  return (
    <Box sx={{ margin: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#1976d2', fontWeight: 600, mb: 2 }}
      >
        Patient Profile
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          backgroundColor: '#f0f4c3',
          borderRadius: 2,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: '#1976d2',
                fontSize: 32,
              }}
            >
              RS
            </Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, fontSize: '1.25rem', mb: 1 }}
              >
                {profile.name}
              </Typography>
              <Typography sx={{ mb: 0.5 }}>Age: {profile.age}</Typography>
              <Typography sx={{ mb: 0.5 }}>Gender: {profile.gender}</Typography>
              <Typography sx={{ mb: 0.5 }}>Contact: {profile.contact}</Typography>
              <Typography sx={{ mb: 0.5 }}>Address: {profile.address}</Typography>
              <Typography sx={{ mb: 1 }}>Last Visit: {profile.lastVisit}</Typography>
              <Typography
                variant="subtitle1"
                sx={{ mt: 2, fontWeight: 500 }}
              >
                Medical History:
              </Typography>
              <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                {profile.medicalHistory.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '4px' }}>
                    <Typography>{item}</Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PatientProfile;
