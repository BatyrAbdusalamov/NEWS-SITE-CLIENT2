import axios from 'axios';

export const postman = axios.create({
  baseURL: 'http://localhost:4000',
  paramsSerializer: params =>
    JSON.stringify(params)
});