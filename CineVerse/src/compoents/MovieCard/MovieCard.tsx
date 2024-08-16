import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faFilm, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Results } from "../../types/results";
import { useNavigate } from "react-router-dom";

import {
  addMovieToShoppingSection,
  classNameBasedOnConditions,
  onFavoriteIconClick,
  returnGenreBasedOnId,
} from "./helper";
import useMovieAppStore from "../../globalStateManagment/store";
import styles from "./Movie.module.css";

interface Props {
  movie: Results;
}

export const MovieCard: React.FC<Props> = ({ movie }) => {
  const naviagte = useNavigate();

  const {isLight,
    favorites,
    shoppingMovies,
    addMovieToShopping,
    addMoviesToFavorites,
    removeMoviesFromId,
  } = useMovieAppStore();

  const isMovieToFavorites = favorites.some(
    (movieParam) => movieParam.id === movie.id
  );

  const isMovieToShopping = shoppingMovies.some(
    (movieParam) => movieParam.id == movie.id
  );

  return (
    <Card
      type="inner"
      className={styles.movieCard}
      cover={
        <img
          onClick={() => naviagte(`/searchMovie/${movie.id}`)}
          className={styles.movieImage}
          alt="example"
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        />
      }
      actions={returnGenreBasedOnId(movie.genre_ids).map((item) => {
        return <FontAwesomeIcon icon={item?.icon || faFilm} />;
      })}
    >
      <Meta title={movie.title} avatar={<FontAwesomeIcon icon={faFilm} />} />
      <div className={styles.buttonsFooter}>
        <Meta
          avatar={
            <FontAwesomeIcon
              className={classNameBasedOnConditions(isLight, isMovieToShopping)}
              onClick={() =>
                addMovieToShoppingSection(
                  movie,
                  isMovieToShopping,
                  addMovieToShopping
                )
              }
              icon={faCartPlus}
            />
          }
        />
        <Meta
          avatar={
            <FontAwesomeIcon
              className={classNameBasedOnConditions(isLight, isMovieToFavorites)}
              onClick={() =>
                onFavoriteIconClick({
                  movie,
                  isMovieToFavorites,
                  addMoviesToFavorites,
                  removeMoviesFromId,
                })
              }
              icon={faHeart}
            />
          }
        />
      </div>
    </Card>
  );
};
