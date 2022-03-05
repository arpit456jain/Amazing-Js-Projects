const API = "https://pokeapi.co/api/v2";
const IMAGE_PATH =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

const extractPokemonData = async pokemon => {
  // Prepares useable data from the API
  const species = await getPokemonSpecies(pokemon.id);
  const typeDetails = await getTypeDetails(pokemon.types[0].type.url);

  return {
    name: pokemon.name,
    id: pokemon.id,
    abilities: pokemon.abilities.map(ability => ability.ability.name),
    types: pokemon.types.map(type => type.type.name),
    stats: pokemon.stats.map(stat => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    moves: pokemon.moves.map(move => move.move.name),
    height: pokemon.height,
    weight: pokemon.weight,
    imgUrl: `${IMAGE_PATH}/${pokemon.id}.png`,
    ...species,
    ...typeDetails,
  };
};

export const getPokemons = async (limit = 20, offset = 0) => {
  // Gets Pokemons by limit and offset
  const response = await fetch(
    `${API}/pokemon?limit=${limit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error(`Error getting Pokemons: ${response.status}`);
  }

  const responseData = await response.json();
  let transformedData = null;

  transformedData = responseData.results.map(pokemon => ({
    name: pokemon.name,
    id: pokemon.url.split("/")[6],
    imgUrl: `${IMAGE_PATH}/${pokemon.url.split("/")[6]}.png`,
  }));

  return transformedData;
};

export const getPokemonsByGen = async gen => {
  // Gets Pokemons by generation
  const GENRATIONS = {
    1: { offset: 0, limit: 151 },
    2: { offset: 151, limit: 100 },
    3: { offset: 251, limit: 135 },
    4: { offset: 386, limit: 107 },
    5: { offset: 493, limit: 156 },
    6: { offset: 649, limit: 72 },
  };

  const response = await getPokemons(
    GENRATIONS[gen].limit,
    GENRATIONS[gen].offset
  );

  return response;
};

export const getPokemonByID = async id => {
  // Gets Pokemon by ID
  const response = await fetch(`${API}/pokemon/${id}`);

  if (response.status === 404) {
    throw new Error("Pokemon Not Found");
  } else if (!response.ok) {
    throw new Error("Something Went Wrong");
  }

  const responseData = await response.json();

  let transformedData = null;

  transformedData = await extractPokemonData(responseData);

  return transformedData;
};

export const getEvolutionChain = async alink => {
  // Gets Evolution Chain of a Pokemon
  const response = await fetch(alink);

  if (!response.ok) {
    throw new Error(`Error getting Evolution Chain: ${response.status}`);
  }

  const responseData = await response.json();

  let transformedData = [];

  let { chain: evoChain } = responseData;
  let currentPokemon = evoChain.species.name;
  let id = evoChain.species.url.split("/")[6];
  transformedData.push({
    id,
    name: currentPokemon,
    imgUrl: `${IMAGE_PATH}/${id}.png`,
  });
  while (evoChain.evolves_to.length > 0) {
    const { evolves_to } = evoChain;
    evoChain = evolves_to[0];
    currentPokemon = evoChain.species.name;
    id = evoChain.species.url.split("/")[6];
    transformedData.push({
      id,
      name: currentPokemon,
      imgUrl: `${IMAGE_PATH}/${id}.png`,
    });
  }
  return transformedData;
};

export const getPokemonSpecies = async id => {
  // Gets Details of Pokemon Species
  const response = await fetch(`${API}/pokemon-species/${id}`);

  if (!response.ok) {
    throw new Error(`Error getting Pokemon Species: ${response.status}`);
  }
  const responseData = await response.json();

  let gender = [];
  if (responseData.gender_rate === 0) {
    gender = ["male"];
  } else if (responseData.gender_rate === 8) {
    gender = ["female"];
  } else if (responseData.gender_rate === -1) {
    gender = ["genderless"];
  } else if (responseData.gender_rate) {
    gender = ["male", "female"];
  } else {
    gender = ["undefined"];
  }

  return {
    description: responseData.flavor_text_entries.find(
      entry => entry.language.name === "en"
    ).flavor_text,
    color: responseData.color.name,
    habitat: responseData.habitat ? responseData.habitat.name : null,
    evolution_chain: await getEvolutionChain(responseData.evolution_chain.url),
    gender,
  };
};

export const getTypeDetails = async alink => {
  const response = await fetch(alink);

  if (!response.ok) {
    throw new Error(`Error Getting Type Details: ${response.status}`);
  }

  const responseData = await response.json();

  let transformedData = {};
  const damage_relations = responseData.damage_relations;
  for (let relation in responseData.damage_relations) {
    if (relation === "double_damage_from") {
      transformedData["weak_against"] = damage_relations[relation].map(
        type => type.name
      );
    } else if (relation === "double_damage_to") {
      transformedData["strong_against"] = damage_relations[relation].map(
        type => type.name
      );
    }
  }

  return transformedData;
};
