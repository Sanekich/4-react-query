import axios from 'axios';
import type { Movie } from '../types/movie';

interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<MovieResponse> => {
  const response = await axios.get<MovieResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query,
        include_adult: false,
        language: 'en-US',
        page,
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
