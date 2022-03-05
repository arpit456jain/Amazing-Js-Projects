import {
  searchPokemonsQuery,
  getPokemonsQuery,
  getPokemonQuery,
} from "./queries";

const API = "https://beta.pokeapi.co/graphql/v1beta";
const IMAGE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

const fetchGraphQL = async (query, variables, operationName) => {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
      operationName,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export const searchPokemons = async (
  name,
  limit,
  offset,
  order,
  sortBy = "id"
) => {
  const { data } = await fetchGraphQL(
    searchPokemonsQuery(sortBy),
    { name, order, limit, offset },
    "searchPokemons"
  );

  const count = data.aggregate.aggregate.count;

  const transformedData = data.pokemons.map(pokemon => {
    return {
      ...pokemon,
      imgUrl: `${IMAGE}/${pokemon.id}.png`,
    };
  });

  if (transformedData.length === 0) {
    throw new Error("No pokemons found");
  }

  return { pokemons: transformedData, count };
};

export const getPokemons = async (
  gen,
  name,
  limit,
  offset,
  order,
  sortBy = "id"
) => {
  if (gen === 0) {
    return await searchPokemons(name, limit, offset, order, sortBy);
  }

  const { data } = await fetchGraphQL(
    getPokemonsQuery(sortBy),
    { gen, name, order, limit, offset },
    "getPokemons"
  );

  const count = data.aggregate.aggregate.count;

  const transformedData = data.pokemons.map(pokemon => ({
    ...pokemon,
    imgUrl: `${IMAGE}/${pokemon.id}.png`,
  }));

  if (transformedData.length === 0) {
    throw new Error(`No Results found for ${name} in Selected Generation`);
  }

  return { pokemons: transformedData, count };
};

export const getPokemon = async (id, name = "") => {
  const response = await fetchGraphQL(
    getPokemonQuery(),
    { id, name },
    "getPokemon"
  );

  const pokemon = response.data.pokemon[0];

  let types = [];
  let weak_against = [];
  let strong_against = [];
  let gender = [];

  if (pokemon.species.gender_rate === 0) {
    gender = ["male"];
  } else if (pokemon.species.gender_rate === 8) {
    gender = ["female"];
  } else if (pokemon.species.gender_rate === -1) {
    gender = ["genderless"];
  } else if (pokemon.species.gender_rate) {
    gender = ["male", "female"];
  } else {
    gender = ["undefined"];
  }

  for (let type of pokemon.types) {
    types.push(type.type.name);
    for (let damage_relation of type.type.damage_relations) {
      if (
        damage_relation.damage_factor === 200 ||
        damage_relation.damage_factor === 150
      ) {
        if (strong_against.indexOf(damage_relation.type.name) === -1) {
          strong_against.push([
            damage_relation.type.name,
            damage_relation.damage_factor === 200 ? "2x" : "1.5x",
          ]);
        }
      } else {
        if (weak_against.indexOf(damage_relation.type.name) === -1) {
          weak_against.push([
            damage_relation.type.name,
            damage_relation.damage_factor === 0 ? "0x" : "0.5x",
          ]);
        }
      }
    }
  }

  const sortedEvoChain = pokemon.species.evolution_chain.species.sort(
    (p1, p2) => {
      return p1.id - p2.id;
    }
  );

  const uniqueMoveList = [
    ...new Set(pokemon.moves.map(move => move.move.name)),
  ].map(name => pokemon.moves.find(move => move.move.name === name));

  const transformedData = {
    ...pokemon,
    species: {
      ...pokemon.species,
      evolution_chain: sortedEvoChain.map(species => ({
        ...species,
        imgUrl: `${IMAGE}/${species.id}.png`,
      })),
      gender,
    },
    types: {
      types,
      weak_against,
      strong_against,
    },
    moves: uniqueMoveList,
    imgUrl: `${IMAGE}/${pokemon.id}.png`,
  };

  return transformedData;
};
