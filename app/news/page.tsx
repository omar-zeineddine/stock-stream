"use client";
import React from "react";
import { useFetchStocksNewsQuery } from "../redux/features/StockNewsApi";

const News: React.FC = () => {
  const { data, error, isLoading } = useFetchStocksNewsQuery(null);
  console.log({
    data,
    error,
    isLoading,
  });
  return <div>page</div>;
};

export default News;
