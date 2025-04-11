// pages/Emergency.js
import React from "react";
import { Paper, Typography, Button, Grid, Box } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Emergency() {
  return (
    <Paper sx={{ margin: 4, padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Emergency Assistance
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center">
            <PhoneIcon color="error" sx={{ marginRight: 1 }} />
            <Typography variant="body1">
              Call Emergency: <strong>112</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center">
            <LocalHospitalIcon color="error" sx={{ marginRight: 1 }} />
            <Typography variant="body1">
              Nearest Hospital: <strong>City General Hospital</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <LocationOnIcon color="error" sx={{ marginRight: 1 }} />
            <Typography variant="body1">
              Your Current Location: <em>Detecting...</em>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="error">
            Alert Medical Team
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
