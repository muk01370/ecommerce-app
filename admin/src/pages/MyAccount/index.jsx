import React, { useState } from "react";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Account</h1>
        <nav className="text-gray-600">
          Home <span className="mx-2">~</span> Users <span className="mx-2">~</span> My Account
        </nav>
      </div>

      {/* Tabs Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex space-x-6 border-b pb-2">
          <button
            className={`${
              activeTab === "edit-profile"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            } pb-2 font-semibold`}
            onClick={() => setActiveTab("edit-profile")}
          >
            Edit Profile
          </button>
          <button
            className={`${
              activeTab === "change-password"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            } pb-2 font-semibold`}
            onClick={() => setActiveTab("change-password")}
          >
            Change Password
          </button>
          <button
            className={`${
              activeTab === "other-settings"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            } pb-2 font-semibold`}
            onClick={() => setActiveTab("other-settings")}
          >
            Other Settings
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {activeTab === "edit-profile" && (
          <div>
            <h2 className="text-lg font-bold mb-4 text-gray-800">Edit Profile</h2>
            <form className="space-y-4">
              <div>
                <label className="text-gray-600 block mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-600 block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-600 block mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Save Changes
              </button>
            </form>
          </div>
        )}

        {activeTab === "change-password" && (
          <div>
            <h2 className="text-lg font-bold mb-4 text-gray-800">Change Password</h2>
            <form className="space-y-4">
              <div>
                <label className="text-gray-600 block mb-1">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-600 block mb-1">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-600 block mb-1">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Update Password
              </button>
            </form>
          </div>
        )}

        {activeTab === "other-settings" && (
          <div>
            <h2 className="text-lg font-bold mb-4 text-gray-800">Other Settings</h2>
            <form className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifications"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="notifications" className="ml-2 text-gray-600">
                  Enable Email Notifications
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="two-factor"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="two-factor" className="ml-2 text-gray-600">
                  Enable Two-Factor Authentication
                </label>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Save Settings
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
