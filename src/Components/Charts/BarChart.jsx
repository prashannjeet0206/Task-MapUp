//* Bar Chart for Popular EV Makes

import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  const MakeCount = data.reduce((acc, car) => {
    acc[car.Make] = (acc[car.Make] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(MakeCount),
    datasets: [
      {
        label: "Number of EV's By Manufacturer",
        data: Object.values(MakeCount),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };
  return <Bar data={chartData} />;
};

export default BarChart;
