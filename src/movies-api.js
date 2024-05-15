import axios from "axios";

const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWVkMjMyMjhkMGRjYWVlMDJhYjgwZWFmNDYxYzA5ZCIsInN1YiI6IjY2NDBjYWUxYzlkNDU4ODlhMGMxMGNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T396tzGPod84go2UFCBsGOUlGhRQJNsVMl2HI4GDukw";

axios.defaults.baseURL = "https://api.themoviedb.org";

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${apiToken}`;
    return config;
});
  
export const getMovies = async () => {
    const response = await axios.get("3/trending/movie/day", {
      params: {
        language: "en-US",
      },
    });
    return response.data.results;
};
  
export const getMoviesSearch = async (searchQuery) => {
    const response = await axios.get("3/search/movie", {
      params: {
        query: searchQuery,
        language: "en-US",
      },
    });
    return response.data.results;
};
  
export const getMovieId = async (movieId) => {
    const response = await axios.get(`3/movie/${movieId}`, {
      params: {
        language: "en-US",
      },
    });
    return response.data;
};
  
export const getMovieIdCredits = async (movieId) => {
    const response = await axios.get(`3/movie/${movieId}/credits`, {
      params: {
        language: "en-US",
      },
    });
    return response.data;
};
  
export const getMovieIdReviews = async (movieId) => {
    const response = await axios.get(`3/movie/${movieId}/reviews`, {
      params: {
        language: "en-US",

      },
    });
    return response.data;
};