import React from 'react'

import '../Header/header.css';

function Header() {

  return (
    <>
        <header>
            <section className="logo-con">
                <img src="Leaforae Logo.png" alt="" />
                <h1>Leaforaé</h1>
            </section>

            <nav className="nav-con">
                <CustomLink href={"/"} linkText={"Home"} />
                <CustomLink href={"/Product"} linkText={"Product"} />
                <CustomLink href={"/Blog"} linkText={"Blog"} />
                <CustomLink href={"/Contact"} linkText={"Contact"} />
            </nav>

            <button className="cart-btn">
                <i className="fa-solid fa-cart-shopping"></i>
                <p className="cart-item-count">0</p>
            </button>
        </header>
    </>
  )
}

// Create custom link
function CustomLink({href, linkText}) {
    const path = window.location.pathname;
    let className = "";

    if (path === href) {
        className = "active-link";
    }

    return (
        <a href={href} className={className}>{linkText}</a>
    );
}

export default Header