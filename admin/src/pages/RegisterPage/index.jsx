import React from "react";
import logo from "../../assets/logo.webp";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="text-center px-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-5">
            BEST UX/UI FASHION <br /> ECOMMERCE DASHBOARD <br /> & ADMIN PANEL
          </h1>
          <p className="text-gray-600 mb-8">
            Elit lusto dolore libero recusandae dolor dolores explicabo ullam
            cum facilis aperiam alias odio quam excepturi molestiae omnis
            inventore. Repudiandae officia placeat amet consectetur dicta
            dolorem quo.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold shadow hover:bg-blue-700"
          >
            🏠 GO TO HOME
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-sm px-6">
          <div className="text-center mb-8">
            <img
              src={logo} // Replace with your logo URL
              alt="logo"
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">Register a new account</h2>
          </div>
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I agree to all Terms & Conditions
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              SIGN UP
            </button>

            {/* Divider */}
            <div className="text-center my-6">
              <span className="text-gray-500 text-sm">or</span>
            </div>

            {/* Social Login */}
            <button className="w-full flex items-center justify-center gap-2 bg-blue-400 text-white py-3 rounded-lg mb-4 hover:bg-blue-500">
              <span>🐦</span> Continue with Twitter
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900">
              <span>📘</span> Continue with Facebook
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 font-medium hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
