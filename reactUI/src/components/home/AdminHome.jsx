import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Link as hrefLink } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const columns = [
  {
    field: 'firstName',
    headerName: 'First Name',
    flex: 1,
    sortable: true,
    renderCell: (params) => (
      <Link to={`/student/${params.row.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        {params.value}
      </Link>
    ),
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    flex: 1,
    sortable: true,
    renderCell: (params) => (
      <Link to={`/student/${params.row.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        {params.value}
      </Link>
    ),
  },
  {
    field: 'universities',
    headerName: 'Universities',
    flex: 1,
    sortable: true,
    renderCell: (params) => (
      <div>
        {params.value.map((uni, index) => (
          <Typography component={hrefLink} target="_blank" rel="noopener noreferrer" href={uni?.officialSite} key={index} variant="body1" sx={{ display: 'block' }}>
            {uni?.name}
          </Typography>
        ))}
      </div>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    sortable: true,
    editable: true,
  },
];

const AdminHome = () => {
  const [rows, setRows] = useState([
    // These are dummy data, these should come from API calls
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      universities: [
        { name: 'Harvard', id: '1', officialSite: 'https://www.harvard.edu' },
        { name: 'MIT', id: '2', officialSite: 'https://www.mit.edu' },
      ],
      status: 'Applied',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      universities: [{ name: 'Stanford', id: '3', officialSite: 'https://www.standford.edu' }],
      status: 'Applied',
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const handleEditCellChangeCommit = useCallback(
    ({ id, field, props }) => {
      if (field === 'status') {
        // This should send a put call update the student's status value in the db
        // eslint-disable-next-line react/prop-types
        const newData = rows.map((row) => (row.id === id ? { ...row, status: props.value } : row));
        setRows(newData);
      }
    },
    [rows]
  );

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      return (
        row.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        row.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        row.universities.some((uni) => uni?.name?.toLowerCase().includes(searchText.toLowerCase()))
      );
    });
  }, [searchText, rows]);
  return (
    <Box sx={{ width: '100%', height: '55vh', p: 1, mb: 10 }}>
      <TextField fullWidth variant="outlined" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search by First Name, Last Name or University" sx={{ mb: 2 }} />
      <DataGrid rows={filteredRows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} onEditCellChangeCommit={handleEditCellChangeCommit} disableSelection />
    </Box>
  );
};

export default AdminHome;
