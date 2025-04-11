import React from 'react';
import { Typography, Button, Box, TextField, useTheme, ThemeProvider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SignupTheme from './SignupTheme';
import logo from './logo.png'; // Adjust the path to your logo image
import Register from '../pages/Register';

const Signup = () => {


  const onSubmit = (e) => {
    e.preventDefault();
    alert('Signup Successful!');
  };

  return (
    <ThemeProvider theme={SignupTheme}>
    
    <Box>
      <Box sx={SignupTheme.container}>
        {/* Input Fields Section */}
        <Box sx={SignupTheme.inputContainer}>
          <Typography variant="h4" sx={SignupTheme.title}>Health Plus</Typography>
          <Typography variant="h6"  fontWeight={500}>Sign Up</Typography>
          <Typography variant="subtitle1" sx={SignupTheme.subtitle}>to access health care</Typography>

          <Box component="form" onSubmit={onSubmit} sx={SignupTheme.form}>
            <TextField placeholder="Full Name" sx={SignupTheme.inputField} />
            <TextField placeholder="Password" type="password" sx={SignupTheme.inputField} />
            <TextField placeholder="Confirm Password" type="password" sx={SignupTheme.inputField} />
            {/* <TextField placeholder="Email Address" type="email" sx={SignupTheme.inputField} /> */}

              <TextField placeholder="State" select sx={SignupTheme.selectField} SelectProps={{ native: true }}>
                <option value="">Select State</option>
                <option value=""></option>
                <option value=""></option>
              </TextField>
            {/* Country and State Selection */}
            <Box sx={SignupTheme.selectContainer}>
             
            </Box>

            <Button component={NavLink} to="/register" type="submit" variant="contained" >
              Sign Up
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box sx={SignupTheme.imageContainer}>
          <Box sx={SignupTheme.imageBox}>
            <img src={logo} />
          </Box>
          <Typography sx={SignupTheme.imageTitle} variant="h4" color="white">Health Plus</Typography>
        </Box>
      </Box>

      {/* Footer */}
     
    </Box>
    </ThemeProvider>
  );
};

export default Signup;