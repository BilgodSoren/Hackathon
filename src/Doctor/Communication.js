import React, { useState } from 'react';
import {
  Typography,
  Box,
  List,
  ListItem,
  TextField,
  Button,
  Paper,
  Divider,
} from '@mui/material';

const dummyMessages = [
  { from: 'Patient - Asha', text: 'Doctor saab, when should I take my medicine?' },
  { from: 'Doctor', text: 'Morning and evening after meals.' },
  { from: 'Patient - Ramu', text: 'My fever is not going down, please help.' },
  { from: 'Doctor', text: 'Please take paracetamol and keep yourself hydrated.' },
  { from: 'Patient - Leela', text: 'I am having headache since morning.' },
  { from: 'Doctor', text: 'Try taking rest and have a light meal. Let me know if pain continues.' },
  { from: 'Patient - Sohan', text: 'Can I skip the afternoon dose if I feel better?' },
  { from: 'Doctor', text: 'No, complete the full course even if you feel fine.' },
  { from: 'Patient - Meena', text: 'My son has a rash after taking the syrup.' },
  { from: 'Doctor', text: 'Stop the syrup immediately and visit the nearest PHC for checkup.' },
  { from: 'Patient - Gopal', text: 'Thank you for your quick response, doctor.' },
  { from: 'Doctor', text: 'Always here to help. Stay safe!' },
];

function Communication() {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { from: 'Doctor', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
  
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        boxSizing: 'border-box',
        bgcolor: '#e0f7fa',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 600, color: '#1976d2', mb: 2 }}
      >
        Patient Communication
      </Typography>

      <Paper
        elevation={3}
        sx={{
          flexGrow: 1,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          bgcolor: '#ffffff',
        }}
      >
        <List sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
          {messages.map((msg, index) => {
            const isDoctor = msg.from === 'Doctor';
            return (
              <ListItem
                key={index}
                disableGutters
                sx={{
                  justifyContent: isDoctor ? 'flex-end' : 'flex-start',
                }}
              >
                <Box
                  sx={{
                    maxWidth: '70%',
                    bgcolor: isDoctor ? '#e3f2fd' : '#f9f9f9',
                    border: isDoctor ? '1px solid #90caf9' : '1px solid #e0e0e0',
                    p: 1.5,
                    borderRadius: 2,
                    borderTopRightRadius: isDoctor ? 0 : 16,
                    borderTopLeftRadius: isDoctor ? 16 : 0,
                    textAlign: 'left',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.primary', whiteSpace: 'pre-wrap' }}
                  >
                    {msg.text}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'gray' }}>
                    {msg.from}
                  </Typography>
                </Box>
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ my: 1 }} />

        <TextField
          label="Type a message"
          variant="outlined"
          fullWidth
          multiline
          minRows={2}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{ bgcolor: 'white' }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSend}
          sx={{ mt: 2, alignSelf: 'flex-end', px: 4 }}
        >
          Send
        </Button>
      </Paper>
    </Box>
  );
}

export default Communication;
