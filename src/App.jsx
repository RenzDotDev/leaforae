import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./assets/Landing Page/LandingPage";
import ProductPage from "./assets/Product Page/ProductPage";
import BlogPage from "./assets/Blog Page/BlogPage";
import ContactPage from "./assets/Contact Page/ContactPage";
import SignUpPage from "./assets/Sign Up Page/SignUpPage";
import CartPage from "./assets/Cart Page/CartPage";
import PaymentPage from "./assets/Payment Page/PaymentPage";
import ProfilePage from "./assets/Profile Page/ProfilePage";

function App() {
  return (
    <div className="w-[100dvw] h-screen max-w-[1440px] min-w-[320px] mx-auto">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Payment" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;
