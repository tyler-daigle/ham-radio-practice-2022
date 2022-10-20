import styles from "../styles/QuestionList.module.css";
import QuestionItem from "./QuestionItem";

import { Question } from "../temp/types";
export default function QuestionList({ questions }: any) {
  return (
    <ul className={styles.questionList}>
      {questions.map((question: Question, index: number) => (
        <QuestionItem key={question.id} index={index} question={question} />
      ))}
    </ul>
  );
}
