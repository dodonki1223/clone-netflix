import { useEffect, useState } from 'react';
import { api as axios } from '../request';

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

type FetchMoviesResponse = {
  results: Movie[];
};

export const useMovies = (fetchUrl: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get<FetchMoviesResponse>(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    void fetchData();
  }, [fetchUrl]);

  return { movies, setMovies }; // ここは {movies}だけでいいかも
};
