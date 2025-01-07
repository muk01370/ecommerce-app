import React from "react";
import logo from "../../assets/logo.webp";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden p-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center">
            <img src={logo} alt="logo"/>
          </div>
          <h2 className="mt-3 text-xl font-bold text-gray-700">
            Login to Hotash
          </h2>
        </div>

        {/* Form */}
        <form>
          <div className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="enter your email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="enter your password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Select Option */}
            <div>
              <select
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Option
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="admin">Member</option>
                <option value="admin">Client</option>
                <option value="admin">Manager</option>
                <option value="admin">Vendor</option>
              </select>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300"
            >
              SIGN IN
            </button>

            {/* Forgot Password */}
            <p className="text-center text-gray-500 text-sm cursor-pointer hover:underline">
              FORGOT PASSWORD
            </p>
          </div>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300">
            <i className="fab fa-twitter mr-2"></i> Continue with Twitter
          </button>
          <button className="w-full flex items-center justify-center bg-blue-800 text-white p-3 rounded hover:bg-blue-900 transition duration-300">
            <i className="fab fa-facebook-f mr-2"></i> Continue with Facebook
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
