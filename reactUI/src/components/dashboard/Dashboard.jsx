import { useState, useEffect } from 'react';
import { Container, Alert } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Summary from '../summary/Summary';
import { universityList, serviceList } from '../../Mocks/mocks'; // these are mocks to be removed with api calls below
import DataTable from '../dataTable/DataTable';

const Dashboard = () => {
  const [appliedUni, setAppliedUni] = useState([]); // should be array of objects
  const [selectedServices, setSelectedServices] = useState([]); // should be array of objects
  const [adminFeedback, setAdminFeedback] = useState([]); // Array of objects

  const columns = [
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'university', headerName: 'University Name', width: 250 },
    {
      field: 'status',
      headerName: 'Status',
      headerAlign: 'center',
      width: 250,
      renderCell: (params) => (
        <Alert sx={{ border: 'none', pl: 10, width: '100px' }} severity={params.value.type} variant="outlined">
          {params.value.status}
        </Alert>
      ),
    },
  ];

  const rows = appliedUni.map((uni) => ({ id: uni.id, university: uni?.name, status: { status: 'Applied', type: 'info' } })); // need to use status from data from api calls

  useEffect(() => {
    // fetchApi for the data and set state above, will use mock data for now
    setAppliedUni(universityList);
    setSelectedServices(serviceList);
    setAdminFeedback([
      // Setting here as mock, will need to get this from db for a user via api calls
      { feedback: 'Please upload a new copy of your transcripts', type: 'warning' },
      { feedback: 'You have a call scheduled with us today at 9 PM Nepal Time ', type: 'info' },
    ]);
  }, [appliedUni, setAppliedUni, adminFeedback]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Your Dashboard
      </Typography>
      <AdminFeedback feedbacks={adminFeedback} />
      <Summary title="Summary" servicList={selectedServices} universityList={appliedUni} />
      <Box mt={2}>
        <DataTable rows={rows} columns={columns} />
      </Box>
    </Container>
  );
};

const AdminFeedback = ({ feedbacks }) => {
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ width: '100%', mb: 5 }}>
      <Collapse in={open}>
        {feedbacks?.map(({ feedback, type, index }) => (
          <Alert key={index} severity={type} sx={{ mb: 2 }}>
            {feedback}
          </Alert>
        ))}
      </Collapse>
      <Button
        variant="outlined"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? 'Close' : 'open'}
      </Button>
    </Box>
  );
};

AdminFeedback.propTypes = {
  feedbacks: PropTypes.array,
};

export default Dashboard;
