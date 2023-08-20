import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const ArticleWithImage = ({ title, image, content }) => {
  const renderContent = (contentItem) => {
    if (Array.isArray(contentItem)) {
      return (
        <List>
          {contentItem?.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      );
    } else {
      return (
        <Typography variant="body1" sx={{ mb: 1 }}>
          <div dangerouslySetInnerHTML={{ __html: contentItem }}></div>
        </Typography>
      );
    }
  };

  return (
    <Box sx={{ maxWidth: '100%' }}>
      {image ? <img src={image} alt={title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} /> : null}
      <Box sx={{ p: 1 }}>
        <Typography color="primary.main" variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {content?.map((contentItem, index) => (
          <React.Fragment key={index}>{renderContent(contentItem)}</React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

ArticleWithImage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])).isRequired,
};

export default ArticleWithImage;
