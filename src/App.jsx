import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./assets/Landing Page/LandingPage";
import ProductPage from "./assets/Product Page/ProductPage";
import BlogPage from "./assets/Blog Page/BlogPage";
import ContactPage from "./assets/Contact Page/ContactPage";

function App() {
  return (
    <div className="w-dvw h-dvh relative">
      <div className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Product" element={<ProductPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
