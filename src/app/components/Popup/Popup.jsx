import React from "react";
import Modal from "react-modal";
import "./Popup.css";

const Popup = ({ isOpen, onRequestClose, title, description }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal_mf"
      overlayClassName="modal-overlay_mf"
      ariaHideApp={false}
    >
      <div className="modal-header">
        <h2>{title}</h2>
        <button onClick={onRequestClose} className="close-btn">
          X
        </button>
      </div>
      <div className="modal-content">
        {/* <img src={img} alt="Popup" /> */}
        <div className="text-gray-500">{description}</div>
      </div>
    </Modal>
  );
};

export default Popup;
