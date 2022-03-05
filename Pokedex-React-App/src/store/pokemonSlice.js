import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "myPokemon",
  initialState: [],
  reducers: {
    addPokemon(state, action) {
      const existingPokemon = state.find(
        pokemon => pokemon.name === action.payload.name
      );
      if (!existingPokemon) {
        state.push({ ...action.payload, owned: 1 });
      } else {
        existingPokemon.owned += 1;
      }
    },
  },
});

export const pokemonActions = pokemonSlice.actions;

export default pokemonSlice.reducer;
