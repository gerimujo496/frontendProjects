import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Modal } from "antd";
import { useState } from "react";
import { ModalElement } from "../ModalElement/ModalElement";

import styles from "./ShopModal.module.css";
import useMovieAppStore from "../../globalStateManagment/store";

export const ShopModal = () => {
  const { isLight, shoppingMovies } = useMovieAppStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Badge count={shoppingMovies.length}>
        <FontAwesomeIcon
          onClick={() => setIsModalOpen(true)}
          className={isLight ? styles.lightMode : styles.darkMode}
          size="2x"
          icon={faCartPlus}
        />
      </Badge>

      <Modal
        title="Lista e shportes"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        className={styles.canNotSelect}
      >
        <div className={styles.modalContainer}>
          {shoppingMovies.map((item) => (
            <ModalElement modalElement={item} />
          ))}
        </div>
      </Modal>
    </>
  );
};
