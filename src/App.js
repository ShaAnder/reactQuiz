import { useState } from "react";

import useQuestionData from "./assets/js/components/hooks/useQuestionData";
import { useTrivia } from "./assets/js/components/hooks/useTrivia";

import { GetQuestionData } from "./assets/js/components/data/GetQuestionData";

import { Debug } from "./assets/js/components/helpers/Debug";

import { Main } from "./assets/js/components/views/Main";
import { Header } from "./assets/js/components/views/Header";

export default function App() {
  // Params State
  const [params, setParams] = useState();
  // Question state
  const [questions, setQuestions] = useState();
  // Start Game State
  const [start, setStart] = useState(false);

  // destucture reducer hook here
  const { reducerState, actions } = useQuestionData();
  // destructure trivia hook here
  const { questionData, isLoading, error } = useTrivia(params);

  // set start handler
  function handleSetStart() {
    setParams(reducerState);
    if (!questionData) {
      return;
    } else {
      setQuestions((questions) =>
        questionData.map((question) => {
          return {
            question: question.question,
            correct: question.correct_answer,
            incorrect: question.incorrect_answers,
            points: 10,
          };
        })
      );
      setStart(!start);
    }
  }

  // getting question DATA
  console.log(questionData);
  // Becomes undefined here // need to spread data into objects
  console.log(questions);
  return (
    <div>
      <Header />
      <Debug reducerState={reducerState} start={start} />
      {!start ? (
        <GetQuestionData
          actions={actions}
          setStart={setStart}
          start={start}
          handleSetStart={handleSetStart}
        />
      ) : (
        <Main questions={questions} />
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
