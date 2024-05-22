import { useEffect, useState } from "react";
import { shuffleARR } from "../helpers/shuffleArray";

/**
 * useTrivia Hook for finding the trivia data
 * @param {*} params -> (query, callback) -> takes the query (our api data) and the callback(our function as arguments)
 * @returns the movie, isLoading, error state and the Key variable for use throughout the codebase
 * @author ShaAnder
 */
export function useTrivia(query, start, setStatus) {
  // searched questions state
  const [questions, setQuestions] = useState();
  // loading state for our loading message
  const [isLoading, setIsLoading] = useState(false);
  // state for showing if we have an error
  const [error, setError] = useState("");

  // Fetch our API data for the questions
  useEffect(
    function () {
      // using abort controller to clean up data fetching
      const controller = new AbortController();

      async function fetchQuestions() {
        if (start) {
          // create a loading state
          try {
            setIsLoading(true);
            setStatus("loading");
            // set loading state
            setError("");
            // get our data
            const res = await fetch(
              `https://opentdb.com/api.php?day=2&amount=${query.amount}&category=${query.category}&difficlty=${query.difficulty}&type=multiple`,
              // Connect abort conroller
              { signal: controller.signal }
            );
            // error handling, if no response, throw an error
            console.log(res);
            if (!res.ok) throw new Error("Trivia Fetching Failed");
            // save our response
            const data = await res.json();
            if (data.response === "False")
              throw new Error("Questions  Not Found");
            // set our state
            setQuestions((questions) =>
              data.results.map((question) => {
                return {
                  question: question.question,
                  options: shuffleARR(
                    question.incorrect_answers,
                    question.correct_answer
                  ),
                  correctOption: question.correct_answer,
                  points: 10,
                };
              })
            );

            // set error to empty initially (cos no error)
          } catch (err) {
            // display error / exclude abort error
            if (err.name !== "AbortError") {
              setError(err.message);
            }
          } finally {
            // log the data search for questions
            setIsLoading(false);
            setStatus("ready");
          }
        }
      }

      // fetch our questions
      fetchQuestions();
      // return controller here
      return function () {
        controller.abort();
      };
    },
    // the effect is triggered when query is populated
    [query]
  );
  // now we return these state pieces
  return { questions, isLoading, error };
}
