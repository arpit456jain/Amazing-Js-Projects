import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Pokemons from "./pages/Pokemons";
import Pokemon from "./pages/Pokemon";
import MyPokemons from "./pages/MyPokemons";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemons/:identifier" element={<Pokemon />} />
        <Route path="/my-pokemons" element={<MyPokemons />} />
      </Routes>
    </Layout>
  );
};

export default App;
