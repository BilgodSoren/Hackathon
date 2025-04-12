// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

// Pages
import Dashboard from "./Patient/PatientDashboard";
import PatientRecords from "./Patient/PatientRecords";
import Consultation from "./Patient/PatientConsultation";
import Emergency from "./Patient/PatientEmergency";
import MedicineTracker from "./Patient/PatientMedicineTracker";
import MentalWellness from "./Patient/PatientMentalWellness";
import HealthEducation from "./Patient/HealthEducation";
import DoctorRecords from "./Patient/DoctorRecords"; // 👈 Import this at the top
import { useLocation } from "react-router-dom";
import Navbar from "./Patient/PatientNavbar";
import Register from "./Universal/Register";
import HealthPlus from "./Admin/HealthPlus";

import Emergencies from "./Doctor/Emergencies";
import Appointments from "./Doctor/Appointments";
import PatientProfile from "./Doctor/PatientProfile";
import Prescriptions from "./Doctor/Prescriptions";
import Wellness from "./Doctor/Wellness";
import Communication from "./Doctor/Communication";
import Reports from "./Doctor/Reports";
import DoctorCredentials from "./Doctor/DoctorCredentials";
import DoctorDashboard from "./Doctor/DoctorDashboard";
import DoctorApp from "./Doctor/DoctorApp";
import DoctorSignup from "./Doctor/DoctorSignUp";
import SignIn from "./Universal/SignIn";
import PatientSignup from "./Patient/PatientSignUp";
import PatientLayout from "./Patient/PatientLayout";
import PatientConsultation from "./Patient/PatientConsultation";
import PatientEmergency from "./Patient/PatientEmergency";
import PatientDashboard from "./Patient/PatientDashboard";
import PatientMedicineTracker from "./Patient/PatientMedicineTracker";



function AppContent () {
  return (
    <Routes>
      {/* Auth/Universal */}
      <Route path="/" element={<HealthPlus />} />
      <Route path="/register" element={<Register />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/patient/signup" element={<PatientSignup />} />
      <Route path="/register/doctor/signup" element={<DoctorSignup />} />

      {/* Doctor Routes */}
      <Route path="/doctor/doctorApp/*" element={<DoctorApp />} />
      <Route path="/doctordashboard" element={<DoctorDashboard />} />
      <Route path="/doctor/credentials" element={<DoctorCredentials />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/patient-profile" element={<PatientProfile />} />
      <Route path="/emergencies" element={<Emergencies />} />
      <Route path="/prescriptions" element={<Prescriptions />} />
      <Route path="/wellness" element={<Wellness />} />
      <Route path="/communication" element={<Communication />} />
      <Route path="/reports" element={<Reports />} />

      {/* Patient Routes with Navbar on left */}
      <Route element={<PatientLayout />}>
        <Route path="/patientdashboard" element={<PatientDashboard />} />
        <Route path="/patientrecords" element={<PatientRecords />} />
        <Route path="/consultation" element={<PatientConsultation />} />
        <Route path="/emergency" element={<PatientEmergency/>} />
        <Route path="/medicinetracker" element={<PatientMedicineTracker />} />
        <Route path="/mentalwellness" element={<MentalWellness />} />
        <Route path="/healthed" element={<HealthEducation />} />
        <Route path="/doctor-records" element={<DoctorRecords />} />
      </Route>
    </Routes>
  );
}

function App(){
  return(
    <BrowserRouter>
    <AppContent />
    </BrowserRouter>
  )
}
export default App;


