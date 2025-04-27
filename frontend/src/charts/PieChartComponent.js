import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Register the required components of Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PieChartComponent = () => {
  // Data for the Pie chart
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    datasets: [
      {
        data: [30, 40, 20, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF8E96', '#73C8FF', '#FFDA77', '#72F0F0'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-center text-xl font-semibold mb-4">Transaction Distribution</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChartComponent;
