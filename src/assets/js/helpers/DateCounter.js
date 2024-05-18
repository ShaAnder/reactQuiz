import { useReducer } from "react";

// set initial state
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  // we don't tend to use ifs or terniary in reducers instead we look at using the switch keyword, which takes our action type and creates a case for each type.
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;

    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  // set the count, with reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // destructure state
  const { step, count } = state;

  // Get todays dates
  const date = new Date();
  // Mutate the date based on the date + count
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  // our jsx, mainly the component creates a slider and input which, when manipulated, will change the date.
  //today => monday 1st, step 1 / count 3 => thursday 4th
  //today => monday 1st, step 3 / count 3 => wednesday 9th
  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
