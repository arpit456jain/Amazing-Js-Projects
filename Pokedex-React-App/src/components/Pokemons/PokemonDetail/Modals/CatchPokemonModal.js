import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import catchPokemonHelper from "../../../../helpers/catchPokemonHelper";

import { Backdrop } from "../../../UI/Modal";
import LoadingPokeBall from "../../../UI/LoadingPokeBall";
import classes from "./CatchPokemonModal.module.css";

const CatchPokemonModal = props => {
  const { capture_rate, closeModal } = props;
  const myPokemons = useSelector(state => state.myPokemons);
  const [catchingPokemon, setCatchingPokemon] = useState(false);

  const foundPokemon = myPokemons.find(
    pokemon => pokemon.id === props.pokemon.id
  );

  let owned = 0;
  if (foundPokemon) {
    owned = foundPokemon.owned;
  }

  let catch_rate_class;

  if (capture_rate < 100) {
    catch_rate_class = classes["text-danger"];
  } else if (capture_rate > 150) {
    catch_rate_class = classes["text-success"];
  } else {
    catch_rate_class = classes["text-warning"];
  }

  const addPokemon = () => {
    setCatchingPokemon(true);
    catchPokemonHelper(capture_rate, 255).then(result => {
      props.onCatch(result);
      setCatchingPokemon(false);
    });
  };

  return (
    <Fragment>
      <div className={classes.confirm__modal}>
        {catchingPokemon && <Backdrop />}
        {catchingPokemon && <LoadingPokeBall className={classes.catching} />}
        <h1>Are you sure you want to Catch this pokemon?</h1>
        <p className={catch_rate_class}>Catch Rate: {capture_rate}</p>
        <p className={classes["text-info"]}>Owned: {owned}</p>
        <div className={classes.modal__actions}>
          <button className={classes.primary} onClick={addPokemon}>
            Catch
          </button>
          <button onClick={closeModal} className={classes.danger}>
            Cancel
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CatchPokemonModal;
