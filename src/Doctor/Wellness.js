import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

const resources = [
  {
    id: 1,
    title: 'Mental Wellness Tips',
    description: 'Simple practices to reduce stress and improve emotional health.',
  },
  {
    id: 2,
    title: 'Daily Yoga Routine',
    description: 'Beginner-friendly yoga for body and mind wellness.',
  },
  {
    id: 3,
    title: 'Nutrition Guide',
    description: 'Healthy eating practices suitable for rural diets.',
  },
  {
    id: 4,
    title: 'Sleep Hygiene',
    description: 'Improve sleep quality with simple habits and routines.',
  },
];

function Wellness() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 600, mb: 4, color: '#2e7d32' }}
      >
        Mental & Physical Wellness Resources
      </Typography>
      <Grid container spacing={3}>
        {resources.map((resource) => (
          <Grid item xs={12} sm={6} md={4} key={resource.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: '#f9fbe7',
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: '#33691e' }}>
                  {resource.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#424242' }}>
                  {resource.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  size="small"
                  color="primary"
                  sx={{ textTransform: 'none', fontWeight: 500 }}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Wellness;
