import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip, Checkbox, Typography, FormControl, FormControlLabel, FormGroup, Paper } from '@mui/material';
import { useHomePageContext } from '../home/HomePostLoginContext';
import { useUserContext } from '../userContetx';
import { NavLink } from 'react-router-dom';

const CheckboxList = ({ checkboxData, title }) => {
  const { setUserUniSelection, userUniSelection: universities } = useHomePageContext();
  const { userData: user } = useUserContext();
  const handleChange = (event, selId, title) => {
    setUserUniSelection((prevSelected) => {
      if (prevSelected?.filter(({ id }) => id === selId).length > 0) {
        const newState = prevSelected.filter((item) => item?.id !== selId);

        return newState;
      }
      const newState = [...prevSelected, { id: selId, title }];

      return newState;
    });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 2,
        }}
        elevation={4}
      >
        <FormControl component="fieldset">
          <FormGroup>
            {checkboxData.map((item, index) => (
              <FormControlLabel
                disabled={user?.appliedUniversityIds?.includes(item?.id) ? true : false}
                key={index}
                control={<Checkbox checked={universities?.filter(({ id }) => id === item?.id).length ? true : false} onChange={(event) => handleChange(event, item?.id, item?.name)} />}
                label={
                  <Tooltip placement="right" title={user?.appliedUniversityIds?.includes(item?.id) ? 'You have already applied to this university' : 'View University'}>
                    <Button
                      component={NavLink}
                      to={`/colleges/${item?.id}`} // Customize the path as needed
                      color="primary"
                      size="small"
                    >
                      {item?.name}
                    </Button>
                  </Tooltip>
                }
              />
            ))}
          </FormGroup>
        </FormControl>
      </Paper>
    </>
  );
};

CheckboxList.propTypes = {
  checkboxData: PropTypes.array,
  title: PropTypes.string,
};

export default CheckboxList;
