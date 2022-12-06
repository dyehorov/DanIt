import React, { Component } from "react";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";

class App extends Component {
  state = {
    status: "",
    modal1: false,
    modal2: false,
  };

  render() {
    const { modal1, modal2 } = this.state;
    return (
      <div className="main">
        <Button
          openModal={() => this.setState({ modal1: true })}
          text="Open first modal"
          classNameForBtn="btn first"
        />
        <Button
          openModal={() => this.setState({ modal2: true })}
          text="Open second modal"
          classNameForBtn="btn second"
        />

        <Modal
          header={"Modal 1"}
          isOpened={modal1}
          closeModal={() => this.setState({ modal1: false })}
          text="Hello, I am first modal window"
        />
        <Modal
          header={"Modal 2"}
          isOpened={modal2}
          closeModal={() => this.setState({ modal2: false })}
          text="Good day, I am second modal window"
        />
      </div>
    );
  }
}

export default App;
