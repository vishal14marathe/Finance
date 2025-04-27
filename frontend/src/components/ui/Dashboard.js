import React from 'react';
import PieChartComponent from './charts/PieChartComponent.jsx'; // Adjust the path if needed

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
      <PieChartComponent /> {/* Add the PieChartComponent here */}
    </div>
  );
};

export default Dashboard;
