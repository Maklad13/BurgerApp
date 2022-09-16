import { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./AvalibaleMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvalibaleMeals = () => {
  const [meals, setMeals] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  useEffect(() => {
    const fetchMeals = async function () {
      const res = await fetch(
        "https://foodapp-55578-default-rtdb.firebaseio.com/meals.json"
      );
      if (!res.ok) throw new Error("sorry!, something went wrong :(");
      const data = await res.json();
      const loadMeals = [];
      for (const key in data) {
        loadMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadMeals);
    };
    fetchMeals().catch((error) => {
      setFetchError(error.message);
    });
  }, []);
  if (fetchError) {
    return (
      <section className={classes.mealsError}>
        <p>{fetchError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
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

export default AvalibaleMeals;
