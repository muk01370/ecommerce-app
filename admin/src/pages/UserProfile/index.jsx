import React from "react";

const UserProfile = () => {
  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
        <nav className="text-gray-600">
          Home <span className="mx-2">~</span> Users <span className="mx-2">~</span> Profile
        </nav>
      </div>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6 mb-6">
        <img
          src="https://via.placeholder.com/150" /* Replace with profile image URL */
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Miron Mahmud</h2>
          <p className="text-gray-500 mb-2">@mironcoder</p>
          <p className="text-gray-600 mb-2">
            Role: <span className="font-semibold">Admin</span>
          </p>
          <p className="text-gray-600">
            Email: <span className="font-semibold">miron@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-1">547</h3>
          <p>Pending Tasks</p>
        </div>
        <div className="bg-green-500 text-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-1">23</h3>
          <p>Approved Projects</p>
        </div>
        <div className="bg-red-500 text-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-1">5</h3>
          <p>Blocked Reports</p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">About</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          reprehenderit consequuntur harum voluptatem? Veniam dolor, accusantium
          dicta fuga voluptatem exercitationem itaque earum cumque repellendus
          corrupti mollitia praesentium neque doloremque rerum?
        </p>
      </div>

      {/* Contact Info */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Phone:</p>
            <p className="font-semibold text-gray-800">0183828389</p>
          </div>
          <div>
            <p className="text-gray-600">Address:</p>
            <p className="font-semibold text-gray-800">123 Main Street, Dhaka</p>
          </div>
          <div>
            <p className="text-gray-600">Country:</p>
            <p className="font-semibold text-gray-800">Bangladesh</p>
          </div>
          <div>
            <p className="text-gray-600">Website:</p>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
