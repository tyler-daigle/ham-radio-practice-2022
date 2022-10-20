import styles from "../styles/QuestionChoices.module.css";
import { useState } from "react";

/*
  should radio buttons or checkboxes be used? It is possible that
  there are questions with more than one answer? What about 
  questions that are left unanswered?
*/

// TODO: This is where some global state of what questions have been answered and their
// values would be set.

export default function QuestionChoices({ choices, questionId }: { choices: string[], questionId: string }) {
  const [selectedAnswer, setSelectedAnswer]: [number | undefined, any] = useState(undefined);

  return (
    <ol className={styles.questionChoiceList}>
      {choices.map((choice, index) => (
        <li className={styles.choiceItem}>
          <input
            id={`${questionId}-${index}`}
            type="checkbox"
            checked={selectedAnswer === index}
            onChange={() => setSelectedAnswer(index)}
          />
          <label htmlFor={`${questionId}-${index}`}>{choice}</label>
        </li>
      ))}
    </ol>
  );
}
