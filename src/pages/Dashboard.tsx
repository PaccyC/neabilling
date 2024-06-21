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
import { FaUsers, FaUserCheck } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

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

      <div className="w-full h-[10vh] grid grid-cols-3 gap-8 mb-5">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="w-16 h-16 rounded-full bg-[#F4F7FE] flex items-center justify-center text-center mr-4">
            <FaUsers className="text-4xl text-[#4318FF]" />
          </div>
          <div>
            <h3 className="text-[#A3AED0]">Users</h3>
            <p className="text-2xl">45</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="w-16 h-16 rounded-full bg-[#F4F7FE] flex items-center justify-center text-center mr-4">
            <MdOutlineAttachMoney className="text-4xl text-[#4318FF]" />
          </div>
          <div>
            <h3 className="text-[#A3AED0]">Total Payments</h3>
            <p className="text-2xl">Rs. 200,000</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="w-16 h-16 rounded-full bg-[#F4F7FE] flex items-center justify-center text-center mr-4">
            <FaUserCheck className="text-4xl text-[#4318FF]" />
          </div>
          <div>
            <h3 className="text-[#A3AED0]">Active Users</h3>
            <p className="text-2xl">22</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-gray-500 mb-4">Total Payments</div>
          <Line data={lineData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-gray-500 mb-4">Payment Analysis</div>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
