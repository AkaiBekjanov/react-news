import { Image } from "../Image/Image.jsx";
import styles from "./styles.module.css";

export const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.time}>1h ago by Troy Corlson</p>
    </div>
  );
};
