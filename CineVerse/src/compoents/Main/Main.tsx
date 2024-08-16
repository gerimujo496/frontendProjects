import { Header } from "../Header/Header";
import { Body } from "../Body/Body";
import { ConfigProvider } from "antd";
import { lightModeTheme } from "../../constants/lightModeTheme";
import { darkModeTheme } from "../../constants/darkModeTheme";
import useMovieAppStore from "../../globalStateManagment/store";

import styles from "./Main.module.css";


export const Main = () => {
  const { isLight } = useMovieAppStore();

  return (
    <div
      className={`${styles.mainContainer}  ${
        isLight == true ? styles.lightMode : styles.darkMode
      }`}
    >
      <ConfigProvider theme={isLight == true ? lightModeTheme : darkModeTheme}>
        <Header />
        <Body />
      </ConfigProvider>
    </div>
  );
};
