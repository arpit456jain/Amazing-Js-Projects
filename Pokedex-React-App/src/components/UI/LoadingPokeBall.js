import React from "react";
import classes from "./LoadingPokeBall.module.css";

const LoadingPokeBall = props => {
  const classNames = `${classes.container} ${props.className}`;

  return (
    <div className={classNames}>
      <img
        className={classes["pokeball"]}
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png"
        }
        alt="Loading..."
      ></img>
    </div>
  );
};

export default LoadingPokeBall;
