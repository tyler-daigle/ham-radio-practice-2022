import styles from "../styles/QuestionChoices.module.css";
import { useState } from "react";

export default function QuestionChoices({ choices }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  return (
    <ol className={styles.questionChoiceList}>
      {choices.map((choice, index) => (
        <li className={styles.choiceItem}>
          <input
            type="checkbox"
            checked={selectedAnswer === index}
            onChange={() => setSelectedAnswer(index)}
          />
          {choice}
        </li>
      ))}
    </ol>
  );
}
