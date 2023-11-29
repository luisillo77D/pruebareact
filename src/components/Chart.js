import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const SampleTypeChart = ({ sampleTypes }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      sampleTypes.map((type) => ({
        name: type.name,
        quantity: type.quantity,
      }))
    );
  }, [sampleTypes]);

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "Igneas" },
            { id: 1, value: 15, label: "Metamorficas" },
            { id: 2, value: 20, label: "Sedimentarias" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
};

export default SampleTypeChart;
