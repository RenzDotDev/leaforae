import { useState } from 'react'
import './App.css'

import LandingPage from "./assets/Landing_Page/landingPage.jsx";
import ProductPage from "./assets/Product_Page/productPage.jsx";
import BlogPage from "./assets/Blog_Page/blogPage.jsx";
import ContactPage from "./assets/Contact_Page/contactPage.jsx";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <LandingPage />
      break;
    case "/Product":
      component = <ProductPage />
      break;
    case "/Blog":
      component = <BlogPage />
      break;
    case "/Contact":
      component = <ContactPage />
      break;
    default:
      break;
  }
  

  return (
    <div className="container">
      {component}
    </div>
  )
}

export default App
