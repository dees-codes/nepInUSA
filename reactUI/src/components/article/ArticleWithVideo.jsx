import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Container } from '@mui/material';
import ArticleComponent from './ArticleComponent';

const ArticleWithVideo = ({ url, videoCaption, articleHeading, articleSectionHeadings, articleSections }) => {
  return (
    <Container maxWidth="md">
      <Box className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </Box>
      <Typography ml={25} my={5} align="right" gutterBottom variant="caption">
        {videoCaption}
      </Typography>
      <ArticleComponent heading={articleHeading} sectionHeadings={articleSectionHeadings} sections={articleSections} />
    </Container>
  );
};

ArticleWithVideo.propTypes = {
  url: PropTypes.string.isRequired,
  videoCaption: PropTypes.string,
  articleHeading: PropTypes.string.isRequired,
  articleSectionHeadings: PropTypes.arrayOf(PropTypes.string).isRequired,
  articleSections: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticleWithVideo;
