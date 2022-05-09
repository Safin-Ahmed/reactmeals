import React from "react";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <li className={classes.singleItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.price_Amount}>
          <h4>${props.price}</h4>
          <span>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.removeHandler}>-</button>
        <button onClick={props.addHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
