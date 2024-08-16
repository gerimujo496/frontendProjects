import { create } from "zustand";
import { MovieAppStore } from "../types/movieAppStore";
import { addMovieToShopping, addMoviesToFavorites, decrementQuantityShopping, incrementQuantityShopping, removeItemFromShopping, removeMoviesFromId, setCurrentFilterName, setCurrentPageNumber, setIsLight } from "./helper";

const initalState = {
  favorites: [],
  shoppingMovies: [],
  isLight: true,
  currentFilterName: "",
  currentPageNumber: 1,
};

const useMovieAppStore = create<MovieAppStore>((set) => ({
  ...initalState,
  setCurrentFilterName: setCurrentFilterName(set),
  setCurrentPageNumber: setCurrentPageNumber(set),
  setIsLight: setIsLight(set),
  addMoviesToFavorites: addMoviesToFavorites(set),
  removeMoviesFromId: removeMoviesFromId(set),
  addMovieToShopping: addMovieToShopping(set),
  incrementQuantityShopping: incrementQuantityShopping(set),
  decrementQuantityShopping: decrementQuantityShopping(set),
  removeItemFromShopping: removeItemFromShopping(set),
}));

export default useMovieAppStore;
