'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import aeets1 from '../Assets23/81fPKd-2AYL._AC_SL1500_.jpg'
import ases2 from '../Assets23/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
import asets3 from '../Assets23/71li-ujtlUL._AC_UX679_.jpg'
import assets4 from '../Assets23/71YXzeOuslL._AC_UY879_.jpg'
import Image from 'next/image';
// Registering the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  // Chart data for the "Sales Overview"
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [
      {
        label: 'Sales ($)',
        data: [3000, 4000, 2500, 3500, 4500, 5000], // Y-axis data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Popular products sales data
  const popularProducts = [
    { id: 1, name: 'Jacket', quantity: 150, revenue: '$3,000' , img: ases2 },
{ id: 2, name: 'Sweater', quantity: 120, revenue: '$2,400' , img:asets3},
    { id: 3, name: 'Bag', quantity: 200, revenue: '$4,000' , img:aeets1},
    { id: 4, name: 'Jacket Cotton', quantity: 80, revenue: '$1,600' , img:assets4},
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Analytical Dashboard</h1>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-blue-700">
          Export Data
        </button>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Summary Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Sales */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-gray-600 text-xl font-bold">Total <span className=' text-blue-500'>Sales</span></h2>
            <p className="text-3xl font-bold text-green-600">$10,000</p>
          </div>

          {/* Orders */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-yellow-600 text-xl font-bold">Orders</h2>
            <p className="text-3xl font-bold text-blue-600">350</p>
          </div>

          {/* Visitors */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-gray-600 text-xl font-bold">Visitors</h2>
            <p className="text-3xl font-bold text-yellow-600">1,200</p>
          </div>

          {/* Conversion Rate */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-blue-600 text-xl font-bold"  >Conversion Rate</h2>
            <p className="text-3xl font-bold text-purple-600">3.5%</p>
          </div>
        </div>

        {/* Graph Section */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h2 className=" text-fuchsia-400 font-semibold mb-4 text-xl">Sales Overview</h2>
          <div className="h-64 bg-gray-100 rounded flex justify-center items-center">
            {/* Chart Component */}
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Popular Products Sales */}
        <div className="bg-white p-6 shadow rounded-lg mb-8">
          <h2 className="text-lg font-semibold mb-4">Popular Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                    <th className="border-b p-2">Product Image</th>
                    <th className="border-b p-2">Product Name</th>
                  <th className="border-b p-2">Quantity Sold</th>
                  <th className="border-b p-2">Revenue</th>
                </tr>
              </thead>
              <tbody>
              {popularProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="p-2">
                      <Image
                        src={product.img}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="object-cover rounded"
                      />
                    </td>
                    <td className="p-2">{product.name}</td>
                    <td className="p-2">{product.quantity}</td>
                    <td className="p-2">{product.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b p-2">Order ID</th>
                  <th className="border-b p-2">Customer</th>
                  <th className="border-b p-2">Amount</th>
                  <th className="border-b p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">#1001</td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">$200</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>
                <tr>
                  <td className="p-2">#1002</td>
                  <td className="p-2">Jane Smith</td>
                  <td className="p-2">$150</td>
                  <td className="p-2 text-yellow-600">Pending</td>
                </tr>
                <tr>
                  <td className="p-2">#1003</td>
                  <td className="p-2">Michael Brown</td>
                  <td className="p-2">$300</td>
                  <td className="p-2 text-red-600">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
