import React from "react";
import { Input, Switch } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ShopModal } from "../ShopModal/ShopModal";

import styles from "./HeaderDesktop.module.css";
import useMovieAppStore from "../../globalStateManagment/store";

export const HeaderDesktop = () => {
  const { isLight, setCurrentFilterName, setIsLight, setCurrentPageNumber } =
    useMovieAppStore();

  const onChange = (checked: boolean) => {
    setIsLight(checked);
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setCurrentFilterName((e.target as HTMLInputElement).value);
    setCurrentPageNumber(1);
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.headerDesktop}>
        <h2 className={isLight == true ? styles.lightMode : styles.darkMode}>
          Cineverse
        </h2>
        <Input
          onPressEnter={handlePressEnter}
          className={styles.searchBar}
          size="large"
          placeholder="Search for movies"
          prefix={<SearchOutlined />}
        />
        <div className={styles.buttonContainer}>
          <ShopModal />

          <FontAwesomeIcon
            className={styles.favoriteSection}
            size="2x"
            color="red"
            onClick={() => navigate("/favoriteMovies")}
            icon={faHeart}
          />
          <Switch
            className={styles.toggle}
            checked={isLight}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
