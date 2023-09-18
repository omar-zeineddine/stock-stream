"use client";
import HeadingSection from "./components/HeadingSection";
import LineChart from "./components/LineChart";
import InputForm from "./components/InputForm";
import { useState } from "react";
import Spinner from "./components/Spinner";

export default function Home() {
  const [chartData, setChartData] = useState<[number, number][]>([]);
  const [showChart, setShowChart] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <main>
      <HeadingSection
        title="Stock Analysis"
        subtitle="analyze performance of stocks over any time period"
      />
      <InputForm
        setChartData={setChartData}
        setShowChart={setShowChart}
        loading={loading}
        setLoading={setLoading}
      />
      <div className="w-1/2 flex justify-center items-center mx-auto">
        {loading ? (
          <Spinner />
        ) : showChart ? (
          <LineChart chartData={chartData} />
        ) : null}
      </div>
    </main>
  );
}
