// pages/MentalWellness.js
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
} from "@mui/material";

const tips = [
  "Take deep breaths and meditate for 5 minutes",
  "Write down 3 things you're grateful for",
  "Go for a walk or get some sunlight",
  "Talk to a friend or family member",
  "Drink water and eat a healthy snack",
];

export default function MentalWellness() {
  const [journal, setJournal] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSubmit = () => {
    if (journal.trim()) {
      setEntries([journal, ...entries]);
      setJournal("");
    }
  };

  return (
    <Paper sx={{ margin: 4, padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Mental Wellness
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Daily Tips:
      </Typography>
      <List>
        {tips.map((tip, index) => (
          <ListItem key={index}>
            <ListItemText primary={`• ${tip}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1" gutterBottom mt={4}>
        Journal Your Thoughts:
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Your entry"
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            multiline
            rows={3}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add Entry
          </Button>
        </Grid>
      </Grid>
      {entries.length > 0 && (
        <>
          <Typography variant="h6" mt={4}>
            Previous Entries
          </Typography>
          <List>
            {entries.map((entry, index) => (
              <ListItem key={index}>
                <ListItemText primary={entry} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Paper>
  );
}
