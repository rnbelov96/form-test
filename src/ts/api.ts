import axios from 'axios';

export default axios.create({
  baseURL: 'https://mockApi.com/',
  timeout: 5000,
});
