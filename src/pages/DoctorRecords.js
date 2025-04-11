import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const doctors = [
  {
    id: 1,
    name: "Dr. Sheetal",
    specialty: "Cardiologist",
    experience: "12 years",
    lastConsult: "2025-03-05",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    location: "New York, NY",
    qualification: "MD, Harvard Medical School",
    email: "emily.carter@example.com",
    phone: "+1 (212) 555-0198"
  },
  {
    id: 2,
    name: "Dr. Raj ",
    specialty: "Neurologist",
    experience: "8 years",
    lastConsult: "2025-03-01",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    location: "San Francisco, CA",
    qualification: "MBBS, AIIMS Delhi",
    email: "raj.patel@example.com",
    phone: "+1 (415) 555-1234"
  },
  {
    id: 3,
    name: "Dr.Amit ",
    specialty: "Pediatrician",
    experience: "5 years",
    lastConsult: "2025-02-20",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    location: "Seattle, WA",
    qualification: "MD, Stanford University",
    email: "sophia.kim@example.com",
    phone: "+1 (206) 555-7890"
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const getColor = (index) => {
  const colors = ["#ffab91", "#80cbc4", "#b39ddb", "#f48fb1"];
  return colors[index % colors.length];
};

export default function DoctorRecords() {
  const [open, setOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleOpen = (doctor) => {
    setSelectedDoctor(doctor);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedDoctor(null);
    setOpen(false);
  };

  return (
    <Paper elevation={4} sx={{ margin: 4, padding: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Doctor Records
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f0f4f8" }}>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Specialty</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Last Consultation</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doc, index) => (
              <TableRow key={doc.id} hover>
                <TableCell>{doc.id}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      src={doc.image}
                      alt={doc.name}
                      sx={{
                        bgcolor: doc.image ? "transparent" : getColor(index),
                        width: 40,
                        height: 40,
                      }}
                    >
                      {!doc.image && getInitials(doc.name)}
                    </Avatar>
                    <Typography>{doc.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{doc.specialty}</TableCell>
                <TableCell>{doc.experience}</TableCell>
                <TableCell>{doc.lastConsult}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" onClick={() => handleOpen(doc)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal Card */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Doctor Info</DialogTitle>
        <DialogContent dividers>
          {selectedDoctor && (
            <Stack spacing={2} alignItems="center">
              <Avatar
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                sx={{
                  bgcolor: selectedDoctor.image ? "transparent" : getColor(selectedDoctor.id),
                  width: 60,
                  height: 60,
                  fontSize: 24,
                }}
              >
                {!selectedDoctor.image && getInitials(selectedDoctor.name)}
              </Avatar>
              <Typography variant="h6">{selectedDoctor.name}</Typography>
              <Typography>Specialty: {selectedDoctor.specialty}</Typography>
              <Typography>Experience: {selectedDoctor.experience}</Typography>
              <Typography>Last Consultation: {selectedDoctor.lastConsult}</Typography>
              <Typography>Location: {selectedDoctor.location}</Typography>
              <Typography>Qualification: {selectedDoctor.qualification}</Typography>
              <Typography>Email: {selectedDoctor.email}</Typography>
              <Typography>Phone: {selectedDoctor.phone}</Typography>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
