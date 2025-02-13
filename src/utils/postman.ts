import axios from 'axios';

export const postman = axios.create({
  baseURL: 'http://localhost:6000',
  paramsSerializer: params =>
    JSON.stringify(params)
});