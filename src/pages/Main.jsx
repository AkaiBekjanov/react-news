import { useEffect, useState } from "react";
import { NewsBanner } from "../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../api/api";
import { NewsList } from "../components/NewsList/NewsList";
import { Skeleton } from "../components/Skeleton/Skeleton";

export const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews();
        setNews(res.news);
        setLoading((prev) => !prev);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);
  return (
    <div className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}

      <NewsList news={news} />
    </div>
  );
};
