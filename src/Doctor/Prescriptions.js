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
  Collapse,
  Stack,
} from '@mui/material';

const initialData = [
  { id: 1, patientId: 'P001', patient: 'Ravi Kumar', date: '2025-04-10', medicines: 'Paracetamol, Amoxicillin' },
  { id: 2, patientId: 'P002', patient: 'Sunita Devi', date: '2025-04-09', medicines: 'Ibuprofen, Cetrizine' },
  { id: 3, patientId: 'P003', patient: 'Mohammed Ali', date: '2025-04-08', medicines: 'Metformin, Losartan' },
  { id: 4, patientId: 'P004', patient: 'Anjali Mehta', date: '2025-04-07', medicines: 'Atorvastatin, Amlodipine' },
  { id: 5, patientId: 'P005', patient: 'Rajesh Singh', date: '2025-04-06', medicines: 'Levothyroxine, Aspirin' },
  { id: 6, patientId: 'P006', patient: 'Priya Sharma', date: '2025-04-05', medicines: 'Omeprazole, Cetirizine' },
  { id: 7, patientId: 'P007', patient: 'Amitabh Joshi', date: '2025-04-04', medicines: 'Lisinopril, Metformin' },
  { id: 8, patientId: 'P008', patient: 'Neha Verma', date: '2025-04-03', medicines: 'Hydrochlorothiazide, Ibuprofen' },
];

function Prescriptions() {
  const [search, setSearch] = useState('');
  const [prescriptions, setPrescriptions] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [newPrescription, setNewPrescription] = useState({
    patientId: '',
    patient: '',
    date: '',
    medicines: [''],
  });

  const handleToggleForm = () => setShowForm((prev) => !prev);

  const handleMedicineChange = (index, value) => {
    const updated = [...newPrescription.medicines];
    updated[index] = value;
    setNewPrescription({ ...newPrescription, medicines: updated });
  };

  const addMedicineField = () => {
    setNewPrescription({
      ...newPrescription,
      medicines: [...newPrescription.medicines, ''],
    });
  };

  const handleAddPrescription = () => {
    if (
      newPrescription.patientId &&
      newPrescription.patient &&
      newPrescription.date &&
      newPrescription.medicines.some((med) => med.trim() !== '')
    ) {
      const newEntry = {
        id: prescriptions.length + 1,
        patientId: newPrescription.patientId,
        patient: newPrescription.patient,
        date: newPrescription.date,
        medicines: newPrescription.medicines.filter(Boolean).join(', '),
      };
      setPrescriptions([newEntry, ...prescriptions]);
      setNewPrescription({ patientId: '', patient: '', date: '', medicines: [''] });
      setShowForm(false);
    }
  };

  const filteredPrescriptions = prescriptions.filter((p) =>
    p.patientId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ height: '100%', width: '100%', p: 3, boxSizing: 'border-box', bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 600, mb: 2 }}>
        Prescriptions
      </Typography>

      <TextField
        label="Search by Patient ID"
        variant="outlined"
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3, bgcolor: 'white', width: '40vw' }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
        <Button variant="contained" onClick={handleToggleForm}>
          {showForm ? 'Cancel' : 'Add New'}
        </Button>
      </Box>

      <Collapse in={showForm}>
        <Card sx={{ mb: 3, p: 2, backgroundColor: '#ffffff' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            New Prescription Form
          </Typography>
          <Stack spacing={1} direction="row" flexWrap="wrap">
            <TextField
              label="Patient ID"
              variant="outlined"
              value={newPrescription.patientId}
              onChange={(e) => setNewPrescription({ ...newPrescription, patientId: e.target.value })}
            />
            <TextField
              label="Patient Name"
              variant="outlined"
              value={newPrescription.patient}
              onChange={(e) => setNewPrescription({ ...newPrescription, patient: e.target.value })}
            />
            <TextField
              label="Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              value={newPrescription.date}
              onChange={(e) => setNewPrescription({ ...newPrescription, date: e.target.value })}
            />
          </Stack>

          <Box sx={{ mt: 2 }}>
            {newPrescription.medicines.map((med, index) => (
              <TextField
                key={index}
                label={`Medicine ${index + 1}`}
                variant="outlined"
                value={med}
                onChange={(e) => handleMedicineChange(index, e.target.value)}
                sx={{ mb: 1, mr: 1 }}
              />
            ))}
            <Button variant="outlined" onClick={addMedicineField}>
              + Add Medicine
            </Button>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleAddPrescription}>
              Submit
            </Button>
          </Box>
        </Card>
      </Collapse>

      <Card sx={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: 2 }}>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: '#e3f2fd' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Patient ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Patient Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Medicines</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPrescriptions.map((prescription) => (
                  <TableRow key={prescription.id}>
                    <TableCell>{prescription.patientId}</TableCell>
                    <TableCell>{prescription.patient}</TableCell>
                    <TableCell>{prescription.date}</TableCell>
                    <TableCell>{prescription.medicines}</TableCell>
                    <TableCell>
                      <Button variant="outlined" color="primary" sx={{ textTransform: 'none' }}>
                        View / Print
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredPrescriptions.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      No matching records found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Prescriptions;
