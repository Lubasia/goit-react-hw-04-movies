import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const KEY = 'c2812ce3e38d3f99bfe989a5dd3cda88';

const dotaApi = {
  fetchMovies() {
    return axios.get(`${BASE_URL}/3/movie/550?api_key=${KEY}`);
  },
};

export default dotaApi;
