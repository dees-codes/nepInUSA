import React, { useState } from 'react';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as routerLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = ({ userType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userType); // send user type to distinguish between admin or user
  };

  return (
    <Container sx={{ height: '70vh', display: 'flex', alignItems: 'center' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 3 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3 }}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" sx={{ mb: 3 }} />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mb: 2 }}>
              Sign In
            </Button>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Link component={routerLink} to="/forget-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={routerLink} to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
Login.propTypes = {
  userType: PropTypes.string.isRequired,
};
