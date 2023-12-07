import { useEffect, useState } from "react";
import { NewsBanner } from "../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../api/api";
import { NewsList } from "../components/NewsList/NewsList";
import { Skeleton } from "../components/Skeleton/Skeleton";
import { Pagination } from "./../components/Pagination/Pagination";
import { Categories } from "../components/Categories/Categories";
import { Search } from "../components/Search/Search";
import { useDebounce } from "../others/hooks/useDebounce";

export const Main = () => {
  const [news, setNews] = useState([]);

  const [currentPage, setCurrentPage] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [keywords, setKeywords] = useState("");
  const [isLoading, setLoading] = useState(true);

  const debouncedValue = useDebounce(keywords, 1500);

  const totalPages = 10;
  const pageSize = 10;
  const fetchNews = async (currentPage) => {
    try {
      const res = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
        keywords: keywords,
      });
      setNews(res.news);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(["All", ...res.categories]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedValue]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > totalPages) {
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
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
      />
      <Search keywords={keywords} setKeywords={setKeywords} />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={"item"} />
      )}
    </div>
  );
};
