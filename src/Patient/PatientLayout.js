// components/PatientLayout.js
import React from "react";
import { Box, Toolbar } from "@mui/material";
import Navbar from "./PatientNavbar";

const PatientLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* Keeps spacing consistent with MUI AppBar height */}
        {children}
      </Box>
    </Box>
  );
};

export default PatientLayout;
