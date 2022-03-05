import React from "react";
import classes from "./FillBar.module.css";

const FillBar = props => {
  const { value, max, label, height } = props;

  return (
    <div className={classes.FillBar} style={{ height }}>
      <div
        className={classes.FillBar__fill}
        style={{
          width: `${(value / max) * 100}%`,
        }}
      >
        <span className={classes.FillBar__label}>{label}</span>
      </div>
    </div>
  );
};

export default FillBar;
