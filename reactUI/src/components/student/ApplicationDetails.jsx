import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const ApplicationDetails = ({ data }) => {
  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography pb={2} variant="h6">
        Application Details
      </Typography>
      <Typography>
        <CalendarTodayIcon sx={{ mr: 1 }} />
        <strong>High School Graduation Date:</strong> {data?.graduationDate}
      </Typography>
      <Typography>
        <TrendingUpIcon sx={{ mr: 1 }} />
        <strong>High School GPA: </strong> {''} {data?.gpa}
      </Typography>
      <Typography>
        <SchoolIcon sx={{ mr: 1 }} />
        <strong>High School Major: </strong> {data?.highSchoolMajor}
      </Typography>
      <Typography>
        <SchoolIcon sx={{ mr: 1 }} />
        <strong>Intended University First Major: </strong> {data?.intendedFirstMajor}
      </Typography>
      <Typography>
        <SchoolIcon sx={{ mr: 1 }} />
        <strong>Intended University Second Major: </strong> {data?.intendedSecondMajor}
      </Typography>
    </Box>
  );
};

ApplicationDetails.propTypes = {
  data: PropTypes.shape({
    gpa: PropTypes.any,
    graduationDate: PropTypes.any,
    highSchoolMajor: PropTypes.any,
    intendedFirstMajor: PropTypes.any,
    intendedSecondMajor: PropTypes.any,
  }),
};

export default ApplicationDetails;
