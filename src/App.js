import { useState } from "react";

import useQuestionData from "./assets/js/components/hooks/useQuestionData";
import { useTrivia } from "./assets/js/components/hooks/useTrivia";

import { GetQuestionData } from "./assets/js/components/data/GetQuestionData";

import { Main } from "./assets/js/components/views/Main";
import { Header } from "./assets/js/components/views/Header";

export default function App() {
  // Start Game State
  const [start, setStart] = useState(false);
  const [params, setParams] = useState([]);
  // destucture reducer hook here
  const { reducerState, actions } = useQuestionData();
  // destructure trivia hook here
  const { questionData, isLoading, error } = useTrivia(params, start);

  // set start handler
  function handleSetStart() {
    setStart(!start);
    setParams(reducerState);
  }

  let question = {
    correct: "Blonde",
    incorrect: ["Brunette", "Black", "Burgundy"],
    points: 10,
    question:
      "What was the name of singer Frank Ocean&#039;s second studio album, which was released on August 20, 2016?",
  };

  return (
    <div>
      <Header />
      {!start ? (
        <GetQuestionData
          actions={actions}
          setStart={setStart}
          start={start}
          handleSetStart={handleSetStart}
        />
      ) : (
        <Main questionData={questionData} />
      )}
    </div>
  );
}

// Notes on context

// Only call useQuestionData once and pass state to components as needed (each time we call this hook, it creates a new, unrelated batch of state and actions)

// Context solves this, could directly import the state into App
// and directly import the actions into our GetQuestionData component (however we don't know context yet)

// Context ensures that we only have a single instance of the state despite importing it multiple times throughout our app

// -----------------------------------------------------//

//STEPS

// update ui to game ui

// Ui changes ->

// Game starts -> user answers questions -> quiz complete state -> score given -> option to reset

// Timer before skipping question or failing question -> multiple choice questions -> time retoactively updates based on question count (30s per question eg 30seconds x 50 questions)

// assigning point value to questions

// leaderboard (based on category?)
