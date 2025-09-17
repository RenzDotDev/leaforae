import React from 'react'

import { useState } from 'react'

import "../style/cartContainer.css"

// Cart Container
export default function CartContainer({ isShown, cartItemList, itemCount, onAddButtonClick, onMinusButtonClick, isDisabled}) {
    return(
        <section className='cart-list' style={{display: isShown ? "flex" : "none"}}>
            <p className="cart-header">Cart List</p>
            <div className="cart-list-con">
                {cartItemList.map((item) => (
                    <CartItem key={item.id} url={item.url} price={(item.name.length * 1.29).toFixed(2)} name={item.name} itemCount={itemCount} decreaseItemCount={onMinusButtonClick} increaseItemCount={onAddButtonClick} isDisabled={isDisabled}/>
                ))}
            </div>
        </section>
    )
}

// Cart Item
function CartItem({ url, price, name, itemCount, decreaseItemCount, increaseItemCount, isDisabled}) {
    return(
        <section className='cart-item'>
            <img src={url} alt="" />

            <div className="cart-item-detail-con">
                <p className="plant-price">${price}</p>
                <p className="plant-name">{name}</p>
            </div>

            <div className="btn-con">
                <button onClick={decreaseItemCount} disabled={isDisabled}>
                    <i className='fa-solid fa-minus'></i>
                </button>

                <p className='plant-quantity'>{itemCount}</p>

                <button onClick={increaseItemCount}>
                    <i className='fa-solid fa-add'></i>
                </button>
            </div>
        </section>
    )
}