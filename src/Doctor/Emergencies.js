import React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';

const emergencies = [
  {
    id: 'EMG001',
    patient: 'Ravi Sharma',
    condition: 'Severe Chest Pain',
    contact: '9876543210',
    location: 'Village Dholpur',
    time: '10:45 AM',
  },
  {
    id: 'EMG002',
    patient: 'Sita Verma',
    condition: 'High Fever & Dehydration',
    contact: '9834567890',
    location: 'Block Bhilwara',
    time: '11:10 AM',
  },
  {
    id: 'EMG003',
    patient: 'Amit Yadav',
    condition: 'Unconscious after fall',
    contact: '9823456789',
    location: 'Ward 12, Kota',
    time: '11:25 AM',
  },
  {
    id: 'EMG004',
    patient: 'Sunita Mishra',
    condition: 'Seizure Episode',
    contact: '9812345670',
    location: 'Tehsil Ramganj',
    time: '11:40 AM',
  },
  {
    id: 'EMG005',
    patient: 'Mohan Das',
    condition: 'Severe Allergic Reaction',
    contact: '9845671230',
    location: 'Village Bikaner',
    time: '11:55 AM',
  },
  {
    id: 'EMG006',
    patient: 'Rekha Sharma',
    condition: 'Breathing Difficulty',
    contact: '9871234567',
    location: 'Block Alwar',
    time: '12:10 PM',
  },
];

const Emergencies = () => {
  return (
    <Box
      sx={{
        p: 3,
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        bgcolor: '#fff8f8',
        overflowY: 'auto',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 600, color: '#d32f2f', mb: 3 }}
      >
        Emergency Cases
      </Typography>

      <Grid container spacing={3}>
        {emergencies.map((caseItem) => (
          <Grid item xs={12} md={6} lg={4} key={caseItem.id}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderLeft: '6px solid #d32f2f',
                backgroundColor: '#fff3f3',
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                Patient: {caseItem.patient}
              </Typography>
              <Typography sx={{ mb: 0.5 }}>
                <strong>Condition:</strong> {caseItem.condition}
              </Typography>
              <Typography sx={{ mb: 0.5 }}>
                <strong>Contact:</strong> {caseItem.contact}
              </Typography>
              <Typography sx={{ mb: 0.5 }}>
                <strong>Location:</strong> {caseItem.location}
              </Typography>
              <Typography sx={{ mb: 1 }}>
                <strong>Time Reported:</strong> {caseItem.time}
              </Typography>
              <Button
                variant="contained"
                color="error"
                sx={{ mt: 1, textTransform: 'none' }}
              >
                Respond Now
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Emergencies;
