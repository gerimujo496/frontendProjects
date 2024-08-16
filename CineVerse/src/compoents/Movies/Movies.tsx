import { Button } from "antd";
import { MovieCard } from "../MovieCard/MovieCard";
import { useMovies } from "../../hooks/useMovies";

import styles from "./Movies.module.css";

export const Movies = () => {
  const { data, fetchNextPage } = useMovies();

  return (
    <div className={styles.bigConatiner}>
      <div className={styles.moviesContainer}>
        {data?.pages.map((movie, index) => {
          return movie.results.map((results) => (
            <MovieCard key={results.id} movie={results} />
          ));
        })}
      </div>
      <div>
        <Button type="primary" onClick={() => fetchNextPage()}>
          Load More
        </Button>
      </div>
    </div>
  );
};
