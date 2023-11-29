import { useEffect, useState } from "react";
import { NewsBanner } from "../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../api/api";
import { NewsList } from "../components/NewsList/NewsList";
import { Skeleton } from "../components/Skeleton/Skeleton";

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews();
        setNews(res.news);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNews();
  }, []);
  return (
    <div className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={"banner"} />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={"item"} />
      )}
    </div>
  );
};
