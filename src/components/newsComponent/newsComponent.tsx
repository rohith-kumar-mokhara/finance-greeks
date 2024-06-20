import React from "react";

type NewsComponentProps = {
  news: News;
};

export type News = {
  author: Author;
  publishedAt: Date;
  headline: string;
  image?: string;
  breif?: string;
  subComponents?: SubComponent[];
  userCount: number; // Add userCount to the type
};

type Author = {
  name: string;
  image?: string;
  description: string;
};

type SubComponent = {
  headling: string;
  image?: string;
  description: string;
};

const NewsComponent: React.FC<NewsComponentProps> = ({ news }) => {
  return (
    <div className="news-component">
      <div className="news-headline" style={{fontSize: 48}}>{news.headline}</div>
      <div className="author-publishedAt">
        Published by {news.author.name} last updated at{" "}
        {news.publishedAt.toDateString()}
      </div>
      {news.image && <img height={200} className="news-image" src={news.image} alt="img" />}
    </div>
  );
};

export default NewsComponent;
