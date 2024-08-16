import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ShoppingItem } from "../../types/shoppingItem";
import { calculateFullPrice, decrementQuantity } from "./helper";

import useMovieAppStore from "../../globalStateManagment/store";
import styles from "./ModalElement.module.css";
interface Props {
  modalElement: ShoppingItem;
}

export const ModalElement: React.FC<Props> = ({ modalElement }) => {
  const {
    incrementQuantityShopping,
    decrementQuantityShopping,
    removeItemFromShopping,
  } = useMovieAppStore();

  return (
    <div className={styles.row}>
      <div className={styles.titleWidth}>{modalElement.title} </div>{" "}
      <div className={styles.quantityContainer}>
        <FontAwesomeIcon
          onClick={() => incrementQuantityShopping(modalElement.id)}
          icon={faPlus}
        />
        <div className={styles.canNotSelectStyle}>{modalElement.quantity}</div>
        <FontAwesomeIcon
          onClick={() =>
            decrementQuantity(
              modalElement,
              decrementQuantityShopping,
              removeItemFromShopping
            )
          }
          icon={faMinus}
        />
      </div>
      <div className={styles.priceContainer} >{calculateFullPrice(modalElement)}</div>
    </div>
  );
};
