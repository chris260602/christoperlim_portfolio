import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import ExitIcon from "../../assets/icons/ExitIcon";
import PortfolioBadge from "../PortfolioBadge/PortfolioBadge";
const ModalTarget = document.getElementById("modal");
const Modal = (props) => {
  const { type } = props;
  const [closeModal, setCloseModal] = useState(false);

  const CloseModal = () => {
    setCloseModal(true);
    setTimeout(props.manage, 300);
  };
  return ReactDOM.createPortal(
    <>
      <div className={classes.ModalWrapper}>
        <div
          className={`${classes.backdrop} ${closeModal ? classes.closing : ""}`}
          onClick={CloseModal}
        ></div>
        <div
          className={`modal ${classes.modal} ${
            closeModal ? classes.closing : ""
          } `}
        >
          <div onClick={CloseModal} className={classes.close}>
            <ExitIcon />
          </div>

          <div className={classes.modalContainer}>
            <img src={props.image} alt={props.title} />
            <div className={classes.modalDescContainer}>
              {type ? <PortfolioBadge text={type} /> : ""}
              <h1>{props.title}</h1>
              <p className={classes.modalText}>{props.desc}</p>
              {!props.link ? (
                ""
              ) : (
                <a href={props.link} target="_blank" rel="noreferrer">
                  More Info
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>,
    ModalTarget
  );
};

export default Modal;
