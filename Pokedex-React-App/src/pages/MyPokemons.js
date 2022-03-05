import React from "react";
import { useSelector } from "react-redux";

import PokemonList from "../components/Pokemons/PokemonList/PokemonList";

const MyPokemons = () => {
  const myPokemons = useSelector(state => state.myPokemons);

  if (myPokemons.length === 0) {
    return <div>You do not have any Pokemon Yet?</div>;
  }

  return <PokemonList pokemons={myPokemons} />;
};

export default MyPokemons;
