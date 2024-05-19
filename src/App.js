import Header from "./assets/js/views/Header";

import React, { useState } from "react";
import { GetQuestionDATA } from "./assets/js/data/GetQuestionDATA";

export default function App() {
  const [apiData, setAPIData] = useState({});
  console.log(apiData);
  const [startQuiz, setStartQuiz] = useState(false);

  function handleStartQuiz() {
    setStartQuiz(!startQuiz);
  }

  return (
    <div className="App">
      <Header />
      <div>
        {!startQuiz ? (
          <button className="start-quiz-button" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        ) : (
          <GetQuestionDATA setAPIData={setAPIData} />
        )}
      </div>
    </div>
  );
}
