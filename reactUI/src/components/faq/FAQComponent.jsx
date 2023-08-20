import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function QuestionAndAnswers({ FAQs }) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ width: '100%' }}>
        {FAQs?.map((faq, index) => (
          <Accordion key={index} sx={{ marginBottom: '1rem' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Array.isArray(faq?.answer) ? (
                <Box>
                  {faq?.answer?.map((item, idx) => (
                    <ListItem key={idx} sx={{ paddingLeft: 0 }}>
                      <ListItemIcon>
                        <ArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </Box>
              ) : (
                <Typography>{faq?.answer}</Typography>
              )}
              {faq?.bulletPoints && (
                <Box>
                  {faq?.bulletPoints?.map((point, idx) => (
                    <ListItem key={idx} sx={{ paddingLeft: 0 }}>
                      <ListItemIcon>
                        <ArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={point} />
                    </ListItem>
                  ))}
                </Box>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

const FAQComponent = ({ heading, faqs }) => (
  <Accordion sx={{ marginBottom: '1rem', width: '100%' }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6">{heading}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <QuestionAndAnswers FAQs={faqs} />
    </AccordionDetails>
  </Accordion>
);

FAQComponent.propTypes = {
  faqs: PropTypes.array,
  heading: PropTypes.string,
};

QuestionAndAnswers.propTypes = {
  FAQs: PropTypes.array,
};

export default FAQComponent;
