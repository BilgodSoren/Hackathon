// pages/HealthEducation.js
import React from "react";
import {
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const healthTopics = [
  {
    title: "Nutrition",
    content: "Eat a balanced diet with fruits, vegetables, whole grains, and protein. Avoid excessive sugar and processed foods.",
  },
  {
    title: "Exercise",
    content: "Regular physical activity like walking, yoga, or cycling for 30 minutes daily helps maintain overall health.",
  },
  {
    title: "Mental Health",
    content: "Take time to relax, journal, connect with loved ones, and seek help if feeling overwhelmed.",
  },
  {
    title: "Hygiene",
    content: "Wash hands regularly, maintain oral hygiene, and ensure clean surroundings to prevent infections.",
  },
  {
    title: "Vaccination",
    content: "Keep your vaccination schedule up-to-date to protect against preventable diseases.",
  },
];

export default function HealthEducation() {
  return (
    <Paper sx={{ margin: 4, padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Health Education (in Local Language)
      </Typography>
      {healthTopics.map((topic, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{topic.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{topic.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  );
}
