import { fixEncoding } from "../../helpers/fixEncoding";
import { Options } from "./Options";

export function Question({ question }) {
  return (
    <div>
      <h4>{fixEncoding(question.question)}</h4>
      <Options question={question} />
    </div>
  );
}
