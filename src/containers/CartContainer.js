import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProductInCart, updateProductInCart } from "../action";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import Cart from "./../components/Cart";
import { changeMsg } from "./../action/index";
import * as msg from "./../constants/message";
function CartContainer(props) {
  const showCartItem = (cart) => {
    var results = msg.MSG_CART_EMPTY;
    if (cart.length > 0) {
      results = cart.map((item, index) => (
        <CartItem
          key={index}
          cart={item}
          onDelete={props.onDelete}
          onChangeMsg={props.onChangeMsg}
          onUpdate={props.onUpdate}
        />
      ));
    }
    return results;
  };
  const showTotal = (cart) => {
    var results = null;
    if (cart.length > 0) {
      results = <CartResult cart={cart} />;
    }
    return results;
  };
  return (
    <Cart>
      <>
        {showCartItem(props.cart)}
        {showTotal(props.cart)}
      </>
    </Cart>
  );
}
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};
const mapDispatchtoProps = (dispatch, props) => {
  return {
    onDelete: (product) => {
      dispatch(deleteProductInCart(product));
    },
    onChangeMsg: (msg) => {
      dispatch(changeMsg(msg));
    },
    onUpdate: (product, quantity) => {
      dispatch(updateProductInCart(product, quantity));
    },
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(CartContainer);
