import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const FilesSection = ({ data }) => {
  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography pb={1} variant="h6">
        Files
      </Typography>
      {data.map((file, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <PictureAsPdfIcon sx={{ mr: 1 }} />
          <Typography sx={{ flexGrow: 1 }}>{file.name}</Typography>
          <Button variant="contained" href={file.url} target="_blank" endIcon={<OpenInNewIcon />}>
            View
          </Button>
        </Box>
      ))}
    </Box>
  );
};

FilesSection.propTypes = {
  data: PropTypes.array,
};

export default FilesSection;
