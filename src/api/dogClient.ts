import axios from 'axios';

const dogClient = axios.create({
  baseURL: 'https://dog.ceo/api',
});

dogClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || 'Failed to fetch from Dog API';
    return Promise.reject(new Error(message));
  }
);

export { dogClient };
