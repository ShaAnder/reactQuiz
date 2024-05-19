import { useReducer, useState, useEffect } from "react";
import React from "react";
import Select from "react-select";

export function GetQuestionDATA({ params }) {
  const [apiParams, setAPIParams] = useState({});
  // USE REDUCER to get our various Data from state shown on screen.
  // set initial state
  const initialState = {
    amount: 10,
    category: "",
    difficulty: "",
    type: "multiple",
  };

  // set the Amount, with reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    // we don't tend to use ifs or terniary in reducers instead we look at using the switch keyword, which takes our action type and creates a case for each type.
    switch (action.type) {
      case "setAmount":
        return { ...state, amount: action.payload };
      case "setCategory":
        return { ...state, category: action.payload };
      case "setDifficulty":
        return { ...state, difficulty: action.payload };
      case "setType":
        return { ...state, type: action.payload };
      case "start":
        return setAPIParams(state);
      case "reset":
        return initialState;

      default:
        throw new Error("Unknown action");
    }
  }

  const defineAmount = function (e) {
    dispatch({ type: "setAmount", payload: Number(e.target.value) });
  };

  const defineCategory = function (e) {
    dispatch({ type: "setCategory", payload: e.value });
  };

  const defineDifficulty = function (e) {
    dispatch({ type: "setDifficulty", payload: e.value });
  };

  const defineType = function (e) {
    dispatch({ type: "setType", payload: e.value });
  };

  const start = function () {
    dispatch({ type: "start" });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  // TODO

  // reset fields

  // reset initial state

  // change default select field to "random"

  // use an effect to send state to app
  useEffect(() => {
    params(apiParams);
  });

  // set state based on choices (dispatch + action)
  // Buncle the state into an object (reducer)
  //----- jsx options -----//
  // category
  const category_options = [
    { value: "", label: "Random" },
    { value: "9", label: "General Knowledge" },
    { value: "10", label: "Entertainment: Books" },
    { value: "11", label: "Entertainment: Film" },
    { value: "12", label: "Entertainment: Music" },
    { value: "13", label: "Entertainment: Musical & Theaters" },
    { value: "14", label: "Entertainment: Television" },
    { value: "15", label: "Entertainment: Video Games" },
    { value: "16", label: "Entertainment: Board Games" },
    { value: "17", label: "Science & Nature" },
    { value: "18", label: "Science: Computers" },
    { value: "19", label: "Science: Mathmatics" },
    { value: "20", label: "Mythology" },
    { value: "21", label: "Sports" },
    { value: "22", label: "Geography" },
    { value: "23", label: "History" },
    { value: "24", label: "Politics" },
    { value: "25", label: "Art" },
    { value: "26", label: "Celebrities" },
    { value: "27", label: "Animals" },
  ];

  // difficulty
  const difficulty_options = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  // type
  const type_options = [
    { value: "multiple", label: "Multiple Choice" },
    { value: "boolean", label: "True / False" },
  ];

  // encoding (hidden)
  return (
    <div className="quiz-selection">
      <p>Number Of Questions (Default: 10)</p>
      <div className="quiz-buttons">
        <span>
          <button value="10" onClick={defineAmount}>
            10
          </button>
        </span>
        <span>
          <button value="20" onClick={defineAmount}>
            20
          </button>
        </span>
        <span>
          <button value="30" onClick={defineAmount}>
            30
          </button>
        </span>
        <span>
          <button value="40" onClick={defineAmount}>
            40
          </button>
        </span>
        <span>
          <button value="50" onClick={defineAmount}>
            50
          </button>
        </span>
      </div>
      <div className="select">
        <p className="cat-header">Category</p>
        <Select onChange={defineCategory} options={category_options} />
        <p className="cat-header">Difficulty</p>
        <Select onChange={defineDifficulty} options={difficulty_options} />
        {/* <p className="cat-header">Type</p>
        <Select onChange={defineType} options={type_options} /> */}
      </div>
      <div>
        <button className="quiz-buttons" onClick={start}>
          Start
        </button>
      </div>
    </div>
  );
}
