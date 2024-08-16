import { MovieCard } from "../MovieCard/MovieCard";
import { Button, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import { lightModeTheme } from "../../constants/lightModeTheme";
import { darkModeTheme } from "../../constants/darkModeTheme";

import useMovieAppStore from "../../globalStateManagment/store";
import styles from "./FavoriteMovies.module.css";

export const FavoriteMovies = () => {
  const { isLight } = useMovieAppStore();
  const { favorites } = useMovieAppStore();
  const navigate = useNavigate();

  return (
    <ConfigProvider theme={isLight == true ? lightModeTheme : darkModeTheme}>
      <div className={`${styles.container}  ${isLight?styles.lightMode:styles.darkMode} `}>
        <div>
          <Button onClick={() => navigate("/")} type="primary">
            Go back
          </Button>
        </div>
        <div className={styles.moviesContainer}>
          {favorites.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </ConfigProvider>
  );
};
