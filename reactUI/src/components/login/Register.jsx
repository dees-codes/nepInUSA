import React, { useState } from 'react';
import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import PropTypes from 'prop-types';

const Register = ({ userType }) => {
  // state to keep track of input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle register logic here
    console.log(userType); // when registering for a user, gotta let the BE know if the current user is a admin or student
  };

  return (
    <Container sx={{ height: '70vh', display: 'flex', alignItems: 'center' }}>
      {/* CSS reset */}
      <CssBaseline />
      <Box
        // container styles
        sx={{
          width: '100%',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '24px',
          borderRadius: '4px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
          textAlign: 'center',
        }}
      >
        {/* avatar icon */}
        <Avatar sx={{ m: '0 auto', bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        {/* heading */}
        <Typography component="h1" variant="h5" sx={{ mt: 3 }}>
          Register a New User
        </Typography>
        {/* form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          // form styles
          sx={{ mt: 3, textAlign: 'left' }}
        >
          {/* first name input */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            // input icon
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 1 }}>
                  <PersonIcon />
                </Box>
              ),
            }}
          />
          {/* last name input */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            // input icon
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 1 }}>
                  <PersonIcon />
                </Box>
              ),
            }}
          />
          {/* email input */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // input icon
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 1 }}>
                  <MailIcon />
                </Box>
              ),
            }}
          />
          {/* password input */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // input icon
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 1 }}>
                  <LockIcon />
                </Box>
              ),
            }}
          />
          {/* submit button */}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
Register.propTypes = {
  userType: PropTypes.string.isRequired,
};

export default Register;
