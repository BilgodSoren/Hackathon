import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Container,
  useTheme,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealingIcon from "@mui/icons-material/Healing";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Logo from "../Universal/logo.png";
import PatientSignup from "../Patient/PatientSignUp";
import { NavLink } from "react-router-dom";

export default function HealthPlus() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.grey[100], minHeight: "100vh" }}>
      {/* Navbar */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <img src={Logo} alt="HealthPlus Logo" style={{ width: 60 }} />
            <Typography variant="h6" fontWeight="bold" color="primary">
              HealthPlus
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: { xs: "center", md: "flex-end" },
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Button color="primary">Home</Button>
            <Button color="primary">Services</Button>
            <Button color="primary">About</Button>
            <Button color="primary">Contact</Button>
            <Button
              variant="outlined"
              component={NavLink}
              to="/register"
              sx={{ backgroundColor: "orange", ml: { md: 1 } }}
            >
              SignUp
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
          py: { xs: 6, sm: 10 },
          textAlign: { xs: "center", sm: "left" },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to HealthPlus
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Revolutionizing Healthcare with Smart Diagnostics, Real-time Monitoring,
          and Easy Access to Expert Care.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ px: 5, borderRadius: "30px" }}
          component={NavLink}
          to="/register"
        >
          Get Started
        </Button>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color={theme.palette.primary.main}
          gutterBottom
        >
          Our Services
        </Typography>

        <Grid container spacing={4} justifyContent="center" mt={2}>
          {[
            {
              title: "Online Consultation",
              icon: <LocalHospitalIcon />,
              description:
                "Book online consultations with trusted healthcare professionals anytime, anywhere.",
              bg: "#e3f2fd",
              iconColor: "#1976d2",
            },
            {
              title: "Heart Monitoring",
              icon: <FavoriteIcon />,
              description:
                "Track your heart health and receive real-time alerts for any abnormalities.",
              bg: "#ffebee",
              iconColor: "#d32f2f",
            },
            {
              title: "Mental Wellness",
              icon: <PsychologyIcon />,
              description:
                "Access therapy resources and mental health tips to support your well-being.",
              bg: "#ede7f6",
              iconColor: "#673ab7",
            },
            {
              title: "Medicine Tracker",
              icon: <MedicalServicesIcon />,
              description:
                "Never miss a dose with our smart medicine reminder and tracker.",
              bg: "#f3e5f5",
              iconColor: "#9c27b0",
            },
          ].map((service, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={{
                  bgcolor: service.bg,
                  textAlign: "center",
                  borderRadius: 4,
                  height: "100%",
                  transition: "0.3s",
                  ":hover": { boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: service.iconColor,
                      width: 56,
                      height: 56,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {service.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Diagnostics */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color={theme.palette.primary.main}
          gutterBottom
        >
          Diagnostics We Offer
        </Typography>

        <Grid container spacing={4} justifyContent="center" mt={1}>
          {[
            {
              title: "Blood Test Reports",
              icon: <HealingIcon />,
              desc: "Access accurate and timely pathology reports online.",
            },
            {
              title: "COVID-19 Monitoring",
              icon: <HealthAndSafetyIcon />,
              desc: "Get real-time COVID-19 test updates and digital certification.",
            },
          ].map((diag, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 4,
                  ":hover": { boxShadow: 6 },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {diag.icon}
                </Avatar>
                <Typography variant="h6" fontWeight="bold">
                  {diag.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {diag.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Us */}
      <Box sx={{ bgcolor: "#f4f6f8", py: 10, px: 2 }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color={theme.palette.primary.main}
            gutterBottom
          >
            About HealthPlus
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            maxWidth="800px"
            mx="auto"
            color="text.secondary"
          >
            At HealthPlus, we believe healthcare should be smart, accessible, and empowering.
            Our platform blends technology with compassion to bring you 24/7 virtual care, real-time diagnostics,
            and health tracking features that make managing your health seamless and stress-free.
            Whether you're a patient or a provider, HealthPlus ensures you’re always connected and in control.
          </Typography>
        </Container>
      </Box>

      {/* Contact / Footer */}
      <Box sx={{ bgcolor: theme.palette.primary.dark, color: "white", py: 6 }}>
        <Container>
          <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body2" textAlign="center">
            📧 contact@healthplus.com &nbsp; | &nbsp; ☎️ +1 234 567 890 &nbsp; | &nbsp; 📍 New York, USA
          </Typography>
          <Typography variant="body2" textAlign="center" mt={2}>
            © {new Date().getFullYear()} HealthPlus. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
