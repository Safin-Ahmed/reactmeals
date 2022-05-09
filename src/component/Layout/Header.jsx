import React from "react";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton cartHandler={props.cartHandler} />
      </header>
      <div>
        <img
          src={mealImage}
          className={classes.banner}
          alt="A table full of delicious foods"
        />
      </div>
    </>
  );
};

export default Header;
