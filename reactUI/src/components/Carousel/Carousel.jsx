import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const itemsToShow = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - itemsToShow));
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        gap: 2,
      }}
    >
      <Button onClick={handlePrev} disabled={currentIndex === 0}>
        <NavigateBefore />
      </Button>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexGrow: 1, gap: 2 }}>
        {visibleItems.map((item) => (
          <Card
            key={item.title}
            sx={{
              flexGrow: 1,
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
          >
            <CardContent>
              <Typography variant="h4" component="div" sx={{ mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Box position="absolute" left={10} bottom={0}>
                <Button onClick={() => navigate('/aboutus')} size="small">
                  Learn More
                </Button>
              </Box>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Button onClick={handleNext} disabled={currentIndex + itemsToShow >= items.length}>
        <NavigateNext />
      </Button>
    </Box>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
};
export default Carousel;
