import axios from 'axios'
import { apiUrl } from './api-constans';

export default axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-type": "application/json"
    },
    credentials : 'include', // in order to get cookies from backend
    withCredentials: true
  });

  