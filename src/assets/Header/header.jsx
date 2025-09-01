import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

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
                <CustomLink to={"/"} linkText={"Home"} />
                <CustomLink to={"/Product"} linkText={"Product"} />
                <CustomLink to={"/Blog"} linkText={"Blog"} />
                <CustomLink to={"/Contact"} linkText={"Contact"} />
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
function CustomLink({to, linkText}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <Link to={to} className={isActive ? "active-link" : ""}>{linkText}</Link>
    );
}

export default Header