import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.nav__logo}>
        <Link to="/">
          <span>P</span>
          okedex
        </Link>
      </h1>
      <ul className={classes.nav__list}>
        <li>
          <Link to="/my-pokemons">Your Pokemons</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
