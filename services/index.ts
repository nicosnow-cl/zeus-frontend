import axios from 'axios';

const api = axios.create({});

export const fpfApi = axios.create({
  baseURL: 'https://findpornface-find-porn-face-v1.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'a306b185f8mshff4b3733f08fa34p127158jsn219cbbc59cc0',
    'X-RapidAPI-Host': 'findpornface-find-porn-face-v1.p.rapidapi.com',
  },
});

export default api;
