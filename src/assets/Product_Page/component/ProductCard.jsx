import React from 'react'
import { useState } from 'react';

import "../style/productList.css"

function ProductCard({ key, url, rating, name, price }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite((prev) => !prev)
    }

    return (
        <section key={key} className='product-card' style={{ backgroundImage: `url('${url}')`, backgroundRepeat: "no-repeat" }}>
            <div className="product-card-header">
                <div className="rating-con">
                    <i className="fa-solid fa-star"></i>
                    <p>{rating}</p>
                </div>

                <button onClick={handleFavoriteClick}>
                    <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                </button>
            </div>

            <div className="product-card-detail">
                <p className="product-name">{name}</p>
                <div className="product-price">
                    <p className="price">${price}</p>
                    <div className="btn-con">
                        <button>Buy Now</button>
                        <button>
                            <i className='fa-solid fa-shopping-cart'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCard
