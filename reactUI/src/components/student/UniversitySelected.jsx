import PropTypes from 'prop-types';
import { useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const UniversitySelected = ({ data }) => {
  const [status, setStatus] = useState('NepinUSA applied');
  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography variant="h6">University Selected</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((uni, index) => (
              <TableRow key={index}>
                <TableCell>
                  <a href={uni?.url} target="_blank" rel="noreferrer">
                    {uni?.name}
                  </a>
                </TableCell>
                <TableCell>
                  <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <MenuItem value={'NepinUSA applied'}>None</MenuItem>
                    <MenuItem value={'Applied'}>Applied</MenuItem>
                    <MenuItem value={'Accepted'}>Accepted</MenuItem>
                    <MenuItem value={'Rejected'}>Rejected</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

UniversitySelected.propTypes = {
  data: PropTypes.array,
};

export default UniversitySelected;
