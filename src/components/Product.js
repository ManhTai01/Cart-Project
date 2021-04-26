import * as msg from "./../constants/message";

function Product(props) {
  const showRating = (rating) => {
    var results = [];
    for (var i = 1; i <= rating; i++) {
      results.push(<i key={i} className="fa fa-star" />);
    }
    for (var j = 1; j <= 5 - rating; j++) {
      results.push(<i key={j + 5} className="fa fa-star-o" />);
    }
    return results;
  };
  const addToCart = (product) => {
    props.onAddToCart(product);
    props.onChangeMsg(msg.MSG_ADD_TO_CARD_SUCCESS);
  };
  return (
    <div className="col-lg-4 col-md-6 mb-r">
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
          <img src={props.product.image} className="img-fluid" alt="" />
          <a href="#/">
            <div className="mask waves-light waves-effect waves-light"></div>
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <strong>
              <a href="#/">{props.product.name}</a>
            </strong>
          </h4>
          <ul className="rating">
            <li>{showRating(props.product.rating)}</li>
          </ul>
          <p className="card-text">{props.product.description}</p>
          <div className="card-footer">
            <span className="left">{props.product.price}$</span>
            <span className="right">
              <a
                href="#/"
                className="btn-floating blue-gradient"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Add to Cart"
                onClick={() => addToCart(props.product)}
              >
                <i className="fa fa-shopping-cart"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
