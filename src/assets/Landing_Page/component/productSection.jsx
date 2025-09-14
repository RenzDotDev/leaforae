import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/productSection.css"

function ProductSection() {
  const succulentPlants = [
    { name: "Jade plant", url: "https://perenual.com/storage/species_image/2193_crassula_ovata/medium/33253726791_980c738a1e_b.jpg"},
    { name: "Aloe vera", url: "https://perenual.com/storage/species_image/728_aloe_vera/medium/52619084582_6ebcfe6a74_b.jpg"},
    { name: "Torch plant", url: "https://perenual.com/storage/species_image/719_aloe_aristata/medium/23962599232_fdc4070814_b.jpg"}
  ]

  const fernPlants = [
    { name: "Maidenhair fern", url: "https://perenual.com/storage/species_image/543_adiantum_capillus-veneris/medium/49636882698_cb4fa4c685_b.jpg"},
    { name: "Tulip", url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Tulip_-_floriade_canberra.jpg"},
    { name: "Sunflower", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"}
  ]

  const flowerPlants = [
    { name: "Rose", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Red_rose.jpg"},
    { name: "Tulip", url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Tulip_-_floriade_canberra.jpg"},
    { name: "Sunflower", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"}
  ]

  const treePlants = [
    { name: "Rose", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Red_rose.jpg"},
    { name: "Tulip", url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Tulip_-_floriade_canberra.jpg"},
    { name: "Sunflower", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"}
  ]

  const herbPlants = [
    { name: "Rose", url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Red_rose.jpg"},
    { name: "Tulip", url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Tulip_-_floriade_canberra.jpg"},
    { name: "Sunflower", url: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"}
  ]

  const [activeCategory, setActiveCategory] = useState("succulents")
  const [plants, setPlants] = useState(succulentPlants)

  // update plants whenever category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === "succulents") setPlants(succulentPlants)
    if (category === "ferns") setPlants(fernPlants)
    if (category === "flowers") setPlants(flowerPlants)
    if (category === "trees") setPlants(treePlants)
    if (category === "herbs") setPlants(herbPlants)
    // add ferns / trees / herbs here later
  }

  return (
    <div className='product-section-con'>
      <Header />
      <CategoryList 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <PlantCardList plants={plants}/>
    </div>
  )
}

export default ProductSection

// ========================================
// =========== INNER COMPONENTS ===========
// ========================================

function Header() {
  return (
    <section className="product-header">
      <p className="product-text">Choose our best plants!</p>
      <Link to={"/Product"} className='view-all-btn'>
        <p>View All</p>
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </section>
  )
}

function CategoryList({ activeCategory, onCategoryChange }) {
  return (
    <section className='category-list'>
      <button onClick={() => onCategoryChange("succulents")} className={activeCategory === "succulents" ? "active-category" : ""}>Succulents</button>
      <button onClick={() => onCategoryChange("ferns")} className={activeCategory === "ferns" ? "active-category" : ""}>Ferns</button>
      <button onClick={() => onCategoryChange("flowers")} className={activeCategory === "flowers" ? "active-category" : ""}>Flowers</button>
      <button onClick={() => onCategoryChange("trees")} className={activeCategory === "trees" ? "active-category" : ""}>Trees</button>
      <button onClick={() => onCategoryChange("herbs")} className={activeCategory === "herbs" ? "active-category" : ""}>Herbs</button>
    </section>
  )
}

function PlantCardList({ plants }) {
  return (
    <section className='plant-card-list'>
      {plants.map((plant, index) => (
        <PlantCard key={index} url={plant.url} name={plant.name}/>
      ))}
    </section>
  )
}

function PlantCard({ url, name }) {
  return (
    <section className='plant-card'>
      <div className="plant-box" style={{ backgroundImage: `url(${url})` }}>
        <Link to={"/Product"} className='plant-btn'>
          <p className="plant-name">{name}</p>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  )
}
