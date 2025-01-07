import React, { createContext, useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import SignUp from "./Pages/SignUp";
import axios from "axios";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import cartService from "./services/cartService";

const myContext = createContext(null);

function App() {
    const [countryList, setCountryList] = useState([]);
    const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null); // Track logged-in user
    const [showSignInPopup, setShowSignInPopup] = useState(false);
    const [cart, setCart] = useState([]); // For cart management

    // Fetch countries on mount
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://countriesnow.space/api/v0.1/countries/");
                if (response?.data?.data) {
                    setCountryList(response.data.data);
                } else {
                    console.warn("No country data received.");
                }
            } catch (error) {
                console.error("Error fetching country data:", error);
            }
        };

        fetchCountries();
        
        // Check for token to set login status
        const token = localStorage.getItem("token");
        if (token) {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            setUser(storedUser); // Restore user from local storage
            setIsLogin(true);
        }

        // Initialize cart from localStorage
        console.log("Initializing cart from localStorage");
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        // ... existing code
    
        // Initialize cart from localStorage
        console.log("Initializing cart from localStorage");
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    
        // Fetch cart from server if user is logged in
        if (isLogin && user) {
            const fetchCart = async () => {
                try {
                    const cartData = await cartService.getCartItems(user.id); // Assuming user.id is available
                    setCart(cartData.items); // Update the context with fetched cart items
                } catch (error) {
                    console.error("Failed to fetch cart items:", error);
                }
            };
            fetchCart();
        }
    }, []);

    // SignIn popup handlers
    const handleSignInOpen = useCallback(() => setShowSignInPopup(true), []);
    const handleSignInClose = useCallback(() => setShowSignInPopup(false), []);

    // Function to add product to cart
    const onAddToCart = useCallback((product) => {
        console.log("Adding product to cart:", product);
        setCart((prevCart) => {
            console.log("Current cart before addition:", prevCart);
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex >= 0) {
                // Product already in cart, update quantity
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += product.quantity;
                return updatedCart;
            } else {
                // New product, add to cart
                return [...prevCart, { ...product, quantity: product.quantity }];
            }
        });
    }, []);

    // Function to remove product from cart
    const onRemoveFromCart = useCallback((productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }, []);

    const createOrder = useCallback(async (orderData) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("User not authenticated");
            }
            const response = await axios.post("/api/orders", orderData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error("Order creation failed:", error);
            throw error;
        }
    }, []);

    const values = {
        onAddToCart,
        onRemoveFromCart,
        countryList,
        isHeaderFooterShow,
        setIsHeaderFooterShow,
        isLogin,
        setIsLogin,
        user,
        setUser,
        handleSignInOpen,
        handleSignInClose,
        showSignInPopup,
        cart,
        setCart,
        createOrder,
    };

    return (
        <BrowserRouter>
            <myContext.Provider value={values}>
                {isHeaderFooterShow && <Header cart={cart} />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cat/:id" element={<Listing />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                {isHeaderFooterShow && <Footer />}
                {/* Sign-In Popup */}
                <SignIn show={showSignInPopup} onClose={handleSignInClose} />
            </myContext.Provider>
        </BrowserRouter>
    );
}

export default App;
export { myContext };
