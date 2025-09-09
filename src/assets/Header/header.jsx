import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useState, useRef } from 'react';

import '../Header/header.css';
import '../animation.css';

function Header() {

    const [isVisible, setIsVisible] = useState(false);

    const showSideNav = () => {
        setIsVisible(true)
    }
    
    const hideSideNav = () => {
        setIsVisible(false)     
    }

    return (
        <>
            {/* Header */}
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

                <button className='hamburger-icon' onClick={showSideNav}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </header>
            
            {/* Side navigation bar */}
            <nav className={(isVisible ? "side-nav visible" : "side-nav hidden")}>
                <div className={"nav-link-con "}>
                    <button className='close-btn' onClick={hideSideNav}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <CustomLink onClick={hideSideNav} to={"/"} linkText={"Home"} />
                    <CustomLink onClick={hideSideNav} to={"/Product"} linkText={"Product"} />
                    <CustomLink onClick={hideSideNav} to={"/Blog"} linkText={"Blog"} />
                    <CustomLink onClick={hideSideNav} to={"/Contact"} linkText={"Contact"} />
                </div>
            </nav>
        </>
    )
}

// Create custom link
function CustomLink({ to, linkText }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <Link to={to} className={isActive ? "active-link" : ""}>{linkText}</Link>
    );
}

export default Header