import React, { useState } from "react";
import ArticleList from "../components/ArticleList";
import Articles from "../components/Content/ArticleContent";
import "../css/Articles.css";

const range = 25;

const ArticleListPage = () => {
  const [index, setIndex] = useState(0);

  const fetchArticles = () => {
    //TODO: Make fetch and make it index based.
    console.log(Articles);
    return Articles;
  };

  return (
    <>
      <h1>Articles</h1>
      calls.
      <ArticleList articles={fetchArticles(index, range)} />
    </>
  );
};

export default ArticleListPage;
