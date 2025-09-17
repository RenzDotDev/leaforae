import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

import "../style/productCard.css"

function ProductList() {
    const defaultPlant = []
    const [plants, setPlants] = useState([])
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(0);
    const [isMaxRequest, setIsMaxRequest] = useState(false)

    useEffect(() => {
        fetch(`https://perenual.com/api/v2/species-list?key=sk-93g568b0122c4f2f012082&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
            if(data.X-RateLimit-Limit === 100) {
                setPlants([])
                setIsMaxRequest(true)
            } else {
                setPlants(data.data)
            }
        })
    }, [])

  return (
    <div className={isMaxRequest ? "product-list-con" : "message-con"}>
        {
            plants.map((plant) => {
                if (!plant.default_image || !plant.default_image.medium_url) {
                    return null; // skip rendering this plant
                }

                return(
                    <ProductCard key={plant.id} url={plant.default_image.medium_url} rating={(plant.common_name.length % 4.2 + 0.2).toFixed(1)} name={plant.common_name} price={(plant.common_name.length * 1.2).toFixed(2)}/>
                )
            })
        }

        <div className="message-con">
            <img src="/max_req.png" alt="" />
            <p>We're very sorry but our website is under maintenance. Please comeback tomorrow. Thank you!</p>
        </div>
    </div>
  )
}

export default ProductList

