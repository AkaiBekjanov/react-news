import styles from "./styles.module.css";

export const Search = ({ keywords, setKeywords }) => {
  console.log(keywords);
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
      />
    </div>
  );
};
