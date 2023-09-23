// Prompt.jsx

import React, { Component } from "react";
import Game from "./Game";

class Prompt extends Component {
  render() {
    const { item, handleAnswer, index } = this.props;
    return (
      <div>
        <p>Have you seen this letter yet?</p>
        <div className="d-felx justify-content-around align-items-center">
          <button onClick={(e) => handleAnswer(e, index, item.displayed)}>
            Yes
          </button>
          <button onClick={(e) => handleAnswer(e, index, !item.displayed)}>
            No
          </button>
        </div>
      </div>
    );
  }
}

export default Prompt;
