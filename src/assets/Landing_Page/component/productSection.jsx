import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'

import "../style/productSection.css";

function ProductSection() {
    const [plant, setPlant] = useState({
      name: "",
      url: "",
      price: "",
      numOfSold: ""
    })

    useEffect(() => {
      Axios.get("https://perenual.com/api/v2/species-list?key=sk-93g568b0122c4f2f012082")
      .then((res) => {
        setPlant({
          name: "Plant Name",
          url: "https://perenual.com/storage/species_image/2193_crassula_ovata/medium/33253726791_980c738a1e_b.jpg",
          numOfSold: "12"
        })
      })
    }, [])

  return (
    <div className='product-section-con'>
      <Header />
      <CategoryList />
      <PlantCardList plant={plant}/>
    </div>
  )
}

export default ProductSection

// ========================================
// =========== INNER COMPONENTS =========== 
// ========================================

// Header
function Header() {
  return (
    <>
      <section className="product-header">
        <p className="product-text">Choose our best plants!</p>
        <Link to={"/Product"} className='view-all-btn'>
          <p>View All</p>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </section>
    </>
  )
}

// Category List
function CategoryList() {
  const [activeCategory, setActiveCategory] = useState("");

  const handleClick = (category) => {
    setActiveCategory(category)
  }

  return(
    <>
      <section className='category-list'>
        <button onClick={() => handleClick("succulents")} className={(activeCategory === "succulents") ? "active-category" : ""}>Succulents</button>
        <button onClick={() => handleClick("ferns")} className={(activeCategory === "ferns") ? "active-category" : ""}>Ferns</button>
        <button onClick={() => handleClick("flowers")} className={(activeCategory === "flowers") ? "active-category" : ""}>Flowers</button>
        <button onClick={() => handleClick("trees")} className={(activeCategory === "trees") ? "active-category" : ""}>Trees</button>
        <button onClick={() => handleClick("herbs")} className={(activeCategory === "herbs") ? "active-category" : ""}>Herbs</button>
      </section>
    </>
  )
}

// Plant Card List
function PlantCardList({ plant }) {
  return(
    <>
      <section className='plant-card-list'>
        <PlantCard url={plant.url} name={plant.name} numOfSold={plant.numOfSold}/>
        <PlantCard url={plant.url} name={plant.name} numOfSold={plant.numOfSold}/>
        <PlantCard url={plant.url} name={plant.name} numOfSold={plant.numOfSold}/>
      </section>
    </>
  )
}

// Plant Card
function PlantCard({url, name, numOfSold}) {
  return(
    <>
      <section className='plant-card'>
        <div className="plant-box" style={{backgroundImage: `url(${url})`}}>
          <p className="plant-name">{name}</p>
          <p>{`Sold ${numOfSold}`}</p>
        </div>
      </section>
    </>
  )
}

// =========================================
// =========== UTILITY FUNCTIONS =========== 
// =========================================
