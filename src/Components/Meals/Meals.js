import { Fragment } from "react";
import AvalibaleMeals from "./AvalibaleMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvalibaleMeals />
    </Fragment>
  );
};

export default Meals;
