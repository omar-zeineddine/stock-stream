"use client";
import Heading from "./components/Heading";
import LineChart from "./components/LineChart";
import InputForm from "./components/InputForm";
import { useState } from "react";
import Spinner from "./components/Spinner";

type FormSubmitData = {
  chartData: [number, number][];
  showChart: boolean;
  loading: boolean;
};

export default function Home() {
  const [chartData, setChartData] = useState<[number, number][]>([]);
  const [showChart, setShowChart] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (data: FormSubmitData) => {
    setChartData(data.chartData);
    setShowChart(data.showChart);
    setLoading(data.loading);
  };

  return (
    <main>
      <Heading
        title="Stock Analysis"
        subtitle="analyze performance of stocks over any time period"
      />

      <InputForm onSubmit={handleFormSubmit} />
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
