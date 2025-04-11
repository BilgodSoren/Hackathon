// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Signup from "./SignUp/SignUp";
// Pages
import Dashboard from "./pages/Dashboard";
import PatientRecords from "./pages/PatientRecords";
import Consultation from "./pages/Consultation";
import Emergency from "./pages/Emergency";
import MedicineTracker from "./pages/MedicineTracker";
import MentalWellness from "./pages/MentalWellness";
import HealthEducation from "./pages/HealthEducation";
import DoctorRecords from "./pages/DoctorRecords"; // 👈 Import this at the top
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function AppContent () {
  const location = useLocation();

  const showNavbar = () => [
    "/",
    "/patient-records",
    "/consultation",
    "/emergency",
    "/medicine-tracker",
    "/mentalwellness",
    "/healthed",
    "/doctor-records",
  ]
    .some((path) => location.pathname.includes(path));
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/patient-records" element={<PatientRecords />} />
      <Route path="/consultation" element={<Consultation />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/medicine-tracker" element={<MedicineTracker />} />
      <Route path="/mentalwellness" element={<MentalWellness />} />
      <Route path="/healthed" element={<HealthEducation />} />
      <Route path="/doctor-records" element={<DoctorRecords />} />
      <Route path="/register" element={<Register />} />


    </Routes>
     </>
  )
}
function App(){
  return(
    <BrowserRouter>
    <AppContent />
    </BrowserRouter>
  )
}
export default App;


// Components




// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#dc004e",
//     },
//   },
// });

// export default function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Box
//           sx={{
//             display: "flex",
//             height: "100vh",          // Full height
//             width: "100vw",           // Full width
//             // overflow: "hidden",       // No scrolling
//           }}
//         >
//           <Navbar />
//           <Box
//             component="main"
//             sx={{
//               flexGrow: 1,
//               overflow: "hidden",     // Prevent scrolling in content
//               bgcolor: "background.default",
              
//               display: "flex",
//               flexDirection: "row",
//             }}
//           >
//             <Toolbar /> {/* Space below Navbar */}
//             <Box sx={{ flexGrow: 1, overflow: "auto" }}>
//               <Routes>
//                 <Route path="/" element={<Signup />} />
//                 {/* <Route path="/" element={<Dashboard />} /> */}
//                 <Route path="/patient-records" element={<PatientRecords />} />
//                 <Route path="/consultation" element={<Consultation />} />
//                 <Route path="/emergency" element={<Emergency />} />
//                 <Route path="/medicine-tracker" element={<MedicineTracker />} />
//                 <Route path="/mentalwellness" element={<MentalWellness />} />
//                 <Route path="/healthed" element={<HealthEducation />} />
//                 <Route path="/doctor-records" element={<DoctorRecords />} />

//               </Routes>
//             </Box>
//           </Box>
//         </Box>
//       </Router>
//     </ThemeProvider>
//   );
// }

