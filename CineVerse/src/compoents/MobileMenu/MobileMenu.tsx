import React, { useState } from "react";
import styles from "./MobileMenu.module.css";
import { Button, Drawer, Menu } from "antd";
import { convertToMenu, returnGenreFromMenuClick } from "../../helper";
import { MenuOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMovieAppStore from "../../globalStateManagment/store";

export const MobileMenu = () => {

  const { setCurrentFilterName, setCurrentPageNumber } = useMovieAppStore();

  const [drawerVisible, setDrawerVisible] = useState(false);

  const onSelectMenu = (key: string) => {
    setCurrentFilterName(returnGenreFromMenuClick(parseInt(key)));
    setCurrentPageNumber(1);
  };
  
  return (
    <div>
      <div className={styles.mobileMenuButton}>
        <Button
          type="primary"
          icon={<MenuOutlined />}
          onClick={() => setDrawerVisible(true)}
        />
      </div>
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Menu
          mode="inline"
          onSelect={({ item, key }) => onSelectMenu(key)}
          items={convertToMenu().map((item) => {
            return { ...item, icon: <FontAwesomeIcon icon={item.icon} /> };
          })}
        />
      </Drawer>
    </div>
  );
};
