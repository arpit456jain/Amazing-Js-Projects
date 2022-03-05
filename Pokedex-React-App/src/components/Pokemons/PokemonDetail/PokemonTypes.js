import React from "react";
import classes from "./PokemonTypes.module.css";

const PokemonTypes = props => {
  const { pokemon } = props;
  return (
    <div className={classes.types}>
      <div>
        <h3>Types</h3>
        <ul>
          {pokemon.types.types.map((type, key) => (
            <li
              key={key}
              className={`${classes[`type-${type}`]} ${classes.type}`}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      {pokemon.types.weak_against.length > 0 && (
        <div>
          <h3>Weak Against</h3>
          <ul>
            {pokemon.types.weak_against.map((type, key) => (
              <li
                key={key}
                className={`${classes[`type-${type[0]}`]} ${classes.type}`}
              >
                {type[0]}
                <span className={classes.multiplier}>{type[1]}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {pokemon.types.strong_against.length > 0 && (
        <div>
          <h3>Strong Against</h3>
          <ul>
            {pokemon.types.strong_against.map((type, key) => (
              <li
                key={key}
                className={`${classes[`type-${type[0]}`]} ${classes.type}`}
              >
                {type[0]}
                <span className={classes.multiplier}>{type[1]}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonTypes;
