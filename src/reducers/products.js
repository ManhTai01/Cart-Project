var initialState = [
  {
    id: 1,
    name: "Iphone 7",
    image:
      "https://product.hstatic.net/1000370129/product/iphone-7-vang-hong_5d4a10e75807423abdb348fcd02351bc_master_90dc7d99e6e84574ba4ee681fc008dcd_master.jpg",
    description: "Do Apple sản xuất",
    price: 300,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "Iphone 8",
    image:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_8_plus_256gb_1_1.jpg",
    description: "Do Apple sản xuất",
    price: 400,
    inventory: 20,
    rating: 4,
  },
  {
    id: 3,
    name: "Iphone X",
    image:
      "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_x_64gb_3.jpg",
    description: "Do Apple sản xuất",
    price: 500,
    inventory: 5,
    rating: 5,
  },
];
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
