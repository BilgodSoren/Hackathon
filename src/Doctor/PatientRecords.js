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
  TextField,
  Button,
} from '@mui/material';

const patientsData = [
  {
    id: 101,
    name: 'Ravi Kumar',
    age: 45,
    gender: 'Male',
    lastVisit: '2025-03-28',
  },
  {
    id: 102,
    name: 'Sunita Devi',
    age: 38,
    gender: 'Female',
    lastVisit: '2025-04-02',
  },
  {
    id: 103,
    name: 'Mohammed Ali',
    age: 50,
    gender: 'Male',
    lastVisit: '2025-03-25',
  },
];

function PatientRecords() {
  const [search, setSearch] = useState('');
  const filteredPatients = patientsData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#1976d2', fontWeight: 600, mb: 2 }}
      >
        Patient Records
      </Typography>

      <TextField
        label="Search by Patient Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Card sx={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: 2 }}>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: '#e3f2fd' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Gender</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Last Visit</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ textTransform: 'none' }}
                      >
                        View Details
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

export default PatientRecords;
