import "./Button.scss";
import React, { Component } from "react";

class Button extends Component {
  render() {
    const { openModal, classNameForBtn, text } = this.props;
    return (
      <div className="btn-container">
        <button className={classNameForBtn} onClick={openModal}>
          {text}
        </button>
      </div>
    );
  }
}

export default Button;
