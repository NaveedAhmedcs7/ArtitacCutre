// api.js
import axios from 'axios';

const BASE_URL = 'https://firststop.bnstoys.net/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const postData = async (Endpoint,data) => {
  try {
    const response = await axios.post(BASE_URL+Endpoint, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};
