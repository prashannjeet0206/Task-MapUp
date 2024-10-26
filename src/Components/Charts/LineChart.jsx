//* Line Chart for EV Registration Trends by Year

import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const evRegistrationYear = data.reduce((acc, car) => {
    const year = car["Model Year"];
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(evRegistrationYear).sort(),
    datasets: [
      {
        label: "Number of Registrations",
        data: Object.values(evRegistrationYear).sort((a, b) => a - b),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return <Line data={chartData} />;
};

export default LineChart;
