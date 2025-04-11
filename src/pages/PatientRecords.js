import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HealingIcon from "@mui/icons-material/Healing";
import PersonIcon from "@mui/icons-material/Person";

const records = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    diagnosis: "Flu",
    lastVisit: "2025-03-01",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    address: "123 Elm Street, New York",
    doctor: "Dr. Sarah Lee",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 45,
    diagnosis: "Diabetes",
    lastVisit: "2025-02-15",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    address: "456 Oak Avenue, Chicago",
    doctor: "Dr. Robert Wang",
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 52,
    diagnosis: "Hypertension",
    lastVisit: "2025-01-28",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    address: "789 Pine Road, San Francisco",
    doctor: "Dr. Emily Davis",
  },
];

export default function PatientRecords() {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleOpen = (record) => {
    setSelectedRecord(record);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRecord(null);
  };

  return (
    <Paper elevation={4} sx={{ margin: 4, padding: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Patient Health Records
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f0f4f8" }}>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Diagnosis</TableCell>
              <TableCell>Last Visit</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id} hover>
                <TableCell>{record.id}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={record.photo} />
                    <Typography>{record.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{record.age}</TableCell>
                <TableCell>{record.diagnosis}</TableCell>
                <TableCell>{record.lastVisit}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleOpen(record)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Popup */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Patient Info</DialogTitle>
        <DialogContent dividers>
          {selectedRecord && (
            <Stack spacing={2} alignItems="center">
              <Avatar
                src={selectedRecord.photo}
                sx={{ width: 80, height: 80 }}
              />
              <Typography variant="h6">{selectedRecord.name}</Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <PersonIcon />
                <Typography>Age: {selectedRecord.age}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <HealingIcon />
                <Typography>Diagnosis: {selectedRecord.diagnosis}</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <CalendarMonthIcon />
                <Typography>Last Visit: {selectedRecord.lastVisit}</Typography>
              </Box>
              <Typography>Address: {selectedRecord.address}</Typography>
              <Typography>Consulting Doctor: {selectedRecord.doctor}</Typography>
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
