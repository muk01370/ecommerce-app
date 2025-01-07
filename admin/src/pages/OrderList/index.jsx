import React, { useState } from "react";

const OrderList = () => {
  const [filterStatus, setFilterStatus] = useState("All");

  const orders = [
    {
      id: "#001",
      customer: "John Doe",
      date: "2024-01-20",
      amount: "$150.00",
      status: "Shipped",
    },
    {
      id: "#002",
      customer: "Jane Smith",
      date: "2024-01-18",
      amount: "$220.00",
      status: "Pending",
    },
    {
      id: "#003",
      customer: "Samuel Green",
      date: "2024-01-15",
      amount: "$300.00",
      status: "Delivered",
    },
    {
      id: "#004",
      customer: "Lisa Brown",
      date: "2024-01-10",
      amount: "$75.00",
      status: "Cancelled",
    },
  ];

  const filteredOrders =
    filterStatus === "All"
      ? orders
      : orders.filter((order) => order.status === filterStatus);

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Order List</h1>
        <nav className="text-gray-600">
          Home <span className="mx-2">~</span> Orders <span className="mx-2">~</span> Order List
        </nav>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="text-gray-600 font-medium mr-2">Filter by Status:</label>
          <select
            className="p-2 border rounded-lg"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add New Order
        </button>
      </div>

      {/* Order Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 text-gray-700"
              >
                <td className="p-3 font-medium">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.date}</td>
                <td className="p-3">{order.amount}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-sm ${
                      order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    View
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <button className="text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-200">
          Previous
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg mx-1">
          1
        </button>
        <button className="text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-200">
          2
        </button>
        <button className="text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-200">
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderList;
