import styles from "./styles.module.css";
import { formatDate } from "../../others/dateFormatter";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>ARKANDAI NEWS</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </div>
  );
};
