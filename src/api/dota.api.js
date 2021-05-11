import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'c2812ce3e38d3f99bfe989a5dd3cda88';

const GetMovieTrending = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${KEY}`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const GetSearchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const GetMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const GetMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`,
    );
    return response.data.cast;
  } catch (e) {
    throw new Error(e);
  }
};

const GetMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
    );
    return response.data.results;
  } catch (e) {
    throw new Error(e);
  }
};

const dotaApi = {
  GetMovieTrending,
  GetSearchMovies,
  GetMovieDetails,
  GetMovieCredits,
  GetMovieReviews,
};

export default dotaApi;
