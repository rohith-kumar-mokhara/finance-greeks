import React from "react";

type RelatedArticlesProps = {
  image: string;
  headline: string;
};

const RelatedArticlesComponent: React.FC<RelatedArticlesProps> = ({ image, headline }) => {
  return (
    <div className="flex items-center p-4 border border-gray-300 rounded-lg my-4 w-full max-w-xl">
      <img src={image} alt="Related article" className="w-20 h-20 object-cover rounded mr-4" />
      <div className="text-lg font-bold text-gray-800">{headline}</div>
    </div>
  );
};

export default RelatedArticlesComponent;
