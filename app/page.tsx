"use client";
import HeadingSection from "./components/HeadingSection";
import { useFetchStocksQuery } from "./redux/features/stockPerformanceApi";
import LineChart from "./components/LineChart";
import InputForm from "./components/InputForm";

export default function Home() {
  return (
    <main>
      <HeadingSection
        title="Stock Analysis"
        subtitle="analyze performance of stocks over any time period"
      />
      <InputForm />
      <div className="w-1/2 flex justify-center items-center mx-auto">
        <LineChart />
      </div>
    </main>
  );
}
