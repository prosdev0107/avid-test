import axios from 'axios';

export const getReview = async () => {
  try {
    const response = await axios.get(
      'https://www.fakerestapi.com/datasets/api/v1/iphone-11-amazon-reviews.json'
    );
    return response.data.data;
  } catch (e) {
    throw `There is an error during the API call. Error: ${JSON.stringify(e)}`;
  }
};
