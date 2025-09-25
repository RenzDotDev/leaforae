import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="w-dvw h-dvh max-w-[1440px] my-0 mx-auto relative">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
