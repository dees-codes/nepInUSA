import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import { Person, School, CheckCircle, Assignment, People, Event, FlightTakeoff, LinkedIn } from '@mui/icons-material';
import images from '../../images/images';

const renderImageOrIcon = (imagePath) => {
  return imagePath ? <img src={imagePath} alt="Founder" style={{ width: '100%', borderRadius: '33%' }} /> : <Person style={{ fontSize: 100, color: 'white' }} />;
};

const WhoAreWeSection = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography component="h2" variant="h4" color="primary" gutterBottom>
        Who Are We?
      </Typography>
      <Typography variant="body1" component="p" sx={{ mt: 1, lineHeight: 1.7 }}>
        NepinUSA is an education consultancy founded by three passionate individuals who embarked on their own academic journey from Nepal to the United States seven years ago. As former international
        students who successfully navigated the complex process of applying to and attending college in the U.S., our founders are uniquely qualified to guide and support the next generation of
        Nepalese students in pursuit of their dreams.
      </Typography>
      <Typography variant="body1" component="p" sx={{ mt: 2, lineHeight: 1.7 }}>
        Combining their firsthand experiences with their unwavering commitment to education, our founders have established NepinUSA as a trusted and reliable partner for students and families
        navigating the world of higher education. Driven by a shared vision, our founders are dedicated to helping others overcome the challenges and seize the opportunities that come with studying
        abroad.
      </Typography>
      <Typography variant="body1" component="p" sx={{ mt: 2, lineHeight: 1.7 }}>
        At NepinUSA, we pride ourselves on our deep understanding of both the Nepalese and U.S. education systems, our strong connections with prestigious institutions across the United States, and
        our genuine empathy for the students we serve. Our team{"'"}s personal experiences fuel our passion to make a meaningful difference in the lives of aspiring scholars, empowering them to access
        world-class education and transform not only their own futures but also the future of Nepal.
      </Typography>
      <Typography variant="body1" component="p" sx={{ mt: 2, lineHeight: 1.7 }}>
        Together, we are NepInUSA, and we are committed to shaping a new generation of global learners, leaders, and innovators from Nepal to the United States and beyond.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4, height: '100%' }}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={0}>
            {renderImageOrIcon(images.agu5411)}
            <Typography variant="h6" component="h3" color="text.primary" sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
              Ashim Upadhaya
            </Typography>
            <Typography variant="body2" component="p" color="text.primary" sx={{ mt: 1, textAlign: 'center' }}>
              Truman State University
            </Typography>
            <Typography sx={{ mt: 1, textAlign: 'center' }}>
              <Link href="https://www.linkedin.com/in/agu5411" target="_blank" rel="noopener noreferrer">
                <LinkedIn sx={{ color: 'text.primary', fontSize: 40, mt: 1 }} />
              </Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={0}>
            {renderImageOrIcon(images.simon_stha)}
            <Typography variant="h6" component="h3" color="text.primary" sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
              Simon stha
            </Typography>
            <Typography variant="body2" component="p" color="text.primary" sx={{ mt: 1, textAlign: 'center' }}>
              Truman State University
            </Typography>
            <Typography sx={{ mt: 1, textAlign: 'center' }}>
              <Link href="https://www.linkedin.com/in/founder1" target="_blank" rel="noopener noreferrer">
                <LinkedIn sx={{ color: 'text.primary', fontSize: 40, mt: 1 }} />
              </Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={0}>
            {renderImageOrIcon(images.ishwor_karki)}
            <Typography variant="h6" component="h3" color="text.primary" sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
              Ishwor Karki
            </Typography>
            <Typography variant="body2" component="p" color="text.primary" sx={{ mt: 1, textAlign: 'center' }}>
              Truman State University
            </Typography>
            <Typography sx={{ mt: 1, textAlign: 'center' }}>
              <Link href="https://www.linkedin.com/in/founder1" target="_blank" rel="noopener noreferrer">
                <LinkedIn sx={{ color: 'text.primary', fontSize: 40, mt: 1 }} />
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

const AboutUs = () => {
  return (
    <Container maxWidth="md" component="main">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 4,
          marginBottom: 6,
        }}
      >
        <School color="primary" style={{ fontSize: 60 }} />
        <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
          NepinUSA{' '}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{ mt: 2 }}>
          Your Trusted Partner in Pursuing Higher Education in the United States
        </Typography>
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography component="h2" variant="h4" color="primary" gutterBottom>
          Mission Statement
        </Typography>
        <Typography variant="body1" component="p" sx={{ mt: 1, lineHeight: 1.7 }}>
          At NepinUSA, our mission is to empower and guide aspiring students from Nepal in their pursuit of higher education in the United States. We are dedicated to providing personalized,
          comprehensive support throughout the entire application process, ensuring that every student has the opportunity to unlock their full potential and embark on a transformative educational
          journey. By fostering strong connections between our talented students and prestigious institutions in the United States, we aim to cultivate a global community of learners, leaders, and
          change-makers who will contribute to a brighter future for Nepal and the world.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography component="h2" variant="h4" color="primary" gutterBottom>
          Service Statement
        </Typography>
        <Typography variant="body1" component="p" sx={{ mt: 1, lineHeight: 1.7 }}>
          At NepinUSA, we offer a comprehensive suite of services designed to streamline and simplify the journey of Nepalese students pursuing higher education in the United States. Our end-to-end
          solutions encompass every stage of the application process, ensuring a seamless and stress-free experience for students and their families. Our services include{' '}
          <strong>College Selection, College Application, Application Guidance, SAT Booking, and Visa Application</strong>. We are committed to leveraging cutting-edge technology and automation to
          transform the college application experience for Nepalese students. Our goal is to make higher education in the United States accessible and attainable, enabling a new generation of global
          scholars to thrive and make a lasting impact on the world.
        </Typography>
        <Box>
          <List sx={{ mt: 2 }}>
            <ListItem disablePadding>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography component="span" fontWeight="bold">
                    College Selection:
                  </Typography>
                }
                secondary="Utilizing our extensive knowledge of U.S. colleges and universities, we help students identify and shortlist institutions that align with their academic goals, interests, and aspirations."
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Assignment color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography component="span" fontWeight="bold">
                    College Application:
                  </Typography>
                }
                secondary="We provide expert guidance and support to navigate the complex U.S. college application process, assisting with documentation, essay writing, and submission of all required materials."
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <People color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography component="span" fontWeight="bold">
                    Application Guidance:
                  </Typography>
                }
                secondary="Our team of experienced advisors offers personalized consultations to help students develop a competitive edge, maximizing their chances of gaining admission to their dream schools."
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Event color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography component="span" fontWeight="bold">
                    SAT Booking:
                  </Typography>
                }
                secondary="We facilitate the SAT registration process, ensuring students are well-prepared and equipped with the necessary resources to excel in this critical standardized test."
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <FlightTakeoff color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography component="span" fontWeight="bold">
                    Visa Application:
                  </Typography>
                }
                secondary="Our consultants provide step-by-step guidance on the U.S. student visa application process, from documentation to interview preparation, ensuring a smooth and successful outcome."
              />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box>
        <WhoAreWeSection />
      </Box>
    </Container>
  );
};

export default AboutUs;
