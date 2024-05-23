import { useState } from "react";

import Loader from "./assets/js/components/helpers/Loader";
import Error from "./assets/js/components/helpers/Error";

// HOOKS
import useQuestionData from "./assets/js/components/hooks/useQuestionData";
import { useTrivia } from "./assets/js/components/hooks/useTrivia";

//COMPONENTS
import { GetQuestionData } from "./assets/js/components/data/GetQuestionData";
import { Main } from "./assets/js/components/views/Main";
import { Header } from "./assets/js/components/views/Header";
import { StartGame } from "./assets/js/components/views/StartGame";
import { Question } from "./assets/js/components/views/question_model/Question";

// APP
export default function App() {
  // Start Game State
  const [start, setStart] = useState(false);
  // params state for sending it to trivia all in one go (otherwise it tries to make an api call every state update)
  const [params, setParams] = useState([]);
  //test status state
  const [status, setStatus] = useState("loading");
  // set our question index
  const [index, setIndex] = useState(0);

  // destucture reducerQuestion hook here
  const { reducerQuestionState, questionActions } = useQuestionData();
  // destructure trivia hook here
  const { questions, isLoading, error } = useTrivia(params, start, setStatus);

  // set start handler
  function handleSetStart() {
    setStart(!start);
    setParams(reducerQuestionState);
    if (error !== "") {
      setStatus("error");
    } else {
      setStatus("ready");
    }
  }

  return (
    <div className="app">
      <Header />
      {!start ? (
        <GetQuestionData
          questionActions={questionActions}
          setStart={setStart}
          start={start}
          handleSetStart={handleSetStart}
        />
      ) : (
        <Main>
          {status === "loading" && <Loader />}
          {status === "ready" && (
            <StartGame info={reducerQuestionState} setStatus={setStatus} />
          )}
          {status === "error" && <Error />}
          {status === "active" && <Question question={questions[index]} />}
        </Main>
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

//TOFIX

// Status / index to go into a reducer
// Encoding on questions
