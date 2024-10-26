import { useState, useEffect } from "react";
import Papa from "papaparse";
import "./App.css";
import BarChart from "./Components/Charts/BarChart";
import LineChart from "./Components/Charts/LineChart";
import PieChart from "./Components/Charts/PieChart";

function App() {
  const [csvData, setCsvData] = useState([]);

  // Parsing csv data to json
  useEffect(() => {
    Papa.parse("/Electric_Vehicle_Population_Data.csv", {
      download: true,
      header: true,
      complete: (results) => {
        // console.log(results.data);
        setCsvData(results.data);
      },
    });
  }, []);

  return (
    <div>
      <h1>DashBoard-Electric Vehicle Population</h1>
      <div>
        <BarChart />
        <LineChart />
        <PieChart />
      </div>
    </div>
  );
}

export default App;
