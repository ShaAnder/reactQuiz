import { useReducer } from "react";

const initialAnswerState = {
  answer: null,
  index: 0,
  points: 0,
};

// Reducer get's defined outside of our component, then we pass it into the component
function reducer(reducerAnswerState = {}, answerAction) {
  switch (answerAction.type) {
    case "setAnswer":
      // get current question for updating points
      return { ...reducerAnswerState, answer: answerAction.payload };
    case "setIndex":
      return { ...reducerAnswerState, index: answerAction.payload };

    default:
      throw new Error("Unknown Action");
  }
}

export function useAnswerData() {
  // Custom reducer hook, going to keep all our logic here, then pass it into our reducerAnswerState / components later

  const [reducerAnswerState, dispatch] = useReducer(
    reducer,
    initialAnswerState
  );

  const defineAnswer = function (e) {
    // console.log(e);
    dispatch({ type: "setAnswer", payload: e });
  };

  const defineIndex = function (e) {
    dispatch({ type: "setIndex", payload: e });
  };

  // Package our answerActions / reducerAnswerState into an object, so we can pass it on later
  const answerActions = {
    defineAnswer,
    defineIndex,
  };

  // return reducerAnswerState / answerActions for our components
  return [reducerAnswerState, answerActions];
}
