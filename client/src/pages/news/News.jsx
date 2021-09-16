import React from "react";
import "./News.scss";
import StockInNews from "../../components/news/stock-in-news/StockInNews";
import NewsBoard from "../../components/news/news-board/NewsBoard";

function News() {
  return (
    <div className="news">
      <div className="news-left">
        <NewsBoard />
      </div>{" "}
      <div className="news-right">
        <StockInNews />
      </div>{" "}
    </div>
  );
}

export default News;
