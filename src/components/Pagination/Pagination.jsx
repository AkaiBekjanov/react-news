import styles from "./styles.module.css";

export const Pagination = ({
  totalPages,
  setCurrentPage,
  handlePrevPage,
  handleNextPage,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={() => handlePrevPage()}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
              style={{
                color: index + 1 === currentPage ? "grey" : "black",
              }}
              onClick={() => {
                setCurrentPage(index + 1);
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        className={styles.arrow}
        onClick={() => handleNextPage()}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};
