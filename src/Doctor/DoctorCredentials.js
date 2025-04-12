import React from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  MenuItem,
  Paper,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import DoctorApp from "./DoctorApp";

const specialities = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "Gynecology",
  "General Physician",
];

const degrees = ["MBBS", "MD", "MS", "DO", "DM", "DNB"];

export default function DoctorCredentials() {
  return (
    <Box sx={{ backgroundColor: "#f5f8fb", py: 6, px: 2 }}>
      <Box maxWidth="lg" mx="auto">
        <Paper elevation={6} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 4 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
          >
            Doctor Registration
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid
            container
            spacing={6}
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
          >
            {/* Personal Info */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: "#e3f2fd",
                  p: 3,
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Typography variant="h6" fontWeight="medium" gutterBottom>
                  Personal Information
                </Typography>

                <Grid container spacing={2} direction="column">
                  <Grid item>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      type="tel"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item>
                    <FormControl component="fieldset" fullWidth>
                      <Typography
                        variant="subtitle1"
                        fontWeight="medium"
                        gutterBottom
                      >
                        Gender
                      </Typography>
                      <RadioGroup row name="gender" defaultValue="">
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Professional Info */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: "#fff3e0",
                  p: 3,
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Typography variant="h6" fontWeight="medium" gutterBottom>
                  Professional Information
                </Typography>

                <Grid container spacing={2} direction="column">
                  <Grid item>
                    <TextField
                      select
                      fullWidth
                      label="Specialty"
                      variant="outlined"
                      required
                      defaultValue=""
                    >
                      {specialities.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item>
                    <TextField
                      select
                      fullWidth
                      label="Degree"
                      variant="outlined"
                      required
                      defaultValue=""
                    >
                      {degrees.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item>
                    <TextField
                      fullWidth
                      label="Address"
                      multiline
                      rows={3}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item>
                    <TextField
                      fullWidth
                      label="Clinic / Hospital Name"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box textAlign="center" mt={10}>
            <Button
             component={NavLink} to="/doctor/doctorApp/*"  
            
              type="submit"
              variant="contained"
              size="small"  
              sx={{
                borderRadius: "10px",
                px: 3,
                py: 1,
                fontSize: "1rem",
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
