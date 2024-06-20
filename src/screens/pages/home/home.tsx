import React, { useEffect } from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import TradingViewWidget from "../../../components/tradingView/tradingView";
import NewsComponent, { News } from "../../../components/newsComponent/newsComponent";
import shivaram from '../../../assets/shivaram.jpg';
import "./home.scss"
import RelatedArticlesComponent from "../../../components/RelatedArticles/RelatedArticlesCard";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {

  const newsArticles: News[] = [
    {
      author: { name: "Aman", description: "bjgbn bnei nien ienbine bnerr bnebeb u" },
      headline: "Shivaram ran with his girlfriend",
      publishedAt: new Date(),
      image: shivaram,
      userCount: 100
    },
    {
      author: { name: "John", description: "Description for John" },
      headline: "Shivaram ran with his girlfriend",
      publishedAt: new Date(),
      image: shivaram,
      userCount: 50
    },
    {
      author: { name: "Doe", description: "Description for Doe" },
      headline: "Shivaram ran with his girlfriend",
      publishedAt: new Date(),
      image: shivaram,
      userCount: 75
    },
    {
      author: { name: "Doe", description: "Description for Doe" },
      headline: "Shivaram ran with his girlfriend",
      publishedAt: new Date(),
      image: shivaram,
      userCount: 75
    },
    {
      author: { name: "Doe", description: "Description for Doe" },
      headline: "Shivaram ran with his girlfriend",
      publishedAt: new Date(),
      image: shivaram,
      userCount: 75
    },
    {
      author: { name: "Doe", description: "Description for Doe" },
      headline: "Shivaram ran with his girlfriend",
      publishedAt: new Date(),
      image: shivaram,
      userCount: 75
    },
  ];

  const sortedNews = newsArticles.sort((a, b) => b.userCount - a.userCount);

  const leftCount = Math.ceil(sortedNews.length * 0.4);
  console.log("First half is ", leftCount);
  // console.log("Second half is ", )
  const leftNews = sortedNews.slice(0, leftCount);
  const rightNews = sortedNews.slice(leftCount);

  usePageTitle("Home");

  return (
    <div className="home">
      <TradingViewWidget />
      <RelatedArticlesComponent image={shivaram} headline="Related article"/>
      <div className="news-container">
        <div className="left-news-container" >
          {leftNews.map(news => (
            <NewsComponent key={news.headline} news={news} />
          ))}
        </div>
        <div className="right-news-container">
          {rightNews.map(news => (
            <NewsComponent key={news.headline} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
