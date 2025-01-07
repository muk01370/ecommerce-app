import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main, Navbar, Sidebar } from "./components";
import ProductUpload from "./pages/ProductUpload";
import Analytics from "./pages/Analytics";
import CrmPage from "./pages/CrmPage";
import ProductList from "./pages/ProductList";
import ProductView from "./pages/ProductView";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";
import MyAccount from "./pages/MyAccount";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetails from "./pages/InvoiceDetails";
import OrderList from "./pages/OrderList";
import CategoryAdd from "./pages/CategoryAdd";
import Category from "./pages/Category";

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkmode, setIsDarkmode] = useState(true);

  return (
    <Router>
      {/* Navbar Component */}
      <Navbar
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        isDarkmode={isDarkmode}
        setIsDarkmode={setIsDarkmode}
      />

      {/* Main Layout */}
      <div
        className={`flex pt-[80px] h-screen overflow-hidden ${
          isDarkmode ? "bg-[#071739]" : "bg-[#F8F8F8]"
        }`}
      >
        {/* Sidebar Component */}
        <Sidebar showSideBar={showSideBar} isDarkmode={isDarkmode} />

        {/* Main Content Area */}
        <div className="flex-1 p-4 overflow-scroll scrollbar">
          <Routes>
            <Route path="/" element={<Main isDarkmode={isDarkmode} />} />
            <Route path="/Ecommerce" element={<Main isDarkmode={isDarkmode} />} />
            <Route path="/Analytics" element={<Analytics isDarkmode={isDarkmode} />} />
            <Route path="/CRM" element={<CrmPage isDarkmode={isDarkmode} />} />
            <Route path="/user-list" element={<UserList isDarkmode={isDarkmode} />} />
            <Route path="/user-profile" element={<UserProfile isDarkmode={isDarkmode} />} />
            <Route path="/my-account" element={<MyAccount isDarkmode={isDarkmode} />} />
            <Route path="/login" element={<Login isDarkmode={isDarkmode} />} />
            <Route path="/register-page" element={<RegisterPage isDarkmode={isDarkmode} />} />
            <Route path="/forget-password" element={<ForgetPassword isDarkmode={isDarkmode} />} />
            <Route path="/invoice-list" element={<InvoiceList isDarkmode={isDarkmode} />} />
            <Route path="/invoice-detail" element={<InvoiceDetails isDarkmode={isDarkmode} />} />
            <Route path="/order-lists" element={<OrderList isDarkmode={isDarkmode} />} />
            <Route path="/product-list" element={<ProductList isDarkmode={isDarkmode} />} />
            <Route path="/product-view" element={<ProductView isDarkmode={isDarkmode} />} />
            <Route path="/product-upload" element={<ProductUpload isDarkmode={isDarkmode} />} />
            <Route path="/category-list" element={<Category isDarkmode={isDarkmode} />} />
            <Route path="/category-add" element={<CategoryAdd isDarkmode={isDarkmode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
