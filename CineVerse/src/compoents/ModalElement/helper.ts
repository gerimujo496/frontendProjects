import useMovieAppStore from "../../globalStateManagment/store";
import { ShoppingItem } from "../../types/shoppingItem";

export const decrementQuantity = (
  modalElement: ShoppingItem,
  decrementQuantityShopping: (id: number) => void,
  removeItemFromShopping: (id: number) => void
) => {
  if (modalElement.quantity == 1) {
    removeItemFromShopping(modalElement.id);
  } else {
    decrementQuantityShopping(modalElement.id);
  }
};

export const calculateFullPrice = (modalElement: ShoppingItem) => {
  if (modalElement.rating > 7) {
    return `${modalElement.quantity * 1000} ALL`;
  } else {
    return `${modalElement.quantity * 500} ALL`;
  }
};
