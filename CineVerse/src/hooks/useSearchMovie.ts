import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useMovieServices } from "../services/useMovieServices";
import { MovieSearch } from "../types/movieSearch";

export const useSearchMovie = (id: number) => {
  const getMovies = useMovieServices();

  return useQuery<MovieSearch, Error>({
    queryKey: ["movie", id],
    queryFn: () => getMovies.getSearchMovie(id),
    
  });
};
