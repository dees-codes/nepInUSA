import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import AddressDetails from './AddressDetails';
import ApplicationDetails from './ApplicationDetails';
import FilesSection from './FilesSection';
import UniversitySelected from './UniversitySelected';
import ServicesSelected from './ServicesSelected';
import NotesSection from './NotesSection';
import NotifyStudent from './NotifyStudent';
import { studentDummyData } from '../../Mocks/mocks';

const StudentProfilePage = () => {
  const { studentId } = useParams();
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    // Fetch data from API using studentId
    // And then set the data to state
    // const data = fetchData(studentId);
    console.log(studentId);
    setStudentData(studentDummyData);
  }, [studentId]);

  if (!studentData) {
    return <Skeleton width="100%" height="100vh" />;
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <PersonalInfo data={studentData?.personalInfo} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactInfo data={studentData?.contactInfo} />
        </Grid>
        <Grid item xs={12} md={6}>
          <AddressDetails data={studentData?.addressDetails} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ApplicationDetails data={studentData?.applicationDetails} />
        </Grid>
        <Grid item xs={12} md={6}>
          <FilesSection data={studentData?.files} />
        </Grid>
        <Grid item xs={12} md={6}>
          <UniversitySelected data={studentData?.universitySelected} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ServicesSelected data={studentData?.servicesSelected} />
        </Grid>
        <Grid item xs={12} md={6}>
          <NotesSection />
        </Grid>
        <Grid item xs={12} md={6}>
          <NotifyStudent />
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentProfilePage;
