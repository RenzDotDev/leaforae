import React from 'react'
import { Link } from 'react-router-dom'

import "../style/productHeader.css"

function ProductHeader() {
  return (
    <div className='product-header-con'>
        <Logo />
        <SearchBar />
        <IconList />
    </div>
  )
}

export default ProductHeader

// ===== INNER COMPONENTS =====

// Logo
function Logo() {
    return(
        <Link to={"/"} className="logo-con">
            <img src="/Leaforae Logo.png" alt="" />
            <h1>Leaforaé</h1>
        </Link>
    )
}

// Search Bar
function SearchBar() {
    
    return(
        <section className="search-bar-con">
            <input type="text" name="" id="" placeholder='Enter plant name...' />
            <i className="fa-solid fa-magnifying-glass"></i>
        </section>
    )
}

// Icon Containers
function IconList() {
    return(
        <section className="icon-list-con">
            <button className="icon-btn">
                <i className="fa-solid fa-shopping-cart"></i>
                <p className="cart-item-count">0</p>
            </button>

            <button className="icon-btn">
                <i className="fa-solid fa-heart"></i>
                <p className="cart-item-count">0</p>
            </button>

            <button className="icon-btn">
                <i className="fa-solid fa-bell"></i>
                <p className="cart-item-count">0</p>
            </button>
        </section>
    )
}