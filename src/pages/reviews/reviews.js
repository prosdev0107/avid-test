import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ReviewContext } from 'context/reviewContext';
import useStyles from './style';

export default function Reviews() {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const { reviews } = React.useContext(ReviewContext);

  const handleBack = (e) => {
    history.push('/');
  };

  if (reviews.length === 0) {
    return <CircularProgress />;
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h6" align="left" gutterBottom>
        Product
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['product']}
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        URL
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['url']}
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        Product Company
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['product_company']}
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        Profile Name
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['profile_name']}
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        Review Title
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['review_title']}
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        Review Text
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['review_text']}
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        Rating
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['review_rating']}
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        Review Country
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['review_country']}
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        Date
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['reviewed_at']}
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        Total Comments
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['total_comments']}
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        Helpful Count
      </Typography>
      <Typography variant="body1" align="left" gutterBottom>
        {reviews[id]['helpful_count']}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleBack}>
        Back
      </Button>
    </Container>
  );
}
