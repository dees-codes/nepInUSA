import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container sx={{ bgcolor: 'text.disabled' }}>
      <Box minHeight="62vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
        <Typography variant="h1" color="error.main" sx={{ marginBottom: 2 }}>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          We Cannot Serve your Request at the Moment !
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: 4 }}>
          Please contact our support team or checkback again later !
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
