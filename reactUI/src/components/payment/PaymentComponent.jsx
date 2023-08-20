import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { Payment, CreditCard } from '@mui/icons-material';

const PaymentComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [showFormSubmitFeedback, setShowFormSubmitFeedback] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false); //By default, it's false
  const handleSubmit = (event) => {
    event.preventDefault();
    // Make API call here to submit form values
    // Save to the db
    // Send email with a template
    // If the call is successful setFormSubmitFeedback to true
    // Else show  snackbar with an error message
    setShowFormSubmitFeedback(true);
    // setError(true); // check for api call response and only change the feedback if the api call fails
    // if payment successful, navigate to the Dashboard
    navigate('/dashboard');
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowFormSubmitFeedback(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
        mb: 2,
        p: 4,
        boxShadow: 3,
        borderRadius: 1,
      }}
    >
      <Snackbar open={showFormSubmitFeedback} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
          {!error ? 'Your response has been recorded!' : 'There was an error submitting the form! Please try again at a later time'}
        </Alert>
      </Snackbar>
      <Typography variant="h5" gutterBottom>
        <Payment color="primary" sx={{ mr: 1 }} />
        Payment
      </Typography>

      <TextField
        label="Cardholder Name"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        InputProps={{
          startAdornment: <CreditCard color="action" />,
        }}
      />
      <TextField label="Card Number" variant="outlined" margin="normal" fullWidth required />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
        <TextField label="Expiry Date" variant="outlined" margin="normal" required />
        <TextField label="CVV" variant="outlined" margin="normal" required />
      </Box>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Submit Payment
      </Button>
    </Box>
  );
};

export default PaymentComponent;
