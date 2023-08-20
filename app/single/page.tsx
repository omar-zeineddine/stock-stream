"use client";
import React, { useState } from "react";
import { useFetchTimeSeriesQuery } from "../redux/features/stockPerformanceApi";
import LineChart from "../components/LineChart";
import HeadingSection from "../components/HeadingSection";

const TimeSeriesChart: React.FC = () => {
  const [symbol, setSymbol] = useState<string>("");
  const [timePeriod, setTimePeriod] = useState<string>("1h");

  const time = [
    "1min",
    "5min",
    "15min",
    "30min",
    "45min",
    "1h",
    "2h",
    "4h",
    "1day",
    "1week",
    "1month",
  ];

  const { data, error, isLoading } = useFetchTimeSeriesQuery({
    symbol,
    timePeriod,
  });

  const handleSymbolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymbol(event.target.value);
  };

  const handleTimePeriodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(event.target.value);
    setTimePeriod(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Call the query here with the symbol and outputSize
  };

  return (
    <div>
      <HeadingSection
        title="Single Stock Search"
        subtitle="view recent stock performance in a line chart"
      />
      <form
        className="w-1/2 grid gap-4 mb-6 md:grid-cols-2 p-4 mx-auto rounded-lg dark:bg-gray-900 dark:border-gray-700"
        onSubmit={handleSubmit}
      >
        <label htmlFor="symbol">Symbol:</label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="symbol"
          value={symbol}
          onChange={handleSymbolChange}
          required
        />

        <label htmlFor="outputSize">Output Size:</label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="timePeriod"
          value={timePeriod}
          onChange={handleTimePeriodChange}
        >
          {time.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="col-span-2 flex justify-center">
          <button
            className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {/* {isLoading && <p>Loading...</p>} */}
      {/* {error && <p>Error: {error.message}</p>} */}
      {/* {data && <LineChart data={data} />}{" "} */}
      {/* Replace LineChart with your chart component */}
      <div className="w-1/2 flex justify-center items-center mx-auto">
        <LineChart />
      </div>
    </div>
  );
};

export default TimeSeriesChart;
