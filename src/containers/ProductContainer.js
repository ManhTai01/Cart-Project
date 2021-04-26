import Products from "./../components/Products";
import Product from "./../components/Product";
import PropTypes from "prop-types";
import { addToCart, changeMsg } from "./../action/index";

import { connect } from "react-redux";
function ProductsContainer(props) {
  return (
    <Products>
      {props.products &&
        props.products.map((product, index) => {
          return (
            <Product
              key={index}
              product={product}
              onAddToCart={props.onAddToCart}
              onChangeMsg={props.onChangeMsg}
            />
          );
        })}
    </Products>
  );
}
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProp = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(addToCart(product, 1));
    },
    onChangeMsg: (msg) => {
      dispatch(changeMsg(msg));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(ProductsContainer);
