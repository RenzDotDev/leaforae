import React from 'react'

import '../Header/header.css';

function Header() {
    let path = window.location.pathname;
    
  return (
    <>
        <header>
            <section className="logo-con">
                <img src="Leaforae Logo.png" alt="" />
                <h1>Leaforaé</h1>
            </section>

            <nav className="nav-con">
                <a href="/" className={"link " + path === "/" ? "active" : ""}>Home</a>
                <a href="/Product" className={"link " + path === "/Product" ? "active" : ""}>Products</a>
                <a href="/Blog" className={"link " + path === "/Blog" ? "active" : ""}>Blog</a>
                <a href="/Contact" className={"link " + path === "/Contact" ? "active" : ""}>Contact</a>
            </nav>

            <button className="cart-btn">
                <i class="fa-solid fa-cart-shopping"></i>
                <p className="cart-item-count">0</p>
            </button>
        </header>
    </>
  )
}

export default Header