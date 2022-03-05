import React from "react";
import classes from "./PokemonStats.module.css";
import FillBar from "../../UI/FillBar";

const PokemonStats = props => {
  const { pokemon } = props;
  return (
    <div className={classes.stats}>
      <h3>Base Stats</h3>
      {pokemon.stats.map((stat, key) => (
        <div className={classes.stat} key={key}>
          <p className={classes.stat__name}>{stat.stat.name}</p>
          <FillBar
            value={stat.base_stat}
            max={255}
            label={stat.base_stat}
            height={20}
          />
        </div>
      ))}
    </div>
  );
};

export default PokemonStats;
