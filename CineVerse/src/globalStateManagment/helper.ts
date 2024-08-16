import { MovieAppStore } from "../types/movieAppStore";
import { Results } from "../types/results";
import { ShoppingItem } from "../types/shoppingItem";

export const setCurrentFilterName = (set: any) => (filterName: string) => {
    set({ currentFilterName: filterName });
  };
  
  export const setCurrentPageNumber = (set: any) => (pageNumber: number) => {
    set({ currentPageNumber: pageNumber });
  };
  
  export const setIsLight = (set: any) => (booleanValue: boolean) => {
    set({ isLight: booleanValue });
  };
  
  export const addMoviesToFavorites = (set: any) => (newMovie: Results) => {
    set((store: MovieAppStore) => ({
      favorites: [...store.favorites, newMovie],
    }));
  };
  
  export const removeMoviesFromId = (set: any) => (id: number) => {
    set((store: MovieAppStore) => ({
      favorites: store.favorites.filter((movie) => movie.id !== id),
    }));
  };
  
  export const addMovieToShopping = (set: any) => (item: ShoppingItem) => {
    set((store: MovieAppStore) => ({
      shoppingMovies: [...store.shoppingMovies, item],
    }));
  };
  
  export const incrementQuantityShopping = (set: any) => (id: number) => {
    set((store: MovieAppStore) => ({
      shoppingMovies: store.shoppingMovies.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  };
  
  export const decrementQuantityShopping = (set: any) => (id: number) => {
    set((store: MovieAppStore) => ({
      shoppingMovies: store.shoppingMovies.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ),
    }));
  };
  
  export const removeItemFromShopping = (set: any) => (id: number) => {
    set((store: MovieAppStore) => ({
      shoppingMovies: store.shoppingMovies.filter((item) => item.id !== id),
    }));
  };