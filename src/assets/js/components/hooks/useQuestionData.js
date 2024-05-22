import { useReducer } from "react";

const initialreducerState = {
  amount: "10",
  category: "",
  difficulty: "",
  type: "multiple",
};

// Reducer get's defined outside of our component, then we pass it into the component
function reducer(reducerState = {}, action) {
  switch (action.type) {
    case "setAmount":
      return { ...reducerState, amount: action.payload };
    case "setCategory":
      return { ...reducerState, category: action.payload };
    case "setDifficulty":
      return { ...reducerState, difficulty: action.payload };

    default:
      throw new Error("Unknown action");
  }
}

export default function useQuestionData() {
  // Custom reducer hook, going to keep all our logic here, then pass it into our reducerState / components later

  const [reducerState, dispatch] = useReducer(reducer, initialreducerState);

  const defineAmount = function (e) {
    dispatch({ type: "setAmount", payload: Number(e.target.value) });
  };

  const defineCategory = function (e) {
    // console.log(e);
    dispatch({ type: "setCategory", payload: e.value });
  };

  const defineDifficulty = function (e) {
    dispatch({ type: "setDifficulty", payload: e.value });
  };

  // Package our actions / reducerState into an object, so we can pass it on later
  const actions = {
    defineAmount,
    defineCategory,
    defineDifficulty,
  };

  // return reducerState / actions for our components
  return { reducerState, actions };
}
