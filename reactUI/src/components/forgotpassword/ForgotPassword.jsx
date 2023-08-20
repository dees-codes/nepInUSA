import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Stack, Alert, Snackbar, Link } from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [step, setStep] = useState(1);

  const sendVerificationCode = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Handle sending the verification code to the user's email here

    // If successful, set success message and proceed to the next step
    setSuccess('Verification code sent to your email.');
    setOpenSnackbar(true);
    setStep(2);

    // If there's an error, set error message
    // setError('An error occurred while sending the verification code.');
    // setOpenSnackbar(true);
  };

  const resetPassword = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Handle the actual password reset process (verifying the code and setting the new password) here

    // If successful, set success message and finish
    setSuccess('Your password has been reset successfully.');
    setOpenSnackbar(true);

    // If there's an error, set error message
    // setError('An error occurred while resetting your password.');
    // setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 4, height: '60vh' }}>
      <Typography variant="h4" align="left">
        Forgot Password
      </Typography>
      <Typography variant="subtitle1" align="left" sx={{ mt: 1 }}>
        Enter your email and we{"'"}ll send you a code. Contact us at <Link>nepinusa@gmail.com</Link> in case of any issues.
      </Typography>
      {step === 1 && (
        <Box component="form" onSubmit={sendVerificationCode} sx={{ mt: 4 }}>
          <Stack spacing={3}>
            <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Button type="submit" variant="contained">
              Send Verification Code
            </Button>
          </Stack>
        </Box>
      )}
      {step === 2 && (
        <Box component="form" onSubmit={resetPassword} sx={{ mt: 4 }}>
          <Stack spacing={2}>
            <TextField label="Verification Code" fullWidth value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required />
            <TextField label="New Password" type="password" fullWidth value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Reset Password
            </Button>
          </Stack>
        </Box>
      )}
      <Snackbar open={openSnackbar} autoHideDuration={15000} onClose={handleCloseSnackbar}>
        {error ? (
          <Alert onClose={handleCloseSnackbar} severity="error">
            {error}
          </Alert>
        ) : (
          <Alert onClose={handleCloseSnackbar} severity="success">
            {success}
          </Alert>
        )}
      </Snackbar>
    </Container>
  );
}

export default ForgotPassword;
