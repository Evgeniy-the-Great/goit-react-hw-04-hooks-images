import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ onClose, picture }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose(e);
    }
  };

  const handleBackdropeClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose(e);
    }
  };

  return (
    <div className="Overlay" onClick={handleBackdropeClick}>
      <div className="Modal">
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  picture: PropTypes.string,
};

export default Modal;
