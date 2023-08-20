import React from 'react';
import { Box, Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { School, CheckCircle } from '@mui/icons-material';
import { useHomePageContext } from '../home/HomePostLoginContext';

const Summary = ({ title, universityList, servicList }) => {
  const { userUniSelection, userServiceSelection } = useHomePageContext() || {};

  const universities = universityList != null ? universityList : userUniSelection;
  const services = servicList != null ? servicList : userServiceSelection;

  // const [totalPrice, setTotalPirce] = useState(0);
  return (
    <Box mb={8}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              University Selected {`(${universities?.length})`}
            </Typography>
            {universities?.map((university) => (
              <List key={university?.id}>
                <ListItem>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText primary={university?.title || university?.name} />
                </ListItem>
              </List>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Services Selected {`(${services?.length})`}
            </Typography>
            <List>
              {services?.map((service, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircle />
                  </ListItemIcon>
                  <ListItemText primary={service.name} secondary={`Price: $${service.price}`} />
                </ListItem>
              ))}
            </List>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total Price: $
                {services.reduce((accumulator, currentItem) => {
                  return accumulator + currentItem?.price;
                }, 0)}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
Summary.propTypes = {
  title: PropTypes.string,
  universityList: PropTypes.array,
  servicList: PropTypes.array,
};

Summary.defaultProps = {
  title: 'Summary',
};
export default Summary;
