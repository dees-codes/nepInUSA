import React from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';

const NavigationDrawer = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Drawer anchor="left" open={true} variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List sx={{ width: 240 }}>
        {data.map((page, index) => (
          <ListItemButton key={page?.key} onClick={() => handleNavigation(page?.path)}>
            <ListItemText primary={page?.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

NavigationDrawer.propTypes = {
  data: PropTypes.object,
};

export default NavigationDrawer;
