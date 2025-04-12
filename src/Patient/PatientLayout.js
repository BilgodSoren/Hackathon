// components/PatientLayout.js
import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import PatientNavbar from "./PatientNavbar";

const PatientLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <PatientNavbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* Keeps space for navbar */}
        <Outlet /> {/* Routed component will render here */}
      </Box>
    </Box>
  );
};

export default PatientLayout;
