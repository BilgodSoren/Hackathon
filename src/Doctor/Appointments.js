import React, { useState } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from '@mui/material';

const appointmentsData = [
  { id: 1, patientId: 'P1001', name: 'Ravi Kumar', date: '2025-04-11', time: '10:00 AM', type: 'Online' },
  { id: 2, patientId: 'P1002', name: 'Sunita Devi', date: '2025-04-11', time: '11:30 AM', type: 'Offline' },
  { id: 3, patientId: 'P1003', name: 'Mohammed Ali', date: '2025-04-11', time: '01:00 PM', type: 'Online' },
  { id: 4, patientId: 'P1004', name: 'Anjali Mehta', date: '2025-04-11', time: '02:15 PM', type: 'Offline' },
  { id: 5, patientId: 'P1005', name: 'Rajesh Singh', date: '2025-04-11', time: '03:00 PM', type: 'Online' },
  { id: 6, patientId: 'P1006', name: 'Priya Sharma', date: '2025-04-11', time: '03:45 PM', type: 'Offline' },
  { id: 7, patientId: 'P1007', name: 'Amitabh Joshi', date: '2025-04-11', time: '04:30 PM', type: 'Online' },
  { id: 8, patientId: 'P1008', name: 'Neha Verma', date: '2025-04-11', time: '05:15 PM', type: 'Offline' },
];

function Appointments() {
  const [search, setSearch] = useState('');
  const filteredAppointments = appointmentsData.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 2, width: '90vw' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#1976d2', fontWeight: 500, mb: 2 }}
      >
        Appointments
      </Typography>

      <TextField
        label="Search by Patient Name"
        variant="outlined"
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 1,  width:'40vw'}}
      />

      <Card
        sx={{
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: 2,
        }}
      >
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: '#e3f2fd' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Patient ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Patient Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.patientId}</TableCell>
                    <TableCell>{appointment.name}</TableCell>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{appointment.type}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          minWidth: '120px',
                          padding: '8px 16px',
                          fontSize: '0.875rem',
                          textTransform: 'none',
                          backgroundColor: appointment.type === 'Online' ? '#1976d2' : '#388e3c',
                          '&:hover': {
                            backgroundColor: appointment.type === 'Online' ? '#1565c0' : '#2e7d32',
                          },
                        }}
                      >
                        {appointment.type === 'Online' ? 'Join' : 'Log Visit'}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Appointments;
