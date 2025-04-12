import React from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const reportData = [
  { id: 1, name: 'Patient Visits', count: 120, month: 'March' },
  { id: 2, name: 'Prescriptions Issued', count: 87, month: 'March' },
  { id: 3, name: 'Emergency Cases', count: 15, month: 'March' },
  { id: 4, name: 'Follow-ups', count: 45, month: 'March' },
];

function Reports() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        p: 3,
        boxSizing: 'border-box',
        bgcolor: '#e3f2fd',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 600, color: '#1976d2', mb: 2 }}
      >
        Monthly Reports Overview
      </Typography>

      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Report</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Count</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Month</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportData.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                  },
                }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.count}</TableCell>
                <TableCell align="right">{row.month}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Reports;
