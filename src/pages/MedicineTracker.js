import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button, 
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MedicineTracker() {
  const [medicines, setMedicines] = useState([]);
  const [medicine, setMedicine] = useState("");

  const handleAdd = () => {
    if (medicine.trim()) {
      setMedicines([...medicines, medicine]);
      setMedicine("");
    }
  };

  const handleDelete = (index) => {
    const updated = [...medicines];
    updated.splice(index, 1);
    setMedicines(updated);
  };

  return (
    <Paper sx={{ margin: 4, padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Medicine Tracker
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={10}>
          <TextField
            fullWidth
            label="Add Medicine"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAdd}
            sx={{ height: "100%" }}
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={12}>
          <List>
            {medicines.map((med, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" onClick={() => handleDelete(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={med} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
}
