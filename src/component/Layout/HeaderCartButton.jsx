import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((acc, cur) => {
    return (acc = acc + cur.amount);
  }, 0);
  return (
    <button onClick={props.cartHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
