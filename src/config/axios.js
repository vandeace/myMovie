import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://www.omdbapi.com?apikey=faf7e5bb&',
});

export default instance;
