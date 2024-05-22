import { useEffect, useState } from "react";

/**
 * useTrivia Hook for finding the trivia data
 * @param {*} params -> (query, callback) -> takes the query (our api data) and the callback(our function as arguments)
 * @returns the movie, isLoading, error state and the Key variable for use throughout the codebase
 * @author ShaAnder
 */
export function useTrivia(query) {
  // searched questionData state
  const [questionData, setQuestionData] = useState();
  // loading state for our loading message
  const [isLoading, setIsLoading] = useState(false);
  // state for showing if we have an error
  const [error, setError] = useState("");

  // Fetch our API data for the questionData
  useEffect(
    function () {
      if (query === undefined) {
        console.log("no query");
      } else {
        // using abort controller to clean up data fetching
        const controller = new AbortController();

        async function fetchQuestions() {
          // create a loading state
          try {
            // set loading state
            setIsLoading(true);
            setError("");
            // get our data
            const res = await fetch(
              `https://opentdb.com/api.php?amount=${query.amount}&category=${query.category}&difficlty=${query.difficulty}&type=multiple`,
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
            setQuestionData(data.results);

            // set error to empty initially (cos no error)
            setError("");
          } catch (err) {
            // display error / exclude abort error
            if (err.name !== "AbortError") {
              setError(err.message);
            }
          } finally {
            // log the data search for questionData
            setIsLoading(false);
          }
        }

        // fetch our questionData
        fetchQuestions();
        // return controller here
        return function () {
          controller.abort();
        };
      }
    },
    // the effect is triggered when query is populated
    [query]
  );
  // now we return these state pieces
  return { questionData, isLoading, error };
}
