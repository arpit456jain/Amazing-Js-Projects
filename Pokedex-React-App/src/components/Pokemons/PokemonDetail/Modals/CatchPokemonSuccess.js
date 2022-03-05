import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { pokemonActions } from "../../../../store/pokemonSlice";

import classes from "./CatchPokemonSuccess.module.css";
import modalClasses from "./CatchPokemonModal.module.css";

const CatchPokemonStatus = props => {
  const { closeModal, pokemon } = props;
  const [invalidName, setInvalidName] = useState(false);
  const dispatch = useDispatch();
  const nickNameRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    if (!nickNameRef.current.value) {
      setInvalidName(true);
      return;
    }

    dispatch(
      pokemonActions.addPokemon({
        ...pokemon,
        nickname: nickNameRef.current.value,
      })
    );
    closeModal();
  };

  return (
    <div className={classes.modal}>
      <h1 className={modalClasses["text-success"]}>You Got The Pokemon!</h1>
      <img src={pokemon.imgUrl} alt={pokemon.name} className={classes.img} />
      <p className={classes.pokemon__name}>{pokemon.name}</p>
      <form className={classes.modal__form} onSubmit={submitHandler}>
        <div className={classes.modal__form__input}>
          <label htmlFor="nickname">Give Your New Pokemon a Nickname!</label>
          <input
            type="text"
            id="nickname"
            placeholder="Nickname"
            ref={nickNameRef}
          />
          {invalidName && (
            <p className={modalClasses["text-danger"]}>
              Please enter a nickname
            </p>
          )}
        </div>
        <div className={modalClasses.modal__actions}>
          <button type="submit" className={modalClasses.success}>
            Catch
          </button>
          <button
            type="button"
            onClick={closeModal}
            className={modalClasses.danger}
          >
            Release
          </button>
        </div>
      </form>
    </div>
  );
};

export default CatchPokemonStatus;
