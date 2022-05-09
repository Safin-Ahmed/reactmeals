import React, { useContext, useRef } from "react";
import CartContext from "../../../store/cartContext";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const cartCtx = useContext(CartContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const item = {
      ...props.item,
      amount: Number(inputRef.current.value),
    };

    cartCtx.addItem(item);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
