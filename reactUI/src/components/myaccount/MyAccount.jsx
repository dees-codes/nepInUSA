// MyAccounts.js
import { React, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Typography, TextField, Button, Stack, Box } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  oldPassword: Yup.string().required('Required'),
  newPassword: Yup.string().required('Required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Required'),
});

const MyAccount = () => {
  const [showFormSubmitFeedback, setShowFormSubmitFeedback] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false); //By default, it's true
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState('');
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowFormSubmitFeedback(false);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here, e.g., update user's email and password
      // Make API call here to submit form values
      // If the call is successful setFormSubmitFeedback to true
      // Else show  snackbar with an error message
      setShowFormSubmitFeedback(true);
      // setError(true) check for api call response and only change the feedback if the api call fails
      console.log(values);
    },
  });

  return (
    <Container maxWidth="xs">
      <Snackbar open={showFormSubmitFeedback} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
          {!error ? 'Your response has been recorded! Password successfully changed' : { errorMessage }}
        </Alert>
      </Snackbar>
      <Box sx={{ mt: 10, minHeight: '60vh' }}>
        <Typography variant="h4" gutterBottom>
          Change Account Details
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2} mt={2}>
            <TextField
              label="New Email Address*"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
              name="email"
              fullWidth
            />

            <TextField
              label="Old Password*"
              variant="outlined"
              type="password"
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.oldPassword && !!formik.errors.oldPassword}
              helperText={formik.touched.oldPassword && formik.errors.oldPassword}
              name="oldPassword"
              fullWidth
            />

            <TextField
              label="New Password*"
              variant="outlined"
              type="password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.newPassword && !!formik.errors.newPassword}
              helperText={formik.touched.newPassword && formik.errors.newPassword}
              name="newPassword"
              fullWidth
            />

            <TextField
              label="Confirm New Password*"
              variant="outlined"
              type="password"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmNewPassword && !!formik.errors.confirmNewPassword}
              helperText={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword}
              name="confirmNewPassword"
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Update Account
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default MyAccount;
