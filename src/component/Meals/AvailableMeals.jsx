import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },

  {
    id: "m2",
    name: "Noodles",
    description: "Maggie Instant Noodles",
    price: 16.99,
  },

  {
    id: "m3",
    name: "Chillox Burger",
    description: "A Dhanmondi Speciality",
    price: 10.99,
  },

  {
    id: "m4",
    name: "Dominos Pizza",
    description: "Boroloxx er Pizza",
    price: 32.99,
  },

  {
    id: "m5",
    name: "Gorur Goshto",
    description: "700 Taka Kg",
    price: 122.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
