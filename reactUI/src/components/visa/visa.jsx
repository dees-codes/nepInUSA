import ArticleWithVideo from '../article/ArticleWithVideo';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { visaArticleHeading, visaArticleSectionsHeading, visaArticleSections } from './visaData';
import Calendly from '../calendly/Calendly';
const Visa = () => {
  return (
    <Container maxWidth="md">
      <Typography sx={{ pl: 2 }} variant="h4" gutterBottom>
        Visa
      </Typography>
      <ArticleWithVideo
        url="https://www.youtube.com/embed/zDJXWNt0P6c"
        videoCaption={'Listen to Ashim and Deepson talk about Student Visa and other stuffs'}
        articleHeading={visaArticleHeading}
        articleSectionHeadings={visaArticleSectionsHeading}
        articleSections={visaArticleSections}
      />
      <Calendly />
    </Container>
  );
};

export default Visa;
