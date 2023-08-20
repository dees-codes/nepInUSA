// PersonalInfo.js
import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const PersonalInfo = ({ data }) => {
  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {data?.profilePicture ? <img src={data?.profilePicture} alt="Profile" style={{ height: '100px', marginRight: '20px' }} /> : <Avatar sx={{ height: 100, width: 100, marginRight: 2 }}>A</Avatar>}
        <div>
          <Typography pb={1} variant="h6">
            Personal Info
          </Typography>
          <Typography>
            <strong>Legal First Name: </strong> {data?.firstName}
          </Typography>
          <Typography>
            <strong>Legal Last Name:</strong> {data?.lastName}
          </Typography>
          <Typography>
            <strong>Gender: </strong> {data?.gender}
          </Typography>
          <Typography>
            <strong>Date of Birth: </strong> {data?.dateOfBirth}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

PersonalInfo.propTypes = {
  data: PropTypes.shape({
    dateOfBirth: PropTypes.string,
    gender: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    profilePicture: PropTypes.string,
  }),
};

export default PersonalInfo;
