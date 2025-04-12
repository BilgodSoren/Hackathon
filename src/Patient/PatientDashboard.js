import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Divider,
  Avatar,
  Button,
  Paper,
  TextField,
  Grow,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  LocalHospital,
  Medication,
  Psychology,
  Emergency,
  School,
  Chat,
  FolderShared,
  FitnessCenter,
  MonitorHeart,
  EventNote,
  Vaccines,
  Business,
  Info,
  ContactPhone,
  Email,
  LocationOn,
  Language as LanguageIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import dashboardImg from "./dashboardimg.png";
// import { useTranslation } from "react-i18next";
// import i18n from "./I18n";

export default function PatientDashboard() {
  const navigate = useNavigate();


  const features = [
    { icon: <LocalHospital fontSize="large" />, title: "Health Records", link: "/patientrecords" },
    { icon: <Medication fontSize="large" />, title: "Medicine Tracker", link: "/medicine-tracker" },
    { icon: <Psychology fontSize="large" />, title: "Mental Wellness", link: "/mentalwellness" },
    { icon: <Emergency fontSize="large" />, title: "Emergency", link: "/emergency" },
    { icon: <School fontSize="large" />, title: "Health Education", link: "/healthed" },
    { icon: <Chat fontSize="large" />, title: "Consultation", link: "/consultation" },
    { icon: <FolderShared fontSize="large" />, title: "Patient Files", link: "/patient-records" },
    { icon: <FitnessCenter fontSize="large" />, title: "Fitness Plans", link: "/fitness" },
    { icon: <MonitorHeart fontSize="large" />, title: "Vitals Monitor", link: "/vitals" },
    { icon: <EventNote fontSize="large" />, title: "Appointments", link: "/appointments" },
    { icon: <Vaccines fontSize="large" />, title: "Vaccination", link: "/vaccination" },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('/images/health-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        pb: 5,
      }}
    >
      <Container maxWidth="xl" sx={{ py: 5 }}>
        {/* Header */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f5fbff",
          }}
        >
          <Box>
            <Typography variant="h3" fontWeight="bold" color="primary.dark" gutterBottom>
              {("Welcome to the Patient Dashboard")}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {("Your health at your fingertips")}
            </Typography>
          </Box>
          <Box textAlign="right">
            <Avatar src="https://images.pexels.com/photos/30333759/pexels-photo-30333759/free-photo-of-thoughtful-woman-in-blue-dragons-hoodie-indoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" sx={{ width: 80, height: 80, boxShadow: 2, mb: 1 }} />  
           
          </Box>
        </Paper>

        {/* New Vitals Input Section */}
        <Paper elevation={2} sx={{ p: 4, borderRadius: 4, mb: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Enter Vitals
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField fullWidth label="Blood Pressure (mmHg)" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField fullWidth label="Blood Sugar (mg/dL)" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField fullWidth label="Body Weight (kg)" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField fullWidth label="SpO₂ Level (%)" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
             <Button variant="contained" color="primary" size="large" fullWidth onClick={() => alert("Vitals Submitted!")}>
                Submit Vitals
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Feature Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grow in timeout={index * 150} key={index}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Tooltip title={feature.title} arrow placement="top">
                  <Card
                    onClick={() => navigate(feature.link)}
                    sx={{
                      cursor: "pointer",
                      borderRadius: 4,
                      boxShadow: 6,
                      transition: "transform 0.3s ease",
                      backgroundImage: `url(/images/card-bg-${index % 4}.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      overflow: "hidden",
                      ":hover": {
                        transform: "translateY(-6px)",
                        boxShadow: 10,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.1))",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                      }}
                    >
                      <Box mb={2}>{feature.icon}</Box>
                      <Typography variant="subtitle1" fontWeight="bold" align="center">
                        {feature.title}
                      </Typography>
                    </Box>
                  </Card>
                </Tooltip>
              </Grid>
            </Grow>
          ))}
        </Grid>

        {/* Mid Banner */}
        <Box
          mt={6}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          sx={{ backgroundColor: "#e1f5fe", p: 4, borderRadius: 3, boxShadow: 2, margin: "10px" }}
        >
          <Grid container spacing={4} mr={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ p: 3, boxShadow: 3 }}>
                <Typography variant="h6" fontWeight="bold">Why Choose Us?</Typography>
                <Typography variant="body2" color="text.secondary">
                  Our platform prioritizes patient-centric care through accessible tools, intelligent insights, and streamlined communication.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ p: 3, boxShadow: 3 }}>
                <Typography variant="h6" fontWeight="bold">24/7 Support</Typography>
                <Typography variant="body2" color="text.secondary">
                  Our healthcare specialists and tech team are always here to assist you, ensuring peace of mind around the clock.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ p: 3, boxShadow: 3 }}>
                <Typography variant="h6" fontWeight="bold">Secure & Confidential</Typography>
                <Typography variant="body2" color="text.secondary">
                  We implement advanced security protocols to ensure your data is always safe and handled with the utmost privacy.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          <img
            src={dashboardImg}
            alt="Healthcare Banner"
            style={{
              borderRadius: "16px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              float: "right",
              width: "40%",
              height: "40%",
            }}
          />
        </Box>

        {/* Company Info */}
        <Box mt={6} p={4} borderRadius={3} bgcolor="#e1f5fe" boxShadow={2}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                <Business sx={{ verticalAlign: "middle", mr: 1 }} /> HealthPlus Technologies Pvt. Ltd.
              </Typography>
              <Typography variant="body1">
                <LocationOn sx={{ verticalAlign: "middle", mr: 1 }} /> 123 Wellness Avenue, MedCity, Healthcare State, 560001
              </Typography>
              <Typography variant="body1">
                <Email sx={{ verticalAlign: "middle", mr: 1 }} /> support@healthplus.com
              </Typography>
              <Typography variant="body1">
                <ContactPhone sx={{ verticalAlign: "middle", mr: 1 }} /> +1 (234) 567-8901
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                HealthPlus is a pioneering platform revolutionizing digital healthcare. We provide smart, integrated, and user-friendly tools to empower patients, doctors, and healthcare institutions globally with innovation-driven solutions.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Footer */}
        <Divider sx={{ my: 6 }} />
        <Box textAlign="center" py={2} color="text.secondary">
          <Info sx={{ verticalAlign: "middle", mr: 1 }} />
          <Typography variant="body2" component="span">
            © {new Date().getFullYear()} HealthPlus. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
