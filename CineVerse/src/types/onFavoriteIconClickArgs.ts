import { Results } from "./results";

export interface OnFavoriteIconClickArgs {
  movie: Results;
  isMovieToFavorites: boolean;
  addMoviesToFavorites: (newMovie: Results) => void;
  removeMoviesFromId: (id: number) => void;
}
