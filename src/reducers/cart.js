import * as types from "./../constants/actionType";
var data = JSON.parse(localStorage.getItem("Cart"));
var initialState = [
  {
    product: {
      id: 2,
      name: "Iphone 8",
      image:
        "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_8_plus_256gb_1_1.jpg",
      description: "Do Apple sản xuất",
      price: 400,
      inventory: 20,
      rating: 4,
    },
    quantity: 5,
  },
];
const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CARD:
      console.log(state);
      return [...state];
    default:
      return [...state];
  }
};
export default cart;
