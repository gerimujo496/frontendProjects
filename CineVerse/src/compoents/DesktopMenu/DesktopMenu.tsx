import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertToMenu, returnGenreFromMenuClick } from "../../helper";
import { useNavigate } from "react-router-dom";

import useMovieAppStore from "../../globalStateManagment/store";
import styles from "./DesktopMenu.module.css";

export const DesktopMenu = () => {
  const navigate = useNavigate();

  const { setCurrentFilterName, setCurrentPageNumber } = useMovieAppStore();

  const onSelectMenu = (key: string) => {
    setCurrentFilterName(returnGenreFromMenuClick(parseInt(key)));
    setCurrentPageNumber(1);
    navigate("/");
  };

  return (
    <div className={styles.desktopMenu}>
      <Menu
        onSelect={({ item, key }) => onSelectMenu(key)}
        mode="inline"
        items={convertToMenu().map((item) => {
          return { ...item, icon: <FontAwesomeIcon icon={item.icon} /> };
        })}
      />
    </div>
  );
};
