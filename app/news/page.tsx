"use client";
import React, { useEffect, useState } from "react";
import { useFetchStocksNewsQuery } from "../redux/features/StockNewsApi";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";

const News: React.FC = () => {
  const { data, error, isLoading } = useFetchStocksNewsQuery(null);

  const [newsData, setNewsData] = useState(data);

  useEffect(() => {
    setNewsData(data);
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <main className="">
      <section>
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-xl md:text-3xl font-bold mb-2 text-gray-600">
            Latest Stock News
          </h1>
          <h3 className="text-lg mb-2 text-gray-600 ">
            latest stock news headlines from around the web.
          </h3>
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-gray-800 mr-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-gray-800 mr-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-gray-800"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-gray-800 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-gray-800 ml-1"></span>
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex flex-wrap items-between justify-center mx-auto">
          {newsData && newsData.length > 0 ? (
            newsData.map(
              (item: { sourceName: string; title: string }, index: number) => (
                <NewsCard
                  key={index}
                  sourceName={item.sourceName}
                  title={item.title}
                />
              )
            )
          ) : (
            <p>No news available.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default News;
