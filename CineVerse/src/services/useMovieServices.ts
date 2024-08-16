import apiClient from "./api-client";
import { Movie } from "../types/movie";
import { MovieSearch } from "../types/movieSearch";

export const useMovieServices = () => {

  const getAll = async (pageNumber: number) => {
    try {
      const response = await apiClient.get<Movie>("/3/movie/now_playing", {
        params: { page: pageNumber },
      });
      return response.data;
    } catch (error) {
      throw new Error("Data can not be fetched");
    }
  };

  const filterByName = async (
    currentFilterName: string,
    pageNumber: number
  ) => {
    try {
      const response = await apiClient.get<Movie>("3/search/movie", {
        params: { query: currentFilterName, page: pageNumber },
      });
      return response.data;
    } catch (error) {
      throw new Error("Data can not be fetched");
    }
  };

  const getSearchMovie = async (id: number) => {
    try {
      const response = await apiClient.get<MovieSearch>(`3/movie/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Data can not be fetched");
    }
  };

  return { getSearchMovie, getAll, filterByName };
};
