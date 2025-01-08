import React, { useState, useContext, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLoginButtons from "../../Components/SocialLoginButtons";
import "./SignInPopup.css";
import { myContext } from "../../App";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const SignIn = ({ show, onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const context = useContext(myContext);
    const navigate = useNavigate();

    // Clear error on unmount or popup close
    useEffect(() => {
        if (!show) setError("");
    }, [show]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        if (!email || !password) {
            setError("Please fill in all fields.");
            setIsLoading(false);
            return;
        }

        try {
            // Corrected the login call to pass email and password directly
            const user = await authService.login(email, password);
            localStorage.setItem('userToken', user.token);
            context.setUser (user);
            context.setIsLogin(true); // Update context with logged-in user
            alert("Login successful!");
            onClose(); // Close the popup
            navigate("/"); // Redirect to home page
        } catch (error) {
            setError("Invalid email or password.");
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    // Render nothing if `show` is false
    if (!show) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2 className="text-center mb-4">Sign In</h2>

                {error && (
                    <p className="text-danger text-center" aria-live="assertive">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                    <div className="form-check mb-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing In..." : "Sign In"}
                    </button>
                </form>

                <div className="text-center mt-3">
                    <a href="#forgot" className="text-decoration-none">
                        Forgot password?
                    </a>
                </div>

                <SocialLoginButtons
                    onFacebookLogin={() => console.log("Facebook login logic")}
                    onGoogleLogin={() => console.log("Google login logic")}
                />

                <div className="signup-link text-center mt-4">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-decoration-none">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
