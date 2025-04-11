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
    Paper
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
    LocationOn
  } from "@mui/icons-material";
  import { useNavigate } from "react-router-dom";

  export default function Dashboard() {
    const navigate = useNavigate();

    const features = [
      { icon: <LocalHospital fontSize="large" />, title: "Health Records", link: "/patient-records" },
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
      <Box sx={{
        background: "linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('/images/health-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        pb: 5
      }}>
        <Container maxWidth="xl" sx={{ py: 5 }}>
          {/* Header */}
          <Paper elevation={3} sx={{ p: 4, borderRadius: 4, mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f5fbff" }}>
            <Box>
              <Typography variant="h3" fontWeight="bold" color="primary.dark" gutterBottom>
                Welcome to HealthPlus Dashboard
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Navigate your digital healthcare journey with ease and precision.
              </Typography>
            </Box>
            <Avatar src="/images/logo.png" sx={{ width: 80, height: 80, boxShadow: 2 }} />
          </Paper>

          {/* Feature Grid */}
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                      boxShadow: 10
                    }
                  }}
                >
                  <Box sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff"
                  }}>
                    <Box mb={2}>{feature.icon}</Box>
                    <Typography variant="subtitle1" fontWeight="bold" align="center">
                      {feature.title}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box mt={4} display="flex" justifyContent="space-between" flexDirection={'row'} alignItems="center">
           

            <img 
              src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-93f0-61f7-8e87-9380d44b08b3/raw?se=2025-04-11T13%3A26%3A40Z&sp=r&sv=2024-08-04&sr=b&scid=958d0fda-eedb-5882-aaad-b38b73e231ee&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-11T10%3A00%3A26Z&ske=2025-04-12T10%3A00%3A26Z&sks=b&skv=2024-08-04&sig=xzfupQwi8T4i5w3GWVaKbXAf2EyqMF/WX83ymhkwLl4%3D" 
              alt="Healthcare Banner" 
              style={{ maxWidth: "50%", borderRadius: "16px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }} 
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
            <Box>

          
           
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
