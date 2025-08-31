import React from 'react'

import "/src/assets/Landing_Page/style/header.css";

function Header() {
  return (
    <>
        <header>
            <section className="logo-con">
                <img src="public/Leaforae Logo.png" alt="" />
                <h1>Leaforaé</h1>
            </section>

            <nav className="nav-con">
                <a href="" className="active-link">Home</a>
                <a href="" className="">Products</a>
                <a href="" className="">Blog</a>
                <a href="" className="">Contact</a>
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