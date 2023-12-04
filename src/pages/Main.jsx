import { useEffect, useState } from "react";
import { NewsBanner } from "../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../api/api";
import { NewsList } from "../components/NewsList/NewsList";
import { Skeleton } from "../components/Skeleton/Skeleton";
import { Pagination } from "./../components/Pagination/Pagination";

export const Main = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const totalPages = 10;
  var pageSize = 10;
  const fetchNews = async (currentPage) => {
    try {
      const res = await getNews(currentPage, pageSize);
      setNews(res.news);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={"banner"} />
      )}
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={"item"} />
      )}
    </div>
  );
};
