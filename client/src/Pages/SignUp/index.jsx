import React, { useContext, useEffect, useState, useCallback } from "react";
import { myContext } from "../../App";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import SignIn from "../SignIn";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import authService from "../../services/authService";

const SignUp = () => {
    const [showSignInPopup, setShowSignInPopup] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [username, setUsername] = useState(""); // Added controlled state for username
    const [email, setEmail] = useState(""); // Added controlled state for email

    const context = useContext(myContext);

    // Open/Close Sign-In Popup
    const handleSignInOpen = useCallback(() => setShowSignInPopup(true), []);
    const handleSignInClose = useCallback(() => setShowSignInPopup(false), []);

    useEffect(() => {
        if (context?.setIsHeaderFooterShow) { // Corrected property name
            context.setIsHeaderFooterShow(false);
        }
    }, [context]);

    // Handle Sign-Up Form Submission
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Client-side validation
        if (!username || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            setIsLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            setIsLoading(false);
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            setIsLoading(false);
            return;
        }

        const userData = {
            name: username,
            email,
            password,
        };

        try {
            await authService.register(userData);
            alert("Registration successful!");
            handleSignInOpen(); // Show sign-in popup after successful registration
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="signUpPage">
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="card shadow-lg p-4" style={{ width: "400px" }}>
                    <div className="text-center mb-3">
                        <img src={logo} className="w-50" alt="Logo" />
                    </div>
                    <h5 className="mb-2 text-center">Create an Account</h5>
                    {error && <p className="text-danger text-center">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter your full name"
                                value={username} // Controlled input
                                onChange={(e) => setUsername(e.target.value)} // Controlled input
                                required
                            />
                        </div>
                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={email} // Controlled input
                                onChange={(e) => setEmail(e.target.value)} // Controlled input
                                required
                            />
                        </div>
                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    id="password"
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        {/* Confirm Password */}
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirm Password
                            </label>
                            <div className="input-group">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span className="ms-2">Signing Up...</span>
                                </>
                            ) : (
                                "Sign Up"
                            )}
                        </Button>
                        {/* Sign-In Link */}
                        <div className="text-center mt-3">
                            <p className="mb-0">
                                Already have an account?{" "}
                                <span
                                    className="text-primary"
                                    style={{ cursor: "pointer" }}
                                    onClick={handleSignInOpen} // Trigger popup
                                >
                                    Sign In
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {showSignInPopup && <SignIn show={showSignInPopup} onClose={handleSignInClose} />}
        </div>
    );
};

export default SignUp;
