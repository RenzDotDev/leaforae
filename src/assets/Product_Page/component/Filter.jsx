import React from 'react'

import "../style/filter.css"

function Filter() {
  return (
    <div className='filter-con'>
        <FilterHeader />
        <CategoryContainer />
        <PriceSlider />
    </div>
  )
}

export default Filter

// Inner Components
function FilterHeader() {
    return(
        <>
            <section className="filter-header-con">
                <p className='filter-header-text'>Filters</p>
                <button>
                    <p>Clear all filters</p>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </section>
        </>
    )
}

function CategoryContainer() {
    return(
        <>
            <section className="category-con">
                <p className='category-text' style={{color: "#f2f2f2", fontWeight: "500", fontSize: "16px"}}>Light Requirements</p>
                <div className="category-list">
                    <CategoryCheckBox checkBoxName="Full Sun"/>
                    <CategoryCheckBox checkBoxName="Full Shade"/>
                </div>
            </section>
            <section className="category-con">
                <p className='category-text' style={{color: "#f2f2f2", fontWeight: "500", fontSize: "16px"}}>Watering Needs</p>
                <div className="category-list">
                    <CategoryCheckBox checkBoxName="Frequent"/>
                    <CategoryCheckBox checkBoxName="Average"/>
                    <CategoryCheckBox checkBoxName="Minimum"/>
                    <CategoryCheckBox checkBoxName="None"/>
                </div>
            </section>
        </>
    )
    
}

// Category Checkbox
function CategoryCheckBox({ checkBoxName }) {
    return(
        <div className="category-item">
            <input type="checkbox" name="" id={checkBoxName} />
            <label htmlFor={checkBoxName} style={{color: "#f2f2f2"}}>{checkBoxName}</label>
        </div>
    )
}

// Prize Container
function PriceSlider() {
    return(
        <section className="price-slider-con">
            <p className='category-text' style={{color: "#f2f2f2", fontWeight: "500", fontSize: "16px"}}>Price</p>
            
            <div className="range-input-con">
                <div className="range-input">
                    <label htmlFor="" style={{color: "#f2f2f2", fontSize: "16px", fontWeight: "300"}}>From</label>
                    <input type="text" placeholder='min' />
                </div>
                <div className="range-input">
                    <label htmlFor="" style={{color: "#f2f2f2", fontSize: "16px", fontWeight: "300"}}>To</label>
                    <input type="text" placeholder='max' />
                </div>
            </div>
        </section>
    )
}