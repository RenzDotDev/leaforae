import React from 'react'

import "../style/productList.css"

function ProductList() {
  return (
    <div className='product-list-con'>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
        <ProductCard url={`https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg`}/>
    </div>
  )
}

export default ProductList

function ProductCard({ url }) {
    return(
        <section className='product-card' style={{backgroundImage:`url('${url}')`,backgroundRepeat: "no-repeat"}}>
            <div className="product-card-header">
                <div className="rating-con">
                    <i className="fa-solid fa-star"></i>
                    <p>4.9</p>
                </div>

                <button>
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>

            <div className="product-card-detail">
                <p className="product-name">Maidhen Fern</p>
                <div className="product-price">
                    <p className="price">$12.99</p>
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