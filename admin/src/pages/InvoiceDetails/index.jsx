import React from "react";

const InvoiceDetails = () => {
  const invoice = {
    id: "#001",
    customer: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Springfield, USA",
    issueDate: "2024-01-20",
    dueDate: "2024-02-20",
    status: "Paid",
    items: [
      { name: "Website Development", quantity: 1, price: 500 },
      { name: "Hosting Services", quantity: 1, price: 100 },
      { name: "Domain Purchase", quantity: 1, price: 20 },
    ],
    totalAmount: "$620.00",
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Invoice Details</h1>
        <nav className="text-gray-600">
          Home <span className="mx-2">~</span> Billing <span className="mx-2">~</span> Invoice Details
        </nav>
      </div>

      {/* Invoice Overview */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Invoice Info</h2>
            <p className="text-gray-600">Invoice ID: <strong>{invoice.id}</strong></p>
            <p className="text-gray-600">Issue Date: <strong>{invoice.issueDate}</strong></p>
            <p className="text-gray-600">Due Date: <strong>{invoice.dueDate}</strong></p>
            <p className="text-gray-600">Status: 
              <span
                className={`ml-2 px-2 py-1 rounded-lg text-sm ${
                  invoice.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : invoice.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {invoice.status}
              </span>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Customer Details</h2>
            <p className="text-gray-600">Name: <strong>{invoice.customer}</strong></p>
            <p className="text-gray-600">Email: <strong>{invoice.email}</strong></p>
            <p className="text-gray-600">Phone: <strong>{invoice.phone}</strong></p>
            <p className="text-gray-600">Address: <strong>{invoice.address}</strong></p>
          </div>
        </div>
      </div>

      {/* Invoice Items */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Invoice Items</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="p-2">Item</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Price</th>
              <th className="p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 text-gray-700">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">${item.price.toFixed(2)}</td>
                <td className="p-2">${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Total Amount */}
        <div className="flex justify-end mt-4">
          <h3 className="text-xl font-bold text-gray-800">
            Total Amount: {invoice.totalAmount}
          </h3>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Print Invoice
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Download PDF
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
          Send Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceDetails;
