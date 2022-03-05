import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { getPokemon } from "../graphql/api";
import PokemonDetail from "../components/Pokemons/PokemonDetail/PokemonDetail";

const Pokemon = () => {
  const { identifier } = useParams();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const myPokemons = useSelector(state => state.myPokemons);

  useEffect(() => {
    window.scrollTo(0, 100);

    let id = -1;
    let name = "";

    id = parseInt(identifier);
    if (isNaN(id)) {
      id = -1;
      name = identifier.toLowerCase().replace(" ", "-");
    }

    const existingPokemon = myPokemons.find(
      pokemon => pokemon.id === id || pokemon.name === name
    );

    if (existingPokemon) {
      setPokemon(existingPokemon);
      setLoading(false);
    } else {
      setLoading(true);
      getPokemon(id, name)
        .then(data => {
          setPokemon(data);
          setLoading(false);
        })
        .catch(setError);
    }
  }, [identifier, myPokemons]);

  return <PokemonDetail pokemon={pokemon} loading={loading} error={error} />;
};

export default Pokemon;
