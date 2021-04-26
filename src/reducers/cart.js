import * as types from "./../constants/actionType";
var data = JSON.parse(localStorage.getItem("Cart"));
var initialState = data ? data : [];
const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  switch (action.type) {
    case types.ADD_TO_CARD:
      var index = state.findIndex((x) => x.product.id === product.id);

      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity,
        });
      }
      localStorage.setItem("Cart", JSON.stringify(state));
      return [...state];
    case types.DELETE_PRODUCT_IN_CART:
      index = state.findIndex((x) => x.product.id === product.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("Cart", JSON.stringify(state));
      return state;
    case types.UPDATE_PRODUCT_IN_CART:
      index = state.findIndex((x) => x.product.id === product.id);
      if (index !== -1) {
        state[index].quantity = quantity;
        console.log(quantity);
      }
      localStorage.setItem("Cart", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
export default cart;
