import { genres } from "../../constants/genres";
import { OnFavoriteIconClickArgs } from "../../types/onFavoriteIconClickArgs";
import { Results } from "../../types/results";
import { ShoppingItem } from "../../types/shoppingItem";
import styles from "./Movie.module.css";

export const returnGenreBasedOnId = (ids: number[]) => {
  if (ids == undefined) {
    return [genres[0]];
  }
  const response = ids
    .map((id) => {
      return genres.find((item) => id === item.id);
    })
    .filter((item) => item !== undefined);

  return response;
};

export const onFavoriteIconClick = ({
  movie,
  isMovieToFavorites,
  addMoviesToFavorites,
  removeMoviesFromId,
}: OnFavoriteIconClickArgs) => {
  if (isMovieToFavorites) {
    removeMoviesFromId(movie.id);
  } else {
    addMoviesToFavorites(movie);
  }
};

export const addMovieToShoppingSection = (
  movie: Results,
  isMovieToShopping: boolean,
  addMovieShopping: (item: ShoppingItem) => void
) => {
  if (!isMovieToShopping) {
    addMovieShopping({
      id: movie.id,
      quantity: 1,
      title: movie.title,
      rating: movie.vote_average,
    });
  }
};
export const classNameBasedOnConditions = (
  isLight: boolean,
  ischecked: boolean
) => {
  if (ischecked) {
    return `${styles.checked}`;
  }
  return isLight ? `${styles.lightMode}` : `${styles.darkMode}`;
};
