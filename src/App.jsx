import { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import Papa from "papaparse";
import "./App.css";
import BarChart from "./Components/Charts/BarChart";
import LineChart from "./Components/Charts/LineChart";
import PieChart from "./Components/Charts/PieChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function App() {
  const [csvData, setCsvData] = useState([]);

  // Parsing csv data to json
  useEffect(() => {
    Papa.parse("/Electric_Vehicle_Population_Data.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setCsvData(results.data);
      },
    });
  }, []);

  return (
    <div>
      <h1>DashBoard-Electric Vehicle Population</h1>
      <div>
        <BarChart data={csvData} />
        <LineChart data={csvData} />
        <PieChart data={csvData} />
      </div>
    </div>
  );
}

export default App;
