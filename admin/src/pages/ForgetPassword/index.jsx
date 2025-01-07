import React from "react";
import logo from "../../assets/logo.webp";

const ForgetPassword = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="text-center px-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-5">
            RESET YOUR PASSWORD <br /> FOR A SECURE ACCOUNT
          </h1>
          <p className="text-gray-600 mb-8">
            Don't worry if you forgot your password. Enter your email address,
            and we will send you instructions to reset it.
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
            <h2 className="text-2xl font-bold text-gray-800">Forgot Password</h2>
            <p className="text-sm text-gray-500 mt-2">
              Enter your email and we’ll send you a link to reset your password.
            </p>
          </div>

          <form>
            {/* Email Input */}
            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              SEND RESET LINK
            </button>

            {/* Back to Login Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Remember your password?{" "}
              <a href="/login" className="text-blue-600 font-medium hover:underline">
                Back to Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
