import { useState } from 'react'
import './App.css'

import LandingPage from "./assets/Landing_Page/landingPage.jsx";
import ProductPage from "./assets/Product_Page/productPage.jsx";
import BlogPage from "./assets/Blog_Page/blogPage.jsx";
import ContactPage from "./assets/Contact_Page/contactPage.jsx";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Product' element={<ProductPage />} />
        <Route path='/Blog' element={<BlogPage />} />
        <Route path='/Contact' element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
