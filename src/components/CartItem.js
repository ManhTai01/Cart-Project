import { useEffect, useState } from "react";
import * as msg from "./../constants/message";

function CartItem(props) {
  var item = props.cart;
  const [quantity, setQuantity] = useState(1);
  const onDelete = (product) => {
    props.onDelete(product);
    props.onChangeMsg(msg.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };
  const onUpdateQuantity = (product, quantity) => {
    // if (value > 0) {
    //   setQuantity(value);
    // }
    // console.log(value);
    props.onUpdate(product, quantity);
    props.onChangeMsg(msg.MSG_UPDATE_CART_SUCCESS);
  };
  var total = item.quantity > 0 ? item.quantity : quantity;

  useEffect(() => {
    console.log("123213", props.cart);
  }, [quantity]);

  return (
    <tr>
      <th scope="row">
        <img src={item.product.image} alt="" className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{item.product.name}</strong>
        </h5>
      </td>
      <td>{item.product.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{total} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label
            aria-disabled="true"
            disable
            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            onClick={() => {
              onUpdateQuantity(item.product, item.quantity - 1);
            }}
          >
            <a href="#/">—</a>
          </label>
          <label
            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            onClick={() => {
              onUpdateQuantity(item.product, item.quantity + 1);
            }}
          >
            <a href="#/">+</a>
          </label>
        </div>
      </td>
      <td>{total * item.product.price}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Remove item"
          onClick={() => {
            onDelete(item.product);
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
