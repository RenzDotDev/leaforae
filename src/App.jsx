import { useState } from 'react'
import './App.css'

import LandingPage from './assets/Landing Page/LandingPage';
import ProductPage from './assets/Product Page/component/ProductPage';
import BlogPage from './assets/Blog Page/component/BlogPage';
import ContactPage from './assets/Contact Page/component/ContactPage';

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
