import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  const evType = data.reduce((acc, car) => {
    acc[car["Electric Vehicle Type"]] =
      (acc[car["Electric Vehicle Type"]] || 0) + 1;
    return acc;
  }, {});
  console.log(evType);
  const chartData = {
    labels: Object.keys(evType),
    datasets: [
      {
        data: Object.values(evType),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };
  return <Pie data={chartData} />;
};

export default PieChart;
