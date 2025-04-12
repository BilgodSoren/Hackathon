import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Divider,
} from "@mui/material";

export default function PatientConsultation() {
  const [form, setForm] = useState({ name: "", issue: "", mode: "Online" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consultation booked successfully!");
  };

  return (
    <Paper sx={{ margin: 4, padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Book a Consultation
      </Typography>
      <Divider sx={{ my: 2 }} />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Consultation Mode (Online/Offline)"
              name="mode"
              value={form.mode}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Describe your issue"
              name="issue"
              value={form.issue}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Submit Request
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
