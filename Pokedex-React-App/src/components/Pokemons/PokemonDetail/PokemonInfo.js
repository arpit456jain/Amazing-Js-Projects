import React from "react";
import classes from "./PokemonInfo.module.css";

const PokemonInfo = props => {
  const { pokemon } = props;
  return (
    <div className={classes.info}>
      <h3>Info</h3>
      <div className={classes["info-item"]}>
        <p className={classes["info-label"]}>Height</p>
        <p>{pokemon.height / 10} meters</p>
      </div>
      <div className={classes["info-item"]}>
        <p className={classes["info-label"]}>Weight</p>
        <p>{pokemon.weight / 10} kilograms</p>
      </div>
      <div className={classes["info-item"]}>
        <p className={classes["info-label"]}>Genration</p>
        <p>{pokemon.species.generation_id}</p>
      </div>
      <div className={classes["info-item"]}>
        <p className={classes["info-label"]}>Gender</p>
        <ul>
          {pokemon.species.gender &&
            pokemon.species.gender.map((gender, key) => (
              <li key={key}>{gender}</li>
            ))}
        </ul>
      </div>
      <div className={classes["info-item"]}>
        <p className={classes["info-label"]}>Abilities</p>
        <ul>
          {pokemon.abilities.map((ability, key) => (
            <li key={key}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonInfo;
