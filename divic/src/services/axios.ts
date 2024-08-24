import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://shippex-demo.bc.brandimic.com/api/method',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
