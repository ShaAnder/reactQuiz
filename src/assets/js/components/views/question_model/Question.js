import { fixEncoding } from "../../helpers/fixEncoding";
import { Options } from "./Options";

export function Question({ question, answer, answerActions }) {
  return (
    <div>
      <h4>{fixEncoding(question.question)}</h4>
      <Options
        question={question}
        answerActions={answerActions}
        answer={answer}
      />
    </div>
  );
}
