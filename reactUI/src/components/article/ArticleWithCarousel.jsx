import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { CheckCircle } from '@mui/icons-material';

const ArticleWithCarousel = ({ title, imageList, content }) => {
  const renderContent = (contentItem) => {
    if (Array.isArray(contentItem)) {
      return (
        <List>
          {contentItem.map((item, index) => (
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
        <Typography component="div" variant="body1" sx={{ mb: 1 }}>
          <p dangerouslySetInnerHTML={{ __html: contentItem }}></p>
        </Typography>
      );
    }
  };

  return (
    <Box sx={{ maxWidth: '100%' }}>
      {imageList ? (
        <Carousel width="800px" dynamicHeight showArrows infiniteLoop autoPlay stopOnHover swipeable>
          {imageList.map((image, index) => (
            <Box key={index}>
              <img src={image} alt={`carousel-item-${index}`} />
            </Box>
          ))}
        </Carousel>
      ) : null}
      <Box sx={{ p: 1 }}>
        <Typography color="primary.main" variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {content.map((contentItem, index) => (
          <React.Fragment key={index}>{renderContent(contentItem)}</React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

ArticleWithCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  imageList: PropTypes.array,
  content: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])).isRequired,
};

export default ArticleWithCarousel;
