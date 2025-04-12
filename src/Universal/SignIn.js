import React, { useState } from 'react';
import { Typography, Button, Box, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    state: ''
  });

  const { role } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, password, confirmPassword } = formData;

    try {
      const response = await fetch(`/signup/${role}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password, confirmPassword }),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);
        navigate('/register');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Box>
      <Box
        sx={{
          width: '50%',
          height: '70vh',
          display: 'flex',
          flexDirection: 'row',
          marginLeft: '22%',
          marginTop: '7%',
          border: '1px solid grey',
          borderRadius: '10px',
        }}
      >
        {/* Input Fields Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            width: '60%',
            marginLeft: '70px',
            marginTop: '2rem',
          }}
        >
          <Typography variant="h4" sx={{ fontSize:30  }}>
            Health Plus
          </Typography>
          <Typography variant="h6" sx={{ fontSize:15, marginTop:'1rem'  }}>
            Sign In as {role}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize:15  }}>
            to access health care
          </Typography>

          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '30vh',
              marginRight: '10px',
            }}
          >
            <TextField
              placeholder="Full Name"
              size='small'
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ marginBottom: '10px', backgroundColor: 'rgba(246, 246, 246, 1)', width:'80%', marginTop:'0.5rem' }}
            />
            <TextField
              placeholder="Password"
              name="password"
              type="password"
               size='small'
              value={formData.password}
              onChange={handleChange}
              sx={{ marginBottom: '10px', backgroundColor: 'rgba(246, 246, 246, 1)', width:'80%',marginTop:'0.5rem' }}
            />
            <TextField
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
               size='small'
              value={formData.confirmPassword}
              onChange={handleChange}
              sx={{ marginBottom: '10px', backgroundColor: 'rgba(246, 246, 246, 1)', width:'80%' ,marginTop:'0.5rem'}}
            />
            

            <Button type="submit" variant="contained"  size='small' sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', width:'80%',marginTop:'0.5rem' }}>
              Sign in
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            backgroundColor: 'rgba(42, 41, 39, 1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '40%',
            borderRadius: '0px 10px 10px 0px',
            alignItems: 'center',
          }}
        >
          {/* Uncomment and use if you have logo.png */}
          {/* <img src={logo} alt="logo" style={{ width: '100px', marginBottom: '10px' }} /> */}
          <Typography variant="h4" color="white" sx={{ fontFamily: 'Comfortaa, sans-serif', fontWeight: 700 }}>
            Health Plus
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;