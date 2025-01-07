import React from "react";

const InvoiceList = () => {
  const invoices = [
    {
      id: "#001",
      customer: "John Doe",
      email: "john@example.com",
      amount: "$500.00",
      status: "Paid",
      issueDate: "2024-01-20",
      dueDate: "2024-02-20",
    },
    {
      id: "#002",
      customer: "Jane Smith",
      email: "jane@example.com",
      amount: "$750.00",
      status: "Pending",
      issueDate: "2024-01-25",
      dueDate: "2024-02-25",
    },
    {
      id: "#003",
      customer: "Mike Johnson",
      email: "mike@example.com",
      amount: "$320.00",
      status: "Overdue",
      issueDate: "2024-01-10",
      dueDate: "2024-01-30",
    },
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Invoice List</h1>
        <nav className="text-gray-600">
          Home <span className="mx-2">~</span> Billing <span className="mx-2">~</span> Invoice List
        </nav>
      </div>

      {/* Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-gray-600 block mb-1">Invoice Status</label>
            <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
              <option>All</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 block mb-1">Search</label>
            <input
              type="text"
              placeholder="Invoice ID or Customer"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="p-2">Invoice ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Email</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
              <th className="p-2">Issue Date</th>
              <th className="p-2">Due Date</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-b hover:bg-gray-50 text-gray-700"
              >
                <td className="p-2">{invoice.id}</td>
                <td className="p-2">{invoice.customer}</td>
                <td className="p-2">{invoice.email}</td>
                <td className="p-2">{invoice.amount}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-lg text-sm ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : invoice.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="p-2">{invoice.issueDate}</td>
                <td className="p-2">{invoice.dueDate}</td>
                <td className="p-2 text-center">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    View
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700 mr-2">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">Showing 3 of 50 results</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-300 text-gray-600 rounded hover:bg-gray-400">
              1
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200">
              2
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200">
              3
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200">
              ...
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200">
              5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;
