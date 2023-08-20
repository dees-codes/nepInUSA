import React from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Box } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import CollegeAdmin from './CollegeAdmin';
import CollegeStudentView from './CollegeStudentView';
import { useUserContext } from '../userContetx';

const College = () => {
  const { id } = useParams();
  const { userData: user } = useUserContext();
  const collegeToDisplay = user?.isAdmin ? <CollegeAdmin /> : <CollegeStudentView id={id} />;

  return <>{collegeToDisplay}</>;
};

export default College;
