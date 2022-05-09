import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item, qty = null) => {
    cartCtx.addItem(item, qty);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>mew</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClick}>
      {cartCtx.items.length === 0 && (
        <div className={classes["empty-msg"]}>
          <h2>Your Cart is Empty</h2>
        </div>
      )}
      <div>
        <ul className={classes["cart-items"]}>
          {cartCtx.items.map((item) => (
            <CartItem
              name={item.name}
              price={item.price}
              amount={item.amount}
              removeHandler={cartItemRemoveHandler.bind(null, item.id)}
              addHandler={cartItemAddHandler.bind(null, item, 1)}
            />
          ))}
        </ul>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick} className={classes["button--alt"]}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button
            onClick={() => {
              alert("Your order is on the way");
            }}
            className={classes.button}
          >
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
