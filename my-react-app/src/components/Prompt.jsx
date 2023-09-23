// Prompt.jsx

import React, { Component } from "react";

class Prompt extends Component {
  render() {
    const { item, handleAnswer, index } = this.props;
    return (
      <div>
        <p>Have you seen this letter yet?</p>
        <div className="d-felx justify-content-around align-items-center">
          <button onClick={(e) => handleAnswer(e, item, index, true)}>
            Yes
          </button>
          <button onClick={(e) => handleAnswer(e, item, index, false)}>
            No
          </button>
        </div>
      </div>
    );
  }
}

export default Prompt;
