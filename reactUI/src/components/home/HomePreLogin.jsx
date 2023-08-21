import React from 'react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Carousel from '../Carousel/Carousel';
import images from '../../images/images';
import { items } from './CarouselData';
import OutlinedTimeLine from './OutlinedTimeline';
import { faqData } from '../faq/data';
import FAQComponent from '../faq/FAQComponent';
import VerticalStepper from '../verticalstepper/VericalStepper';
import { steps } from './howitworksdata';
//import { useUserContext } from '../userContetx';

const HomePreLogin = () => {
  return (
    <>
      <>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Nepinusa is a community backed by 6 years of experience of studying, living & working in the US that aims to help Nepali students navigate their higher education, career & life in the US. We
          have automated the entire process for you and it{"'"}s free.
        </Typography>
        <Divider sx={{ mb: 2 }} />
      </>
      <Box
        sx={{
          backgroundColor: '#F2F2F2',
          padding: '50px',
          backgroundImage: `url(${images.nepaliGirl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: 800,
        }}
      ></Box>
      <Box>
        <OutlinedTimeLine />
      </Box>
      <Box sx={{ my: 5 }}>
        <Carousel items={items} />
      </Box>
      <Box mb={2}>
        <VerticalStepper description="How It Works" steps={steps} />
      </Box>
      <Box my={5}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          LEARN MORE By Reading these FAQ
        </Typography>
        <FAQComponent heading="Frequently Asked Questions" faqs={faqData} />
      </Box>
    </>
  );
};
export default HomePreLogin;
