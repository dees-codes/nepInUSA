import React from 'react';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function VerticalStepper({ description, steps }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography mb={2} variant="h4">
        {description}
      </Typography>
      <Stepper activeStep={-1} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <Typography>{step.description}</Typography>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

VerticalStepper.propTypes = {
  steps: PropTypes.array,
  description: PropTypes.string,
};

export default VerticalStepper;
