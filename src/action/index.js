import * as types from "./../constants/actionType";

export const addToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CARD,
    product,
    quantity,
  };
};
export const changeMsg = (msg) => {
  return {
    type: types.CHANGE_MSG,
    msg,
  };
};
export const deleteProductInCart = (product) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product,
  };
};
export const updateProductInCart = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity,
  };
};
