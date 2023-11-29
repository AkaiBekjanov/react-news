import { Image } from "../Image/Image.jsx";
import styles from "./styles.module.css";

export const NewsItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.time}>1h ago by Troy Corlson</p>
      </div>
    </div>
  );
};
