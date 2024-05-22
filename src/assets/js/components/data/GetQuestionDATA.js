import React from "react";
import Select from "react-select";

//options
import { difficulty_options } from "./options/difficulty_options";
import { category_options } from "./options/category_options";

export function GetQuestionData({ questionActions, handleSetStart }) {
  // Recieve the questionActions as a prop, and then pass them onto our onclick / change handlers, this automatically updates the state, the start button will then reset the state as needed

  return (
    <div className="quiz-selection">
      <p>Number Of Questions</p>
      <div className="quiz-buttons">
        <span>
          <button
            className="btn number-btn"
            value="10"
            onClick={questionActions.defineAmount}
          >
            10
          </button>
        </span>
        <span>
          <button
            className="btn number-btn"
            value="20"
            onClick={questionActions.defineAmount}
          >
            20
          </button>
        </span>
        <span>
          <button
            className="btn number-btn"
            value="30"
            onClick={questionActions.defineAmount}
          >
            30
          </button>
        </span>
        <span>
          <button
            className="btn number-btn"
            value="40"
            onClick={questionActions.defineAmount}
          >
            40
          </button>
        </span>
        <span>
          <button
            className="btn number-btn"
            value="50"
            onClick={(e) => questionActions.defineAmount(e)}
          >
            50
          </button>
        </span>
      </div>
      <div className="select">
        <p className="cat-header">Category</p>
        <Select
          onChange={questionActions.defineCategory}
          options={category_options}
        />
        <p className="cat-header">Difficulty</p>
        <Select
          onChange={questionActions.defineDifficulty}
          options={difficulty_options}
        />
      </div>
      <div>
        <button className="btn confirm-btn" onClick={() => handleSetStart()}>
          Apply Settings
        </button>
      </div>
    </div>
  );
}
