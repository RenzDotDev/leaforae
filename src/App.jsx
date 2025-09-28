import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./assets/Landing Page/LandingPage";
import ProductPage from "./assets/Product Page/ProductPage";
import BlogPage from "./assets/Blog Page/BlogPage";
import ContactPage from "./assets/Contact Page/ContactPage";
import SignUpPage from "./assets/Sign Up Page/SignUpPage";

function App() {
  return (
    <div className="w-[100dvw] h-fit max-w-[1440px] mx-auto">
      <div className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Product" element={<ProductPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
