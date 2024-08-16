import { useNavigate, useParams } from "react-router-dom";
import { useSearchMovie } from "../../hooks/useSearchMovie";
import { Button } from "antd";

import styles from "./SearchMovie.module.css";
import useMovieAppStore from "../../globalStateManagment/store";

export const SearchMovie = () => {
  const routesParameters = useParams();
  const { isLight } = useMovieAppStore();
  const { data } = useSearchMovie(parseInt(routesParameters.id || "1"));
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.seachMovieContainer}  ${
        isLight ? styles.lightMode : styles.darkMode
      } `}
    >
      <div>
        <Button onClick={() => navigate("/")} type="primary">
          Go back
        </Button>
      </div>
      <div>
        <img
          className={styles.posterImage}
          alt="example"
          src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
        />
      </div>
      <h1 className={styles.title}>{data?.title}</h1>
      <div className={styles.overview}>{data?.overview}</div>
    </div>
  );
};
