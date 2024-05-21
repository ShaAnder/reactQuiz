import React from "react";
import Select from "react-select";

//options
import { difficulty_options } from "./options/difficulty_options";
import { category_options } from "./options/category_options";

export function GetQuestionData({ actions, handleSetStart }) {
  // Recieve the actions as a prop, and then pass them onto our onclick / change handlers, this automatically updates the state, the start button will then reset the state as needed

  return (
    <div className="quiz-selection">
      <p>Number Of Questions</p>
      <div className="quiz-buttons">
        <span>
          <button value="10" onClick={actions.defineAmount}>
            10
          </button>
        </span>
        <span>
          <button value="20" onClick={actions.defineAmount}>
            20
          </button>
        </span>
        <span>
          <button value="30" onClick={actions.defineAmount}>
            30
          </button>
        </span>
        <span>
          <button value="40" onClick={actions.defineAmount}>
            40
          </button>
        </span>
        <span>
          <button value="50" onClick={(e) => actions.defineAmount(e)}>
            50
          </button>
        </span>
      </div>
      <div className="select">
        <p className="cat-header">Category</p>
        <Select onChange={actions.defineCategory} options={category_options} />
        <p className="cat-header">Difficulty</p>
        <Select
          onChange={actions.defineDifficulty}
          options={difficulty_options}
        />
      </div>
      <div>
        <button className="quiz-buttons" onClick={() => handleSetStart()}>
          Start
        </button>
      </div>
    </div>
  );
}
