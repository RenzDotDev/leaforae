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
    { name: "Japanese painted fern", url: "https://perenual.com/storage/species_image/1114_athyrium_branford_rambler/medium/1536px-Athyrium_niponicum_27Red_Beauty27_kz02.jpg"},
    { name: "Maidenhair spleenwort", url: "https://perenual.com/storage/species_image/1043_asplenium_trichomanes/medium/51698793799_a69d99ba08_b.jpg"}
  ]

  const flowerPlants = [
    { name: "Giant milkweed", url: "https://perenual.com/storage/species_image/1509_calotropis_gigantea/medium/24847034070_f858b07333_b.jpg"},
    { name: "Tickseed", url: "https://perenual.com/storage/species_image/2047_coreopsis_auriculata_nana/medium/1971324341_d79a58e3a9_b.jpg"},
    { name: "Horn of Plenty", url: "https://perenual.com/storage/species_image/2319_datura_metel/medium/48861017193_05f55aca0f_b.jpg"}
  ]

  const [activeCategory, setActiveCategory] = useState("succulents")
  const [plants, setPlants] = useState(succulentPlants)

  // update plants whenever category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === "succulents") setPlants(succulentPlants)
    if (category === "ferns") setPlants(fernPlants)
    if (category === "flowers") setPlants(flowerPlants)
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
