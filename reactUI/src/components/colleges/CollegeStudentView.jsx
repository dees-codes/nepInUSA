import PropTypes from 'prop-types';
import { useState } from 'react';
import { mockUniDetailsData } from '../../Mocks/mocks';
import { Box, Button, Backdrop, CircularProgress, Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import ArticleWithCarousel from '../article/ArticleWithCarousel';
import { CheckCircle } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../userContetx';

const CollegeStudentView = ({ id }) => {
  const { userData: user } = useUserContext();
  const navigate = useNavigate();
  const [collegeData] = useState(() => {
    // This will be replaced by the actual API call
    return mockUniDetailsData;
  });
  const [showApplyFeedback, setApplyFeedback] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false); //By default, it's false
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    // Quite a bit of logic goes here,
    // Check if the user has already filled the application form
    if (!user.hasFilledApplication) {
      setDialogOpen(true);
      return;
    }
    // call API to record user has applied.
    // Get userId from context
    setApplyFeedback(true);
    // If error set Error to true
    // setError(true);

    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setApplied(true);
    }, 2000);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
    navigate('/application');
  };

  return (
    <Container maxWidth="md" id={id}>
      <ArticleWithCarousel title={collegeData?.title ?? ''} imageList={collegeData?.images ?? ['']} content={collegeData?.content ?? ''} />

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" onClick={handleApply} startIcon={applied && showApplyFeedback && !error ? <CheckCircle /> : null} disabled={applied && showApplyFeedback && !error}>
          {applied && showApplyFeedback && !error ? 'Applied' : 'Apply'}
        </Button>
        <Backdrop open={open} sx={{ zIndex: 1301 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
            {!error ? 'Your response has been recorded!' : 'There was an error submitting the form! Please try again at a later time'}
          </Alert>
        </Snackbar>
      </Box>
      <Dialog open={dialogOpen} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{'Please provide us your details! '}</DialogTitle>
        <DialogContent>
          <DialogContentText>Hey! It looks like you haven{"'"}t filled our general application form. Please click below to fill up the form and comeback to the page again.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDialogClose}>
            Fill Application
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

CollegeStudentView.propTypes = {
  id: PropTypes.any,
};

export default CollegeStudentView;
