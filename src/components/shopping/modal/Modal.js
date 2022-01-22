import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Modal.css";
export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  ///////////////////////////////////////
  //  close modal with Esc in keyboard
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  /////////////////////////////////////////
  return (
    <>
      {showModal ? (
        <div
          className="ModalBackground-container"
          ref={modalRef}
          onClick={closeModal}
        >
          <div>سلام</div>
        </div>
      ) : null}
    </>
  );
};
