import React from "react";
import classes from "./PokemonMoveList.module.css";

const PokemonMoveList = props => {
  const { pokemon } = props;
  return (
    <div className={classes.moves}>
      {pokemon.moves.map((move, key) => (
        <div className={classes.move} key={key}>
          <span className={classes.move__id}>{key + 1}</span>
          <span className={classes.move__name}>{move.move.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PokemonMoveList;
