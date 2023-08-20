import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const ServicesSelected = ({ data }) => {
  const [services, setServices] = useState(data);

  const handleCheckboxChange = (index) => {
    const updatedServices = [...services];
    updatedServices[index].completed = !updatedServices[index].completed;
    setServices(updatedServices);

    // Here you can make an API call to store the updated information
    // e.g., updateServiceInDatabase(updatedServices[index]);
  };

  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography pb={2} variant="h6">
        Services Selected
      </Typography>
      {services.map((service, index) => (
        <Box key={index}>
          <Typography>
            <Checkbox checked={service?.completed} onChange={() => handleCheckboxChange(index)} /> {service?.name}
          </Typography>
          <Typography variant="body2">{service?.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

ServicesSelected.propTypes = {
  data: PropTypes.array,
};

export default ServicesSelected;
