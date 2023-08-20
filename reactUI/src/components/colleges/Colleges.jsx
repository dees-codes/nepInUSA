import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import { universityList } from '../../Mocks/mocks'; // Replace mocks and call real api

const CollegePreview = ({ id, name, image, description }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/colleges/${id}`);
  };
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            component="div"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ height: 50 }}>
        <Button onClick={() => handleClick(id)} size="small" color="primary">
          {' '}
          {/* Doesn't follow the semantics*/}
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default function Colleges() {
  const [collegeList, setCollegeList] = useState([]);

  useEffect(() => {
    // Make API calls to get list of  university we support. Make sure API contract follows what's on mock.
    setCollegeList(universityList);
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Colleges
      </Typography>
      <Grid container spacing={2}>
        {collegeList.length > 1 &&
          collegeList?.map(({ id, name, image, description }) => (
            <Grid key={id} item xs={12} md={6} lg={4}>
              <CollegePreview id={id} name={name} image={image} description={description} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

CollegePreview.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
