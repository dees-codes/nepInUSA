import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

const AddressDetails = ({ data }) => {
  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography pb={1} variant="h6">
        Address Details
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon sx={{ mr: 1 }} />
        {data.street}
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <LocationCityIcon sx={{ mr: 1 }} />
        {data.city}
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <LocationOnIcon sx={{ mr: 1 }} />
        {data.province}
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <MailIcon sx={{ mr: 1 }} />
        {data.zip}
      </Typography>
    </Box>
  );
};

AddressDetails.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.any,
    province: PropTypes.any,
    street: PropTypes.any,
    zip: PropTypes.any,
  }),
};

export default AddressDetails;
