import { useInfiniteQuery } from "@tanstack/react-query";
import { CACHE_KEY_MOVIES } from "../constants/cacheKeyMovies";
import useMovieAppStore from "../globalStateManagment/store";
import { getMovies } from "./helper";

export const useMovies = () => {
  const { currentFilterName } = useMovieAppStore();

  return useInfiniteQuery({
    queryKey: [CACHE_KEY_MOVIES, currentFilterName],
    queryFn: ({ pageParam = 1 }) => getMovies({ pageParam, currentFilterName }),
    getNextPageParam: (lastPage) => lastPage.page + 1,
    initialPageParam: 1,
    
  });
};
