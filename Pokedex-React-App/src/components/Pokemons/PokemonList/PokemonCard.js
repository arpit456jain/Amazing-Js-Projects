import React from "react";
import { Link } from "react-router-dom";
import classes from "./PokemonCard.module.css";

const PokemonCard = props => {
  const { id, name, imgUrl, owned, nickname } = props.pokemon;
  return (
    <Link to={`/pokemons/${id}`}>
      <div className={classes.card}>
        <img src={imgUrl} alt={name} className={classes.img} />
        <h3 className={classes.name}>{nickname ? nickname : name}</h3>
        {owned && <p>Owned: {owned}</p>}
        <p className={classes.pokeid}>#{("000" + id).slice(-3)}</p>
      </div>
    </Link>
  );
};

export default PokemonCard;
