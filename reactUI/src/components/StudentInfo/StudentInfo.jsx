/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  city: Yup.string().required('City is required'),
  province: Yup.string().required('Province is required'),
  mobilePhoneNumber: Yup.string().required('Mobile phone number is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  emailAddress: Yup.string().email('Invalid email address').required('Email address is required'),
  gender: Yup.string().required('Gender is required'),
});

const StudentInfo = () => {
  const [showFormSubmitFeedback, setShowFormSubmitFeedback] = useState(false);
  const [error, setError] = useState(false); //By default, it's false
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowFormSubmitFeedback(false);
  };

  useEffect(() => {
    // Make api call to populate the fields if the user has already entered and submitted the form
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      gender: '',
      graduationDate: '',
      highSchoolGPA: '',
      highSchoolMajor: '',
      intendedUniversityMajor1: '',
      intendedUniversityMajor2: '',
      passport: null,
      transcripts: null,
      streetAddress: '',
      city: '',
      province: '',
      zipCode: '',
      mobilePhoneNumber: '',
      birthDate: '',
      resume: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Make API call here to submit form values
      // Save to the db
      // Send email with a template
      // If the call is successful setFormSubmitFeedback to true
      // Else show  snackbar with an error message
      setShowFormSubmitFeedback(true);
      // setError(true) check for api call response and only change the feedback if the api call fails
    },
  });

  return (
    <Container maxWidth="sm">
      <Snackbar open={showFormSubmitFeedback} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
          {!error ? 'Your response has been recorded!' : 'There was an error submitting the form! Please try again at a later time'}
        </Alert>
      </Snackbar>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Typography variant="h4" gutterBottom>
          My Details
        </Typography>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField
            label="Legal First Name*"
            name="firstName"
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ' '}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField
            label="Legal Last Name*"
            name="lastName"
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ' '}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField
            label="Email Address*"
            name="emailAddress"
            onChange={formik.handleChange}
            error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
            helperText={formik.touched.emailAddress && formik.errors.emailAddress ? formik.errors.emailAddress : ' '}
          />
        </FormControl>
        <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
          <FormLabel component="legend">Gender*</FormLabel>
          <RadioGroup row name="gender" value={formik.values.gender} onChange={formik.handleChange}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
          {formik.touched.gender && formik.errors.gender ? (
            <Typography variant="caption" color="error">
              {formik.errors.gender}
            </Typography>
          ) : null}
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} name="birthDate" onChange={formik.handleChange} />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="High School Graduation Date" type="date" InputLabelProps={{ shrink: true }} name="graduationDate" onChange={formik.handleChange} />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="High School GPA" name="highSchoolGPA" onChange={formik.handleChange} />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="High School Major" name="highSchoolMajor" onChange={formik.handleChange} />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="Intended University First Major" name="intendedUniversityMajor1" onChange={formik.handleChange} />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="Intended University Second Major" name="intendedUniversityMajor2" onChange={formik.handleChange} />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="Closest Street Address" name="streetAddress" onChange={formik.handleChange} />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="City*" name="city" onChange={formik.handleChange} error={formik.touched.city && Boolean(formik.errors.city)} helperText={formik.touched.city && formik.errors.city} />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField
            label="Province*"
            name="province"
            onChange={formik.handleChange}
            error={formik.touched.province && Boolean(formik.errors.province)}
            helperText={formik.touched.province && formik.errors.province}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="Zip Code" name="zipCode" onChange={formik.handleChange} />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField
            label="Mobile Phone Number*"
            name="mobilePhoneNumber"
            onChange={formik.handleChange}
            error={formik.touched.mobilePhoneNumber && Boolean(formik.errors.mobilePhoneNumber)}
            helperText={formik.touched.mobilePhoneNumber && formik.errors.mobilePhoneNumber}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="Passport" type="file" InputLabelProps={{ shrink: true }} name="passport" onChange={formik.handleChange} />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="High School Transcripts" type="file" InputLabelProps={{ shrink: true }} name="transcripts" onChange={formik.handleChange} />
          <Typography variant="caption" color="textSecondary">
            The file should be a single PDF that contains transcripts from class 10, 11, and 12.
          </Typography>
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <TextField label="Resume, CV and other docs" type="file" multiple InputLabelProps={{ shrink: true }} name="resume" onChange={formik.handleChange} />
          <Typography variant="caption" color="textSecondary">
            Please upload your Resume, CV and other docs. Should be uploaded in one single pdf.
          </Typography>
        </FormControl>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Container>
  );
};
export default StudentInfo;
