import React from "react";

type NewsItemProps = {
  sourceName: string;
  title: string;
};

const NewsCard: React.FC<NewsItemProps> = ({ sourceName, title }) => {
  return (
    <div className="w-80 h-42 mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
      <div className="w-full flex mb-4 items-center">
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-sm uppercase text-gray-600">
            {sourceName}
          </h6>
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm leading-tight">
          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
            &quot;
          </span>
          {title}
          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
            &quot;
          </span>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
