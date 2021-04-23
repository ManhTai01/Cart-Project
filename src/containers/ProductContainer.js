import Products from "./../components/Products";
import Product from "./../components/Product";
import PropTypes from "prop-types";

import { connect } from "react-redux";
function ProductsContainer(props) {
  return (
    <Products>
      {props.products &&
        props.products.map((product, index) => {
          return <Product key={index} product={product} />;
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

export default connect(mapStateToProps, null)(ProductsContainer);
