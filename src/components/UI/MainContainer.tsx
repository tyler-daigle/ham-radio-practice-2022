import styles from "../../styles/MainContainer.module.css";

export default function MainContainer({ children }: any) {
  return <div className={styles.mainContainer}>{children}</div>;
}
