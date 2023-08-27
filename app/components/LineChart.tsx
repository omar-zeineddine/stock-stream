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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "stock portfolio performance over one year",
    },
  },
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type Props = {
  chartData: [number, number][];
};

const LineChart: React.FC<Props> = (props: Props) => {
  const labels = props.chartData.map((data) => {
    const monthIndex = new Date(data[0]).getMonth();
    return monthNames[monthIndex];
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Performance",
        data: props.chartData.map((data) => data[1]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  console.log(props, data);
  return <Line options={options} data={data} />;
};

export default LineChart;
