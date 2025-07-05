import React from "react";
import Modal from "react-modal";
import "./SmallPopup.css";

const SmallPopup = ({ isOpen, onRequestClose, title, description }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="SmallModal"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <div className="SmallModal-header">
        <h2>{title}</h2>
        <button onClick={onRequestClose} className="close-btn">
          X
        </button>
      </div>
      <div className="SmallModal-content">
        {/* <img src={img} alt="Popup" /> */}
        <div className="text-gray-500">{description}</div>
      </div>
    </Modal>
  );
};

export default SmallPopup;
