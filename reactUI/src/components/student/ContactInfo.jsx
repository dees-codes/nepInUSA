import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactInfo = ({ data }) => {
  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography pb={1} variant="h6">
        {' '}
        Contact Info{' '}
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <MailOutlineIcon sx={{ mr: 1 }} />
        <a href={`mailto:${data.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          {data?.email}
        </a>
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <PhoneIcon sx={{ mr: 1 }} />
        {data?.mobile}
      </Typography>
    </Box>
  );
};

ContactInfo.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.any,
    mobile: PropTypes.any,
  }),
};

export default ContactInfo;
