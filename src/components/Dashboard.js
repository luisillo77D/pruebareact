import React from "react";
import SampleTypeChart from "./Chart";

const Dashboard = () => {

  const dashboardData = {
    totalSamples: 50,
    sampleTypes: [
      { name: "Tipo1", quantity: 20 },
      { name: "Tipo2", quantity: 15 },
      { name: "Tipo3", quantity: 10 },
    ],
  };
  
    return (
      <div>
        <SampleTypeChart sampleTypes={dashboardData.sampleTypes} />
      </div>
    );
  
};
  
export default Dashboard;
