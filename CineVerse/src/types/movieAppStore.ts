import { Results } from "./results";
import { ShoppingItem } from "./shoppingItem";

export interface MovieAppStore {
  favorites: Results[];
  isLight: boolean;
  currentFilterName: string;
  currentPageNumber: number;
  shoppingMovies: ShoppingItem[];
  setCurrentFilterName: (filterName: string) => void;
  setCurrentPageNumber: (pageNumber: number) => void;
  setIsLight: (booleanValue: boolean) => void;
  addMoviesToFavorites: (newMovie: Results) => void;
  removeMoviesFromId: (id: number) => void;
  addMovieToShopping: (item: ShoppingItem) => void;
  incrementQuantityShopping: (id: number) => void;
  decrementQuantityShopping: (id: number) => void;
  removeItemFromShopping: (id: number) => void;
}
