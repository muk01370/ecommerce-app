import React from "react";

const UserList = () => {
  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User List</h1>
        <nav className="text-gray-600">
          Home <span className="mx-2">~</span> Users <span className="mx-2">~</span> User List
        </nav>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-purple-500 text-white p-5 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">547</h2>
            <p>Pending Users</p>
          </div>
          <span className="text-4xl">...</span>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">605</h2>
            <p>Approved Users</p>
          </div>
          <span className="text-4xl">✔</span>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">249</h2>
            <p>Blocked Users</p>
          </div>
          <span className="text-4xl">➖</span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="text-gray-600 text-sm">Show By</label>
            <select className="w-full p-2 border rounded">
              <option>12 Row</option>
              <option>24 Row</option>
              <option>36 Row</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-sm">Role By</label>
            <select className="w-full p-2 border rounded">
              <option>Admin</option>
              <option>Member</option>
              <option>Vendor</option>
              <option>Founder</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-sm">Status By</label>
            <select className="w-full p-2 border rounded">
              <option>Approved</option>
              <option>Pending</option>
              <option>Blocked</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 text-sm">Search By</label>
            <input
              type="text"
              placeholder="id / name / email / number"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">UID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Password</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Created</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            {[
              {
                uid: "#1",
                name: "mahmdul...",
                role: "member",
                email: "miron@gmail...",
                password: "$2a$06$40...",
                phone: "0183828389",
                status: "Approved",
                created: "15/06/2022",
              },
              {
                uid: "#2",
                name: "labonno k...",
                role: "admin",
                email: "labonno@gma...",
                password: "$2a$06$40...",
                phone: "0183828389",
                status: "Pending",
                created: "15/06/2022",
              },
              {
                uid: "#3",
                name: "tahmina b...",
                role: "member",
                email: "tahmina@gma...",
                password: "$2a$06$40...",
                phone: "0183828389",
                status: "Blocked",
                created: "15/06/2022",
              },
              // Add similar rows for other users
            ].map((user, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="p-3">{user.uid}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3 capitalize">{user.role}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.password}</td>
                <td className="p-3">{user.phone}</td>
                <td className="p-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Pending"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3">{user.created}</td>
                <td className="p-3">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">
                    ✏
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600 text-sm">showing 12 of 60 results</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            1
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            2
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            3
          </button>
          <button className="px-3 py-1 bg-gray-200 rounded">...</button>
          <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
            45
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
