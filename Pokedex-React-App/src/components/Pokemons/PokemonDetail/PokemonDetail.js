import React, { Fragment, useState } from "react";

import PokemonInfo from "./PokemonInfo";
import PokemonStats from "./PokemonStats";
import PokemonTypes from "./PokemonTypes";
import PokemonEvo from "./PokemonEvo";
import PokemonMoveList from "./PokemonMoveList";
import CatchPokemonModal from "./Modals/CatchPokemonModal";
import CatchPokemonSuccess from "./Modals/CatchPokemonSuccess";
import CatchPokemonFail from "./Modals/CatchPokemonFail";
import { Backdrop, Modal } from "../../UI/Modal";
import LoadingPokeBall from "../../UI/LoadingPokeBall";

import classes from "./PokemonDetail.module.css";

const PokemonDetail = props => {
  const { loading, pokemon, error } = props;
  const [showMoveList, setShowMoveList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [whichModal, setWhichModal] = useState("CatchPokemonModel");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <LoadingPokeBall className={classes.loading} />;
  }

  const toggleMoveListHandler = () => {
    setShowMoveList(prevState => !prevState);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setWhichModal("CatchPokemonModel");
  };

  const onCatchPokemon = success => {
    if (success) {
      setWhichModal("CatchPokemonSuccess");
    } else {
      setWhichModal("CatchPokemonFail");
    }
  };

  return (
    <Fragment>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && (
        <Modal>
          {whichModal === "CatchPokemonModel" && (
            <CatchPokemonModal
              pokemon={pokemon}
              capture_rate={+pokemon.species.capture_rate}
              closeModal={closeModalHandler}
              onCatch={onCatchPokemon}
            />
          )}
          {whichModal === "CatchPokemonSuccess" && (
            <CatchPokemonSuccess
              pokemon={pokemon}
              closeModal={closeModalHandler}
            />
          )}
          {whichModal === "CatchPokemonFail" && (
            <CatchPokemonFail
              closeModal={closeModalHandler}
              pokename={pokemon.name}
            />
          )}
        </Modal>
      )}
      <h2 className={classes.name}>
        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
        <span>#{("000" + pokemon.id).slice(-3)}</span>
      </h2>
      <div className={classes.grid}>
        <img src={pokemon.imgUrl} alt={pokemon.name} className={classes.img} />
        <div className={classes.desc}>
          {pokemon.species.descriptions[0].description}
          <button onClick={showModalHandler}>Catch It?</button>
        </div>
        <PokemonInfo pokemon={pokemon} />
        <PokemonStats pokemon={pokemon} />
        <PokemonTypes pokemon={pokemon} />
        <PokemonEvo pokemon={pokemon} />
        <button className={classes.btn} onClick={toggleMoveListHandler}>
          {showMoveList ? "Hide" : "Show"} Moves
        </button>
        {showMoveList && <PokemonMoveList pokemon={pokemon} />}
      </div>
    </Fragment>
  );
};

export default PokemonDetail;
