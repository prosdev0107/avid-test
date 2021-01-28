import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import DataTable from 'components/table';
import { ReviewContext } from 'context/reviewContext';
import useStyles from './style';

const headCells = [
  {
    id: 'review_rating',
    numeric: false,
    disablePadding: false,
    label: 'Review Rating',
  },
  {
    id: 'profile_name',
    numeric: false,
    disablePadding: false,
    label: 'Profile Name',
  },
  {
    id: 'review_title',
    numeric: false,
    disablePadding: false,
    label: 'Review Title',
  },
  {
    id: 'review_text',
    numeric: false,
    disablePadding: false,
    label: 'Review Text',
  },
  {
    id: 'review_details',
    numeric: false,
    disablePadding: false,
    label: 'Review Details',
  },
];

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const { reviews, loading } = React.useContext(ReviewContext);

  const handleDetailsClick = (e, index) => {
    history.push(`/reviews/${index}`);
  };

  return (
    <Container className={classes.root}>
      {loading && <CircularProgress />}
      {!loading && (
        <DataTable
          data={reviews}
          headerCells={headCells}
          handleDetailsClick={handleDetailsClick}
        />
      )}
    </Container>
  );
}
