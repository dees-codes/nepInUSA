import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { Email, Phone, Schedule, LocationOn } from '@mui/icons-material';

const ContactInfo = ({ height, width, days, hours, location, email, phoneNumber }) => {
  return (
    <Box
      sx={{
        height,
        width,
        bgcolor: 'background.paper',
        p: 2,
        boxShadow: 1,
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Contact Info
      </Typography>
      <Divider />
      <Box display="flex" alignItems="center" gap={1}>
        <Schedule />
        <Typography variant="body1">
          Open: {days}, {hours}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <LocationOn />
        <Typography variant="body1">{location}</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Email />
        <Typography variant="body1">{email}</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <Phone />
        <Typography variant="body1">{phoneNumber}</Typography>
      </Box>
    </Box>
  );
};

ContactInfo.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default ContactInfo;
