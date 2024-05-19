import Header from "./assets/js/components/views/Header";

import { useState, useEffect } from "react";

import { GetQuestionDATA } from "./assets/js/components/data/GetQuestionDATA";

import Main from "./assets/js/components/views/Main";

import { useTrivia } from "./assets/js/components/hooks/useTrivia";

export default function App() {
  // setting apiParameters for quiz
  const [params, setParams] = useState({});
  // transition from question selection to start of quiz
  const [pressStart, setPressStart] = useState(false);
  return (
    <div className="App">
      <Header />
      <div>
        <GetQuestionDATA params={setParams} />

        <Main params={params} />
      </div>
    </div>
  );
}
