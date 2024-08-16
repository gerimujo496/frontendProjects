import { useMovieServices } from "../services/useMovieServices";

export const getMovies = ({
  pageParam,
  currentFilterName,
}: {
  pageParam: number;
  currentFilterName: string;
}) => {
  const movieServices = useMovieServices();

  if (currentFilterName == "" || currentFilterName == "All movies") {
    return movieServices.getAll(pageParam);
  }
  return movieServices.filterByName(currentFilterName, pageParam);
};
