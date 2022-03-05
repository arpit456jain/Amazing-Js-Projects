import { configureStore } from "@reduxjs/toolkit";
import pokemonReducers from "./pokemonSlice";

const store = configureStore({
  reducer: { myPokemons: pokemonReducers },
});

export default store;
