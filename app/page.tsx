"use client";
import HeadingSection from "./components/HeadingSection";
import LineChart from "./components/LineChart";
import InputForm from "./components/InputForm";
import { useState } from "react";

export default function Home() {
  const [chartData, setChartData] = useState<[number, number][]>([]);
  return (
    <main>
      <HeadingSection
        title="Stock Analysis"
        subtitle="analyze performance of stocks over any time period"
      />
      <InputForm setChartData={setChartData} />
      <div className="w-1/2 flex justify-center items-center mx-auto">
        <LineChart chartData={chartData} />
      </div>
    </main>
  );
}
