import React from 'react';
import { Typography, Box, ListItem, ListItemIcon, ListItemText, List } from '@mui/material';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const ArticleComponent = ({ heading, sectionHeadings, sections }) => {
  const renderBulletPoints = (bullets) => {
    return (
      <List>
        {bullets.map((bulletPoint, index) => (
          <ListItem key={index} disablePadding dense>
            <ListItemIcon>
              <ArrowRightIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={bulletPoint} />
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography sx={{ color: 'primary.main' }} variant="h4" gutterBottom>
        {heading}
      </Typography>
      {sectionHeadings.map((sectionHeading, index) => (
        <Box key={index} sx={{ mt: 3 }}>
          <Typography color="primary.main" variant="h6" gutterBottom dangerouslySetInnerHTML={{ __html: sectionHeading }}></Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: sections[index]?.description }}></Typography>
          {sections[index].bullets && renderBulletPoints(sections[index].bullets)}
        </Box>
      ))}
    </Box>
  );
};

ArticleComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  sectionHeadings: PropTypes.arrayOf(PropTypes.string).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      bullets: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default ArticleComponent;
