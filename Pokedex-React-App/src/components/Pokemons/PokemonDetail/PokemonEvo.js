import React from "react";
import { Link } from "react-router-dom";
import classes from "./PokemonEvo.module.css";

const PokemonEvo = props => {
  const { pokemon } = props;

  return (
    <div className={classes.evolutions}>
      <h3>
        Evolutions
        {pokemon.species.evolution_chain.length === 1 && (
          <span className={classes["not-evolve"]}>
            #{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} does not
            evolve.
          </span>
        )}
      </h3>
      <ul>
        {pokemon.species.evolution_chain.map((evolution, key) => (
          <li key={key} className={classes.evolution}>
            <Link to={`/pokemons/${evolution.id}`}>
              <img src={evolution.imgUrl} alt={evolution.name} />
              <h3>{evolution.name}</h3>
              <p>#{("000" + evolution.id).slice(-3)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonEvo;
