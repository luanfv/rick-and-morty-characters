import axios from 'axios';

const api = {
  url: 'https://rickandmortyapi.com/api',
  host: axios.create({ baseURL: 'https://rickandmortyapi.com/api' }),
  char: axios.create({ baseURL: 'https://rickandmortyapi.com/api/character' })
};

export default api;
