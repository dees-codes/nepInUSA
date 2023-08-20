import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Stack } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import ContactInfo from './ContactInfo';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event) => {
    console.log('hello');
    event.preventDefault();

    // Replace this with api logic, save the form data to db, also send an email with a template
    // fetch('/api/contact', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  };
  const contactData = {
    days: 'Mon - Fri',
    hours: '9am - 5pm',
    location: 'Kirksville, Missouri',
    email: 'nepinusa@gmail.com',
    phoneNumber: '+1 (555) 123-4567',
  };

  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container maxWidth="md">
      <Stack direction="row" spacing={8}>
        <Grid pt={25} item>
          <ContactInfo height="250px" width="250px" days={contactData.days} hours={contactData.hours} location={contactData.location} email={contactData.email} phoneNumber={contactData.phoneNumber} />
        </Grid>
        <Grid item>
          <Box sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Have a question or need more information? We{"'"}re here to help. Fill out the form below and we{"'"}ll get back to you as soon as possible.
            </Typography>
            <Box component="form" noValidate sx={{ mb: 4 }} onSubmit={handleSubmit}>
              <TextField required fullWidth label="Name" margin="normal" variant="outlined" name="name" value={formData.name} onChange={handleInputChange} inputProps={{ sx: { fontSize: 16 } }} />
              <TextField
                required
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                inputProps={{ sx: { fontSize: 16 } }}
              />
              <TextField
                required
                fullWidth
                label="Message"
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                inputProps={{ sx: { fontSize: 16 } }}
              />
              <Button type="submit" variant="contained" color="primary" startIcon={<SendIcon />} sx={{ mt: 2 }}>
                Send
              </Button>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              For urgent inquiries, please call us at <a href="nepinusa@gmail.com">nepinusa@gmail.com</a>.
            </Typography>
          </Box>
        </Grid>
      </Stack>
    </Container>
  );
};

export default ContactUs;
