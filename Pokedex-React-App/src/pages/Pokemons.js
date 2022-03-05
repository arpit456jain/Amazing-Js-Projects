import React, { useEffect, useState, useCallback } from "react";
import { getPokemons } from "../graphql/api";
import PokemonList from "../components/Pokemons/PokemonList/PokemonList";
import PokemonFilter from "../components/Pokemons/PokemonFilter/PokemonFilter";
import InfiniteScroll from "../components/UI/InfiniteScroll";
import LoadingPokeBall from "../components/UI/LoadingPokeBall";

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [options, setOptions] = useState({
    gen: 1,
    search: "",
    limit: 10,
    offset: 0,
    order: "asc",
    sortBy: "id",
  });

  useEffect(() => {
    setIsLoading(true);
    getPokemons(
      options.gen,
      options.search,
      options.limit,
      options.offset,
      options.order,
      options.sortBy
    )
      .then(data => {
        setPokemons(data.pokemons);
        if (data.pokemons.length === data.count) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [options]);

  const onFilterHandler = data => {
    const newOptions = { ...options, ...data };

    const optionChanged = Object.keys(data).some(
      key => options[key] !== newOptions[key]
    );

    if (!optionChanged) {
      return;
    }

    setOptions(prevData => {
      return { ...prevData, ...data };
    });
  };

  const onLoadMore = useCallback(() => {
    setOptions(prevData => {
      return { ...prevData, limit: prevData.limit + 10 };
    });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <InfiniteScroll
      onLoadMore={onLoadMore}
      loading={isLoading}
      hasMore={hasMore}
    >
      <PokemonFilter onFilter={onFilterHandler} options={options} />
      <PokemonList pokemons={pokemons} />
      {isLoading && <LoadingPokeBall />}
    </InfiniteScroll>
  );
};

export default Pokemons;
