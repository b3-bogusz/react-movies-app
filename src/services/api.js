import axios from 'axios';

const apiKey = process.env.REACT_APP_OMDB_API_KEY;
const baseURL = `https://www.omdbapi.com/?apikey=${apiKey}`;

const api = axios.create({
    baseURL,
    responseType: 'json'
})

export default api;