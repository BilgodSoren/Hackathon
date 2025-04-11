import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  useTheme,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PersonIcon from "@mui/icons-material/Person";

export default function RegistrationChoice() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: theme.palette.grey[100],
        flexDirection: "column",
        // p: 3,
      }}
    >
      {/* Heading */}
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        color={theme.palette.primary.main} 
        mb={6}
        textAlign="center"
      >
        SELECT YOUR ROLE 
      </Typography>

      {/* Flex container with row direction */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "center",
        }}
      >
        {/* Doctor Card */}
        <Card
          sx={{
            flex: 1,
            textAlign: "center",
            transition: "0.3s",
            ":hover": { boxShadow: 6 },
            bgcolor: "#e3f2fd",
            borderRadius: 4,
          }}
        >
          <Box sx={{ p: 3 }}>
            <Avatar
              sx={{
                bgcolor: "#1976d2",
                width: 60,
                height: 60,
                mx: "auto",
                mb: 2,
              }}
            >
              <LocalHospitalIcon fontSize="large" />
            </Avatar>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Doctor Registration
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={3}>
                Register as a certified medical professional to manage patient records.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/doctor-registration")}
                sx={{
                  bgcolor: "#1976d2",
                  ":hover": { bgcolor: "#115293" },
                  px: 4,
                  borderRadius: "20px",
                }}
              >
                Register as Doctor
              </Button>
            </CardContent>
          </Box>
        </Card>

        {/* Patient Card */}
        <Card
          sx={{
            flex: 1,
            textAlign: "center",
            transition: "0.3s",
            ":hover": { boxShadow: 6 },
            bgcolor: "#f3e5f5",
            borderRadius: 4,
          }}
        >
          <Box sx={{ p: 3 }}>
            <Avatar
              sx={{
                bgcolor: "#9c27b0",
                width: 60,
                height: 60,
                mx: "auto",
                mb: 2,
              }}
            >
              <PersonIcon fontSize="large" />
            </Avatar>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Patient Registration
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={3}>
                Register to access healthcare services and manage your health records.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/patient-registration")}
                sx={{
                  bgcolor: "#9c27b0",
                  ":hover": { bgcolor: "#7b1fa2" },
                  px: 4,
                  borderRadius: "20px",
                }}
              >
                Register as Patient
              </Button>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
