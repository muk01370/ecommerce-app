import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiEdit, FiTrash2, FiDownload } from "react-icons/fi";

const CRM = ({ isDarkmode }) => {
  // Sample chart data
  const data = [
    { day: "S", value: 40 },
    { day: "M", value: 50 },
    { day: "T", value: 35 },
    { day: "W", value: 60 },
    { day: "T", value: 70 },
    { day: "F", value: 45 },
    { day: "S", value: 65 },
  ];

  const cards = [
    {
      title: "Campaign Sent",
      value: "6,790",
      change: "+45%",
      color: "text-blue-500",
    },
    {
      title: "Leads Generate",
      value: "5,397",
      change: "+35%",
      color: "text-orange-500",
    },
    {
      title: "Deals Customer",
      value: "4,278",
      change: "-25%",
      color: "text-green-500",
    },
    {
      title: "Revenue Booked",
      value: "3,594",
      change: "+15%",
      color: "text-purple-500",
    },
  ];

  const dealsData = [
    {
      id: 1,
      name: "Miron Mahmud",
      email: "miron@gmail.com",
      amount: "$5,689.00",
      status: "Won Leads",
      date: "15/06/2022 14:00",
    },
    {
      id: 2,
      name: "Tahmina Begum",
      email: "tahmina@gmail.com",
      amount: "$4,578.00",
      status: "New Leads",
      date: "15/06/2022 14:00",
    },
    {
      id: 3,
      name: "Labonno Khatun",
      email: "labonno@gmail.com",
      amount: "$6,872.00",
      status: "Open Leads",
      date: "15/06/2022 14:00",
    },
    {
      id: 4,
      name: "Sheikh Adam",
      email: "sheikh@gmail.com",
      amount: "$6,890.00",
      status: "Won Leads",
      date: "15/06/2022 14:00",
    },
    {
      id: 5,
      name: "Johara Khatun",
      email: "johara@gmail.com",
      amount: "$5,347.00",
      status: "New Leads",
      date: "15/06/2022 14:00",
    },
    {
      id: 6,
      name: "Kurulus Osman",
      email: "kurulus@gmail.com",
      amount: "$7,920.00",
      status: "Lost Leads",
      date: "15/06/2022 14:00",
    },
  ];

  return (
    <div
      className={`p-[20px] w-full min-h-screen ${
        isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-[20px]">
        <h1
          className={`text-2xl font-bold ${
            isDarkmode ? "text-white" : "text-gray-800"
          }`}
        >
          CRM
        </h1>
        <span
          className={`font-inter font-medium ${
            isDarkmode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Home → Dashboard → CRM
        </span>
      </div>

      {/* Stat Cards */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[20px] mb-[30px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-lg p-[20px] ${
              isDarkmode ? "bg-[#112143]" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <h3
                className={`text-lg font-bold ${
                  isDarkmode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {card.title}
              </h3>
              <span className={`font-medium ${card.color}`}>{card.change}</span>
            </div>
            <p className="text-2xl font-bold mt-[10px]">{card.value}</p>
            {/* Chart */}
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={card.color.replace("text-", "")}
                  strokeWidth={2}
                  animationDuration={500}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      {/* Deals Table */}
      <div
        className={`rounded-lg p-[20px] mb-[30px] ${
          isDarkmode ? "bg-[#112143]" : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center mb-[20px]">
          <h3
            className={`text-lg font-bold ${
              isDarkmode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Deals Performance
          </h3>
          <div className="flex gap-[10px]">
            <select
              className={`p-[5px] rounded ${
                isDarkmode ? "bg-[#071739] text-gray-200" : "bg-[#F8F8F8]"
              }`}
            >
              <option>12 Row</option>
            </select>
            <select
              className={`p-[5px] rounded ${
                isDarkmode ? "bg-[#071739] text-gray-200" : "bg-[#F8F8F8]"
              }`}
            >
              <option>Won Leads</option>
            </select>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr
              className={`text-left ${
                isDarkmode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <th>S.L</th>
              <th>Representer</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Issue Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dealsData.map((deal) => (
              <tr key={deal.id} className="border-t">
                <td>{deal.id}</td>
                <td>{deal.name}</td>
                <td>{deal.email}</td>
                <td>{deal.amount}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded ${
                      deal.status === "Won Leads"
                        ? "bg-green-500 text-white"
                        : deal.status === "New Leads"
                        ? "bg-blue-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {deal.status}
                  </span>
                </td>
                <td>{deal.date}</td>
                <td className="flex gap-2">
                  <FiEdit className="text-gray-500 cursor-pointer" />
                  <FiTrash2 className="text-red-500 cursor-pointer" />
                  <FiDownload className="text-blue-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CRM;
