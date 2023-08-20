import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionDescription({ heading, Component }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{heading}</Typography>
      </AccordionSummary>
      <AccordionDetails>{Component}</AccordionDetails>
    </Accordion>
  );
}

AccordionDescription.propTypes = {
  heading: PropTypes.string,
  Component: PropTypes.node,
};

export default AccordionDescription;
