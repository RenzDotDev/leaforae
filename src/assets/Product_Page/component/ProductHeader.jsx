import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'

import CartContainer from './CartContainer'

import "../style/productHeader.css"

function ProductHeader() {
    const [isShown, setIsShown] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true)
    const [itemCount, setItemCount] = useState(1)
    
    const defaultCartItems = [
        { id: 1, name: "Tickseed", url: "https://perenual.com/storage/species_image/2047_coreopsis_auriculata_nana/medium/1971324341_d79a58e3a9_b.jpg"},
    ]

    const increaseItemCount = () => {
        if (itemCount > 1) {
            setIsDisabled(false)
        }
        setItemCount(itemCount + 1)
    }

    const decreaseItemCount = () => {
        setItemCount(itemCount - 1)
        if (itemCount === 1) {
            setIsDisabled(true)
        }
    }
    
    const handleCartIconClick = () => {
        setIsShown((prev) => !prev)
    }

  return (
    <div className='product-header-con'>
        <Logo />
        <SearchBar />
        <IconList handleCartIconClick={handleCartIconClick} cartListCount={defaultCartItems.length}/>

        <CartContainer isShown={isShown} cartItemList={defaultCartItems} itemCount={itemCount} onAddButtonClick={increaseItemCount} onMinusButtonClick={decreaseItemCount} isDisabled={isDisabled}/>
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
function IconList({handleCartIconClick, cartListCount}) {
    return(
        <section className="icon-list-con">
            <button className="icon-btn" onClick={handleCartIconClick}>
                <i className="fa-solid fa-shopping-cart"></i>
                <p className="cart-item-count">{cartListCount}</p>
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

