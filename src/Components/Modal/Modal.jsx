import "./Modal.scss";
import Button from "../Button/Button";
import React, { Component } from "react";

class Modal extends Component {
  closeModalOutside = (e) => {
    if (!e.target.closest(".modal-wrapper")) {
      this.props.closeModal();
    }
  };

  render() {
    const { isOpened, text, header, closeModal } = this.props;
    return (
      <div
        className={`modal ${isOpened ? "open" : "close"} `}
        onClick={this.closeModalOutside}
      >
        <div className="modal-wrapper">
          <div className="modal-wrapper-header">
            <span className="modal-wrapper-header-title">{header}</span>
            <span className="modal-wrapper-header-close" onClick={closeModal} />
          </div>
          <div className="modal-content">
            <p className="modal-content-text">{text}</p>
          </div>
          <div className="modal-buttons">
            <Button classNameForBtn="modal-buttons-btn" text="Confirm" />
            <Button classNameForBtn="modal-buttons-btn" text="Cancel" />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
