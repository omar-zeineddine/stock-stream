import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Stock Price History",
    },
  },
};

const stockHistory = {
  meta: {
    symbol: "MSFT",
    interval: "1h",
    currency: "USD",
    exchange_timezone: "America/New_York",
    exchange: "NASDAQ",
    mic_code: "XNGS",
    type: "Common Stock",
  },
  values: [
    {
      datetime: "2023-08-18 15:30:00",
      open: "316.48999",
      high: "318.38000",
      low: "315.85999",
      close: "316.51999",
      volume: "2947828",
    },
    {
      datetime: "2023-08-18 14:30:00",
      open: "316.01999",
      high: "316.73001",
      low: "313.93991",
      close: "316.49500",
      volume: "1508794",
    },
    {
      datetime: "2023-08-18 13:30:00",
      open: "316.02170",
      high: "316.91000",
      low: "314.01999",
      close: "316.03000",
      volume: "1480861",
    },
    {
      datetime: "2023-08-18 12:30:00",
      open: "315.31000",
      high: "316.75000",
      low: "313.95999",
      close: "316.00000",
      volume: "2497950",
    },
    {
      datetime: "2023-08-18 11:30:00",
      open: "314.82190",
      high: "316.91000",
      low: "314.10300",
      close: "315.38879",
      volume: "2696101",
    },
    {
      datetime: "2023-08-18 10:30:00",
      open: "312.12000",
      high: "315.70999",
      low: "312.09000",
      close: "314.85040",
      volume: "2945958",
    },
    {
      datetime: "2023-08-18 09:30:00",
      open: "314.48999",
      high: "315.20001",
      low: "311.55081",
      close: "312.12000",
      volume: "6578659",
    },
    {
      datetime: "2023-08-17 15:30:00",
      open: "317.27499",
      high: "317.92999",
      low: "316.20999",
      close: "316.88000",
      volume: "2812484",
    },
    {
      datetime: "2023-08-17 14:30:00",
      open: "319.23999",
      high: "319.35001",
      low: "316.79001",
      close: "317.29001",
      volume: "2617684",
    },
    {
      datetime: "2023-08-17 13:30:00",
      open: "319.44000",
      high: "319.45001",
      low: "318.45001",
      close: "319.22501",
      volume: "1773941",
    },
    {
      datetime: "2023-08-17 12:30:00",
      open: "320.36499",
      high: "320.90500",
      low: "319.39999",
      close: "319.47000",
      volume: "1160936",
    },
    {
      datetime: "2023-08-17 11:30:00",
      open: "318.79010",
      high: "320.60001",
      low: "318.67999",
      close: "320.32010",
      volume: "1770003",
    },
    {
      datetime: "2023-08-17 10:30:00",
      open: "319.17761",
      high: "320.22000",
      low: "318.73001",
      close: "318.78131",
      volume: "2175283",
    },
    {
      datetime: "2023-08-17 09:30:00",
      open: "320.54001",
      high: "321.87000",
      low: "318.70010",
      close: "319.18179",
      volume: "3905706",
    },
    {
      datetime: "2023-08-16 15:30:00",
      open: "320.48999",
      high: "321.29001",
      low: "320.25000",
      close: "320.35999",
      volume: "2081136",
    },
    {
      datetime: "2023-08-16 14:30:00",
      open: "323.39001",
      high: "323.64999",
      low: "320.25000",
      close: "320.48001",
      volume: "1728569",
    },
    {
      datetime: "2023-08-16 13:30:00",
      open: "321.34000",
      high: "323.62900",
      low: "321.13000",
      close: "323.39841",
      volume: "1677554",
    },
    {
      datetime: "2023-08-16 12:30:00",
      open: "321.70001",
      high: "322.29861",
      low: "320.70001",
      close: "321.38000",
      volume: "1206586",
    },
    {
      datetime: "2023-08-16 11:30:00",
      open: "323.41830",
      high: "323.50000",
      low: "321.25000",
      close: "321.69000",
      volume: "2918592",
    },
    {
      datetime: "2023-08-16 10:30:00",
      open: "322.76001",
      high: "324.42001",
      low: "322.22000",
      close: "323.45999",
      volume: "2720649",
    },
    {
      datetime: "2023-08-16 09:30:00",
      open: "320.79999",
      high: "323.79001",
      low: "319.80350",
      close: "322.74759",
      volume: "3293883",
    },
    {
      datetime: "2023-08-15 15:30:00",
      open: "321.35101",
      high: "322.16000",
      low: "320.90341",
      close: "321.89001",
      volume: "2008047",
    },
    {
      datetime: "2023-08-15 14:30:00",
      open: "323.50000",
      high: "324.07001",
      low: "321.31000",
      close: "321.36349",
      volume: "1507751",
    },
    {
      datetime: "2023-08-15 13:30:00",
      open: "324.70999",
      high: "324.97000",
      low: "323.10999",
      close: "323.48001",
      volume: "1611143",
    },
    {
      datetime: "2023-08-15 12:30:00",
      open: "324.31000",
      high: "325.01999",
      low: "323.72620",
      close: "324.72000",
      volume: "1381748",
    },
    {
      datetime: "2023-08-15 11:30:00",
      open: "323.95001",
      high: "325.09000",
      low: "323.63501",
      close: "324.26999",
      volume: "2043282",
    },
    {
      datetime: "2023-08-15 10:30:00",
      open: "321.98001",
      high: "324.32440",
      low: "321.29300",
      close: "324.00000",
      volume: "1888989",
    },
    {
      datetime: "2023-08-15 09:30:00",
      open: "323.00000",
      high: "324.89999",
      low: "321.10001",
      close: "322.06000",
      volume: "3708040",
    },
    {
      datetime: "2023-08-14 15:30:00",
      open: "322.70999",
      high: "324.04001",
      low: "322.41010",
      close: "324.03000",
      volume: "1825742",
    },
    {
      datetime: "2023-08-14 14:30:00",
      open: "321.98999",
      high: "322.88000",
      low: "321.44000",
      close: "322.70999",
      volume: "1444028",
    },
  ],
  status: "ok",
};

const LineChartSingle: React.FC = () => {
  console.log({ stockHistory });
  // Extract data for the chart
  const chartData = {
    labels: stockHistory.values.map((data) => data.datetime),
    datasets: [
      {
        label: "Closing Price",
        data: stockHistory.values.map((data) => parseFloat(data.close)),
        borderColor: "blue",
        fill: false,
      },
    ],
  };
  return <Line data={chartData} options={options} />;
};

export default LineChartSingle;
