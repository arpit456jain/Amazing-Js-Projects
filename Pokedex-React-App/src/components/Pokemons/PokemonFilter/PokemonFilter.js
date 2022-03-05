import React, { useEffect, useRef } from "react";

import classes from "./PokemonFilter.module.css";

const PokemonFilter = props => {
  const searchRef = useRef();
  const orderRef = useRef();
  const sortByRef = useRef();
  const genRef = useRef();

  useEffect(() => {
    searchRef.current.value = props.options.search;
    orderRef.current.value = props.options.order;
    sortByRef.current.value = props.options.sortBy;
    genRef.current.value = props.options.gen;
  }, [props.options]);

  const submitHandler = event => {
    event.preventDefault();
    const data = {
      search: searchRef.current.value.toLowerCase(),
      order: orderRef.current.value,
      gen: +genRef.current.value,
      sortBy: sortByRef.current.value,
    };
    props.onFilter(data);
  };

  return (
    <form className={classes.search__form} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search Pokemon By Name"
        ref={searchRef}
        autoFocus
      />
      <select className={classes.sortBy__select} ref={sortByRef}>
        <option value="id" defaultChecked>
          ID
        </option>
        <option value="name">Name</option>
        <option value="height">Height</option>
        <option value="weight">Weight</option>
        <option value="base_experience">Base Experience</option>
      </select>
      <select className={classes.order__select} ref={orderRef}>
        <option value="asc" defaultChecked>
          Ascending
        </option>
        <option value="desc">Descending</option>
      </select>
      <select className={classes.gen__select} ref={genRef}>
        <option value="1" defaultChecked>
          Gen 1
        </option>
        <option value="2">Gen 2</option>
        <option value="3">Gen 3</option>
        <option value="4">Gen 4</option>
        <option value="5">Gen 5</option>
        <option value="6">Gen 6</option>
        <option value="7">Gen 7</option>
        <option value="0">All</option>
      </select>
      <button>Search</button>
    </form>
  );
};

export default PokemonFilter;
