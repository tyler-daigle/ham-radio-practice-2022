import styles from "../../styles/ExamHeader.module.css";

export default function ExamHeader({ children }: any) {
  return <h2 className={styles.examHeader}>{children}</h2>;
}
