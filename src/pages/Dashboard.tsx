import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import SearchBar from '../components/SearchBar';
import Summary from '../components/Summary';

// Register the components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const lineData = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    datasets: [
      {
        label: 'Payments',
        data: [150000, 170000, 140000, 180000, 200000],
        fill: false,
        backgroundColor: '#4F46E5',
        borderColor: '#4F46E5',
      },
    ],
  };

  const pieData = {
    labels: ['Payments Done', 'Payments Pending'],
    datasets: [
      {
        label: 'Payment Analysis',
        data: [63, 25],
        fill: false,
        backgroundColor: ['#4F46E5', '#A78BFA'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F4F7FE] flex flex-col w-full">
      <div className="flex justify-between mb-16">
        <div className="flex flex-col w-full">
          <h1 className="text-[#2B3674] font-semibold text-3xl">Generate Bill</h1>
          <h3 className="text-xl text-[#05CD99]">Lalitpur Branch</h3>
        </div>
        <SearchBar />
      </div>
 


    <Summary/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md h-[500px]">
          <div className="text-gray-500 mb-4">Total Payments</div>
          <Line data={lineData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-[500px]">
          <div className="text-gray-500 mb-4">Payment Analysis</div>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
