import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import Cart from "./../components/Cart";
import * as msg from "./../constants/message";
function CartContainer(props) {
  const showCartItem = (cart) => {
    var results = msg.MSG_CART_EMPTY;
    if (cart.length > 0) {
      results = cart.map((item, index) => <CartItem key={index} cart={item} />);
    }
    return results;
  };
  return <Cart>{showCartItem(props.cart)}</Cart>;
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
export default connect(mapStateToProps, null)(CartContainer);
