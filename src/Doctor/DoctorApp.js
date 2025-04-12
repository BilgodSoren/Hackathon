import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import DoctorSidebar from './DoctorSidebar';

// Doctor pages
import DoctorDashboard from './DoctorDashboard';
import Appointments from './Appointments';
import PatientProfile from './PatientProfile';
import Emergencies from './Emergencies';
import Prescriptions from './Prescriptions';
import Wellness from './Wellness';
import Communication from './Communication';
import Reports from './Reports';
import PatientRecords from './PatientRecords';

function DoctorApp() {
  return (
    <Box sx={{ display: 'flex' }}>
      <DoctorSidebar /> 
      <Box sx={{ flexGrow: 1, marginLeft: 2,}}>
        {/* <Toolbar /> */}
        <Routes>
          <Route path="/" element={<DoctorDashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/patient-profile" element={<PatientProfile />} />
          <Route path="/emergencies" element={<Emergencies />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/patient-records" element={<PatientRecords />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default DoctorApp;
