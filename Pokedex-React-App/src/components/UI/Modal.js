import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = props => {
  const backdrop = (
    <div
      className={classes.backdrop}
      style={{ zIndex: props.zIndex }}
      onClick={props.onClick}
    ></div>
  );
  return ReactDOM.createPortal(backdrop, document.getElementById("backdrop"));
};

const Modal = props => {
  const classNames = `${classes.modal} ${props.className}`;
  const modal = (
    <div className={classNames} style={{ zIndex: props.zIndex }}>
      {props.children}
    </div>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal"));
};

export { Backdrop, Modal };
