import { useReducer } from "react";

const initialQuestionState = {
  amount: "10",
  category: "",
  difficulty: "",
  type: "multiple",
};

// Reducer get's defined outside of our component, then we pass it into the component
function reducer(reducerQuestionState = {}, questionAction) {
  switch (questionAction.type) {
    case "setAmount":
      return { ...reducerQuestionState, amount: questionAction.payload };
    case "setCategory":
      return { ...reducerQuestionState, category: questionAction.payload };
    case "setDifficulty":
      return { ...reducerQuestionState, difficulty: questionAction.payload };

    default:
      throw new Error("Unknown Action");
  }
}

export default function useQuestionData() {
  // Custom reducer hook, going to keep all our logic here, then pass it into our reducerQuestionState / components later

  const [reducerQuestionState, dispatch] = useReducer(
    reducer,
    initialQuestionState
  );

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

  // Package our questionActions / reducerQuestionState into an object, so we can pass it on later
  const questionActions = {
    defineAmount,
    defineCategory,
    defineDifficulty,
  };

  // return reducerQuestionState / questionActions for our components
  return { reducerQuestionState, questionActions };
}
