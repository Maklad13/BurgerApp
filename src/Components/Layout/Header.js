import { Fragment } from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div>
        <img className={classes["main-image"]} src={meals} alt="table meal" />
      </div>
    </Fragment>
  );
};

export default Header;
