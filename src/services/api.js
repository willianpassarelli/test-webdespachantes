import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pinpag-canais.s3.amazonaws.com',
});

export default api;
