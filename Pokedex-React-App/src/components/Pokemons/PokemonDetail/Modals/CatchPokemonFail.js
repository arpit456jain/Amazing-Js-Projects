import React from "react";

import classes from "./CatchPokemonFail.module.css";
import modalClasses from "./CatchPokemonModal.module.css";

const CatchPokemonFail = props => {
  const { closeModal } = props;
  return (
    <div className={classes.modal}>
      <h1 className={modalClasses["text-danger"]}>
        {props.pokename} was not caught!
      </h1>
      <div
        className={`${modalClasses.modal__actions} ${classes.modal__actions}`}
      >
        <button onClick={closeModal} className={modalClasses.primary}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CatchPokemonFail;
