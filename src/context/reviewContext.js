import React from 'react';
import { getReview } from 'helper/api';

const ReviewContext = React.createContext('review');

export default function ReviewContextContainer(props) {
  const [reviews, setReviews] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const requestReviews = async () => {
    try {
      setLoading(true);
      const result = await getReview();
      setReviews(result);
      setError('');
      setLoading(false);
    } catch (e) {
      setError(JSON.stringify(e));
      setLoading(false);
    }
  };

  return (
    <ReviewContext.Provider value={{ requestReviews, reviews, error, loading }}>
      {props.children}
    </ReviewContext.Provider>
  );
}

export { ReviewContext };
