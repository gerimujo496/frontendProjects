import { MainMenu } from "../MainMenu/MainMenu";
import { LoadingOutlined } from "@ant-design/icons";
import { Movies } from "../Movies/Movies";
import { Spin, Result } from "antd";
import { useMovies } from "../../hooks/useMovies";

import styles from "./Body.module.css";
import { Outlet } from "react-router-dom";

export const Body = () => {
  const { error, isLoading } = useMovies();

  if (error) {
    return <Result subTitle={error?.message} />;
  }

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.menuDispayBody}>
        <MainMenu />
      </div>
      <div className={styles.moviesContainer}>
        {isLoading && (
          <Spin indicator={<LoadingOutlined spin />} size="large" />
        )}

        <Outlet />
      </div>
    </div>
  );
};
