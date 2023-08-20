"use client";
import React, { useEffect, useState } from "react";
import { useFetchStocksNewsQuery } from "../redux/features/stockNewsApi";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import HeadingSection from "../components/HeadingSection";

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
    <main>
      <HeadingSection
        title="Latest Stock News"
        subtitle="latest stock news headlines from around the web."
      />
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
