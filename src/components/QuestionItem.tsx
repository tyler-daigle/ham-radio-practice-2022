import styles from "../styles/QuestionItem.module.css";

import QuestionContainer from "./QuestionContainer";
import QuestionText from "./QuestionText";
import QuestionChoices from "./QuestionChoices";
import { Question } from "../temp/types";

export default function QuestionItem({ question, index }: { question: Question, index: number }) {
  return (
    <QuestionContainer>
      <div className={styles.questionDetails}>
        <span className={styles.questionIndex}>Question {index + 1} of 37</span>
        <span className={styles.questionId}>{question.id}</span>
      </div>

      <QuestionText>{question.question}</QuestionText>
      <QuestionChoices choices={question.answers} questionId={question.id} />
    </QuestionContainer>
  );
}
