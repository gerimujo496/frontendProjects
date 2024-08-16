import { Input, Switch } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ShopModal } from "../ShopModal/ShopModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import React from "react";
import styles from "./HeaderMobile.module.css";
import GenreMenu from "../MainMenu/MainMenu";
import useMovieAppStore from "../../globalStateManagment/store";

export const HeaderMobile = () => {
  const { isLight, setIsLight, setCurrentFilterName, setCurrentPageNumber } =
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
    <div className={styles.headerMobile}>
      <div className={styles.headerSection1}>
        <GenreMenu />
        <h2 className={isLight == true ? styles.lightMode : styles.darkMode}>
          Cineverse
        </h2>
        <div className={styles.buttonContainer}>
          <Switch
            className={styles.toggle}
            checked={isLight}
            onChange={onChange}
          />
        </div>
      </div>
      <Input
        onPressEnter={handlePressEnter}
        className={styles.searchBar}
        size="large"
        placeholder="Search for movies"
        prefix={<SearchOutlined />}
      />
      <div className={styles.mobileHeaderButtons}>
        <ShopModal />
        <FontAwesomeIcon
          className={styles.favoriteSection}
          size="2x"
          color="red"
          onClick={() => navigate("/favoriteMovies")}
          icon={faHeart}
        />
      </div>
    </div>
  );
};
