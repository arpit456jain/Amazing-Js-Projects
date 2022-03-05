import React from "react";
import PokemonCard from "./PokemonCard";
import classes from "./PokemonList.module.css";

const PokemonList = props => {
  const { pokemons } = props;

  return (
    <div className={classes.container}>
      {pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
