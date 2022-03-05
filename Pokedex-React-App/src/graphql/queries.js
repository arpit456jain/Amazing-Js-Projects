export const searchPokemonsQuery = (category = "id") => `
    query searchPokemons($name: String!, $order: order_by, $limit: Int, $offset: Int) {
        pokemons: pokemon_v2_pokemon(where: {name: {_iregex: $name}, id: {_lt: 898}}, order_by: {${category}: $order}, limit: $limit, offset: $offset) {
            id
            name
        }
        aggregate: pokemon_v2_pokemon_aggregate(where: {id: {_lt: 898}, name: {_regex: $name}}) {
          aggregate {
            count
          }
        }
    }
`;

export const getPokemonsQuery = (category = "id") => `
    query getPokemons($gen: Int!, $name: String!, $order: order_by, $limit: Int, $offset: Int) {
        pokemons: pokemon_v2_pokemon(where: {pokemon_v2_pokemonspecy: {generation_id: {_eq: $gen}}, id: {_lt: 898}, name: {_regex: $name}}, order_by: {${category}: $order}, limit: $limit, offset: $offset) {
            id
            name
        }

        aggregate: pokemon_v2_pokemon_aggregate(where: {pokemon_v2_pokemonspecy: {generation_id: {_eq: $gen}}, id: {_lt: 898}, name: {_regex: $name}}) {
          aggregate {
            count
          }
        }
    }
`;

export const getPokemonQuery =
  () => `query getPokemon($id: Int!, $name:String!) {
    pokemon: pokemon_v2_pokemon(where: {_or: [{name: {_eq: $name}}, {id: {_eq: $id}}]}, limit: 1) {
      id
      name
      base_experience
      height
      weight
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        stat: pokemon_v2_stat {
          name
        }
        base_stat
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
          damage_relations: pokemon_v2_typeefficacies(where: {_or: [{damage_factor: {_eq: 200}}, {damage_factor: {_eq: 0}}, {damage_factor: {_eq: 50}}, {damage_factor: {_eq: 150}}]}) {
            damage_factor
            type: pokemonV2TypeByTargetTypeId {
              name
            }
          }
        }
      }
      moves: pokemon_v2_pokemonmoves {
        move: pokemon_v2_move {
          name
          power
          accuracy
        }
      }
      species: pokemon_v2_pokemonspecy {
        capture_rate
        generation_id
        gender_rate
        evolution_chain: pokemon_v2_evolutionchain {
          species: pokemon_v2_pokemonspecies {
            id
            name
          }
        }
        descriptions: pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}}, limit: 1) {
          description: flavor_text
        }
      }
    }
  }
`;
